/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import axios from 'axios'
import {
    createUserWithEmailAndPassword,
    getAuth,
    GoogleAuthProvider,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
    onAuthStateChanged,
} from 'firebase/auth'
import { app } from '../Firebase/firebase.config'

export const AuthContext = createContext(null);

const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider();

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const signInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const logOut = async () => {
        setLoading(true)
        return signOut(auth)
    }

    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
        })
    }


    // onAuthStateChange
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            const userEmail = currentUser?.email || user?.email;
            const loggedUser = {email: userEmail}
            setUser(currentUser)
            console.log('CurrentUser', currentUser)
            setLoading(false);
            // if user exists then issue a token
            if(currentUser){

                axios.post(`${import.meta.env.VITE_API_URL}/jwt`,loggedUser, {withCredentials: true})
                .then(res=>{
                    console.log('token response',res.data);
                })
            }
            else{
                axios.post(`${import.meta.env.VITE_API_URL}/logout`, loggedUser,{
                    withCredentials: true
                })
                .then(res=>{
                    console.log(res.data);
                })
            }
        })
        return () => {
            return unsubscribe()
        }
    }, [])


    const authInfo = {
        user,
        setUser,
        createUser,
        loading,
        setLoading,
        signIn,
        logOut,
        signInWithGoogle,
        updateUserProfile,
    }
    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
      )
};

export default AuthProvider;