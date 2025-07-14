import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateCurrentUser } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";


export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    // states
    const [user, setUser] = useState(null)

    // google provider
    const googleProvider = new GoogleAuthProvider();


    // email register
    const register = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // email login
    const login = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    // google login and register
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider);
    }

    // logout
    const logout = () => {
        return signOut(auth);
    }

    // user status update

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
        })
        return () => {
            unsubscribe();
        }
    },[])


    const AuthInfo = {
        register,
        login,
        googleLogin,
        logout
    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;