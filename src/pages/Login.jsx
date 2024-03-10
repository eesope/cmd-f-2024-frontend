import React, {useEffect, useState} from 'react';
import StyledFirebasedAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const config = {
    apiKey: 'AIzaSyA_Dg0hVBRYId9LClt4l9QHlElJX23Qj0o',
    authDomain: 'cmd-f-2024-gnosis.firebaseapp.com',
    // ...
  };
  firebase.initializeApp(config);

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
                        <p>Please sign-in:</p>
                        <StyledFirebasedAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
                    </h6>
                </div>
            </div>
        );
    }
    return (
        <div>
            <p> Welcome! {firebase.auth().currentUser.displayName}! You are now ready to study!</p>
            <a onClick={() => firebase.auth().signOut()}>Sign out</a>
        </div>
    );
    
}

export default Login;