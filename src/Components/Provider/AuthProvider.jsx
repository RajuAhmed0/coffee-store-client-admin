import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

import { createContext } from 'react';
import { auth } from '../../Firebase/firebase.config';


export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {

    const userCreate = (email, pass) => {
        return createUserWithEmailAndPassword(auth, email, pass)
    }
    const signIn = (email, pass) => {
        return signInWithEmailAndPassword(auth, email, pass)
    }



    const coffeeInfo = {
        userCreate,
        signIn,
    }
    return (
        <AuthContext.Provider value={coffeeInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;