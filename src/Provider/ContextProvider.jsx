import React, { createContext, useEffect, useState } from 'react';

import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import app from '../firbase/firbase.config';

export const AuthContext = createContext()
const auth = getAuth(app);

const ContextProvider = ({children}) => {
const [user,setUser]=useState(null)
const [loading,setLoading]= useState(false)    

// create user
const createUser = (email,password) =>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)   
}
// sign in user
const signIn=(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)

}


// Code for if page reload login info remain in console
useEffect(()=>{
    const unsubscribe=
        onAuthStateChanged(auth,(currentUser)=>{
            if(currentUser){
                console.log(currentUser)
                setUser(currentUser)
                setLoading(false)
            }
        })
        return()=>{unsubscribe()}
    
},[])

const contextInfo={user,createUser,signIn}

    return (
        <AuthContext.Provider value={contextInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default ContextProvider;