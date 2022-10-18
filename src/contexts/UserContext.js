import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import app from '../firebase/firebase.config';

export const AuthContext = createContext();

const auth = getAuth(app);

const UserContext = ({ children }) => {
    const [user, setUser] = useState(null);

    //craete for signUp page[2]: createUserWithEmailAndPassword: // for useContext
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    //create for signIn/Login page[1]: signInWithEmailAndPassword: // for useContex
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    //create for signOut: 
    const logOut = () => {
        return signOut(auth);
    }

    //03. use observe ata karo picone set korle se kothy kothy jay amra dekhte pabo
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('current user inside statee change', currentUser);
            setUser(currentUser);
        });
        return () => unSubscribe();

    }, [])


    const authInfo = { user, createUser, signIn, logOut } // create value useContex a pete hole eikhne set kora lagbe

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default UserContext; 