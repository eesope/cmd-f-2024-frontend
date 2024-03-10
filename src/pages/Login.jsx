import React, {useEffect, useState} from 'react';
import StyledFirebasedAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

import { auth } from '../firebase'; // Import auth from firebase.js

const uiConfig = {
    signInFlow: 'popup',
    signInSuccessUrl: '/signedIn',
    signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ],
    callbacks: {
        signInSuccessWithAuthResult: () => false,
    },
};


function Login() {
    const [isSignedIn, setIsSignedIn] = useState(false);

    useEffect(() => {
        const unregisteredAuthObserver = firebase.auth().onAuthStateChanged(user => {
            setIsSignedIn(!!user);
        });
        return () => unregisteredAuthObserver();
    }, []);

    if (!isSignedIn) {
        return (
            <div className="pt-20 px-10">
                <div>
                    <header>
                        <h1>
                            Welcome Back!
                        </h1>
                    </header>
                    <h6> 
                        Ready to start studying?
                        <StyledFirebasedAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
                    </h6>
                </div>
            </div>
        );
    }
    return (
        <div className="pt-20 px-10">
                <div>
                    <header>
                        <h1>
                            <p> Welcome! {firebase.auth().currentUser.displayName}! You are now ready to study!</p>
                        </h1>
                    </header>
                    <h6> 
                        Sign out?
                        <a onClick={() => firebase.auth().signOut()}>Sign out</a>
                    </h6>
                </div>
            </div>
    );
    
}

export default Login;