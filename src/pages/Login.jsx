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
                        <h1 className="text-2xl text-center">
                            Welcome Back!
                        </h1>
                    </header>
                    <h6 className="text-l text-center"> 
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
                        <h1 className="text-2xl text-center">
                            <p> Welcome! {firebase.auth().currentUser.displayName}! You are now ready to study!</p>
                        </h1>
                    </header>

                    <div className="p-5 flex flex-col gap-8"> 
                        <a href="/my-page">
                        <div className="w-full text-center justify-center rounded-md border border-transparent
                         bg-yellow-100 px-4 py-4 text-sm font-medium text-yellow-900
                          hover:bg-yellow-200 focus:outline-none focus-visible:ring-2
                           focus-visible:ring-yellow-500 focus-visible:ring-offset-2">
                            My Page
                        </div>
                        </a>
                    </div>

                    <div className="p-5 flex flex-col gap-8"> 
                        <a onClick={() => firebase.auth().signOut()}>
                        <div className="w-full text-center justify-center rounded-md border border-transparent
                         bg-yellow-100 px-4 py-4 text-sm font-medium text-yellow-900
                          hover:bg-yellow-200 focus:outline-none focus-visible:ring-2
                           focus-visible:ring-yellow-500 focus-visible:ring-offset-2">
                            Sign out?
                        </div>
                        </a>
                    </div>
                </div>
            </div>
    );
    
}

export default Login;