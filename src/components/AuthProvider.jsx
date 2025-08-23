import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { createContext } from 'react';
import auth from '../Firebase/firebase.init';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    // Function to register a new user using Firebase Authentication
    const registerUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const loggedInUser = result.user;
                console.log("🚀 ~ registerUser ~ loggedInUser:", loggedInUser)
            })
            .catch(error => {
                console.error("Error registering user: ", error.message);
            })
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

    // Context value to be provided to children components
    const authInfo = {
        registerUser,
        loginUser
    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>{ children }</AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;