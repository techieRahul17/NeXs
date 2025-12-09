import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Check localStorage for existing token/user
        const token = localStorage.getItem('nexus_token');
        const storedUser = localStorage.getItem('nexus_user');
        if (token && storedUser) {
            setUser(JSON.parse(storedUser));
        }
        setLoading(false);
    }, []);

    const login = async (email, password) => {
        const formData = new URLSearchParams();
        formData.append('username', email);
        formData.append('password', password);

        const response = await fetch('http://localhost:8000/auth/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: formData,
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.detail || 'Login failed');
        }

        const data = await response.json();
        localStorage.setItem('nexus_token', data.access_token);

        // Decoding token manually or fetching user details would be better, 
        // but for now let's optimistically set the user based on email 
        // effectively initializing the session.
        //Ideally we should have a /users/me endpoint.

        // START TEMP: Mock user object construction for frontend state 
        // (In a real app, hit /users/me with the token)
        const mockUserObj = { email: email, name: "User", company: "" };
        // END TEMP

        setUser(mockUserObj);
        localStorage.setItem('nexus_user', JSON.stringify(mockUserObj));

        return data;
    };

    const signup = async (userData) => {
        const response = await fetch('http://localhost:8000/auth/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.detail || 'Signup failed');
        }

        const newUser = await response.json();

        // Auto-login after signup
        await login(userData.email, userData.password); // Note: Signup form needs to pass password

        return newUser;
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('nexus_user');
        localStorage.removeItem('nexus_token');
    };

    const value = {
        user,
        login,
        signup,
        logout,
        loading
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};
