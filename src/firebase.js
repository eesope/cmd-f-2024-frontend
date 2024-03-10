import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getFirestore } from 'firebase/firestore';

const config = {
    apiKey: 'AIzaSyA_Dg0hVBRYId9LClt4l9QHlElJX23Qj0o',
    authDomain: 'cmd-f-2024-gnosis.firebaseapp.com',
    projectId: "cmd-f-2024-gnosis",
    // Add other Firebase configurations as needed
};

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const db = getFirestore();
