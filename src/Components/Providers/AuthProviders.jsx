import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from "../FirebaseConfig/Firebase.config";


export const AuthContext = createContext(null)
const AuthProviders = ({ children }) => {


    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const signUp = (email,password) => {
        setLoading(true)
       return createUserWithEmailAndPassword(auth,email,password)
    }

    const login = (email,password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth,currentUser => {
            setUser(currentUser)
            console.log(currentUser);
            setLoading(false)
        })
        return () => {
            return unsubscribe
        }
    }, [])

    const value = {user,signUp,login,logOut,loading}
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
};

export default AuthProviders;