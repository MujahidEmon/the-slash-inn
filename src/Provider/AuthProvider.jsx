import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, updateCurrentUser } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";


export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    // states
    const [user, setUser] = useState(null)

    // google provider
    const googleProvider = GoogleAuthProvider();


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
        googleLogin
    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;