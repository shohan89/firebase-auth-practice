import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import auth from '../Firebase/firebase.init';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    // Function to register a new user using Firebase Authentication
    const registerUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // Function to login a user
    const loginUser = (email, password) => {
        console.log('Login button clicked!', email, password);
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const loggedInUser = result.user;
                console.log("🚀 ~ loginUser ~ loggedInUser:", loggedInUser)
            })
            .catch(error => {
                console.error("Error logging in user: ", error.message);
            })
    }

    // create an observer for auth state change
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            if(currentUser){
                console.log('Auth state changed, current user: ', currentUser);
            }
            else{
                console.log('No user is signed in.');
            }
        })
    },[])

    // Context value to be provided to children components
    const authInfo = {
        registerUser,
        loginUser,
        user,
        setUser
    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>{ children }</AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;