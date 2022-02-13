import React, { useState, createContext, useEffect } from 'react';

import {
    createUserWithEmailAndPassword,
    getAuth,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut
} from "firebase/auth";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {

    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);

    const auth = getAuth();

    onAuthStateChanged(auth, (usr) => {
        if (usr) {
            setUser(usr)
            setIsLoading(false);
        } else {
            setIsLoading(false);
        }
    });

    useEffect(() => {
        setError(null);
    }, [])

    const onLogin = (email, password) => {
        setIsLoading(true);
        
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log("SIGNED IN SUCCESSFUL"); // Signed in 
                setUser(userCredential);
                setIsLoading(false);
            })
            .catch((error) => {
                setIsLoading(false);
                const errorCode = error.code;
                setError(errorCode.toString().substring(5));
            });
    }

    const onRegister = (email, password, repeatedPassword) => {
        setIsLoading(true);
        if (password !== repeatedPassword) {
            setError("Error: Passwords do not match");
        }
        // const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log("SIGNED UP SUCCESSFUL"); // Signed in 
                setUser(userCredential);
                setIsLoading(false);
            })
            .catch((error) => {
                setIsLoading(false);
                const errorCode = error.code;
                setError(errorCode.toString().substring(5));
            });
    }

    const onLogout = () => {
        signOut(auth).then(() => {
            setUser(null);
        }).catch((error) => {

        });
    }

    return (
        <AuthenticationContext.Provider
            value={{
                user,
                isLoading,
                error,
                onLogin,
                isAuthenticated: !!user,
                onRegister,
                onLogout,
            }}
        >
            {children}
        </AuthenticationContext.Provider>
    );
}