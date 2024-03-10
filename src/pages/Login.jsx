import { useEffect, useState } from "react";
import StyledFirebasedAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
// import { auth } from "../firebase"; // Import auth from firebase.js
import { HiPencilAlt } from "react-icons/hi";
import { HiMiniArrowTopRightOnSquare } from "react-icons/hi2";

const uiConfig = {
  signInFlow: "popup",
  signInSuccessUrl: "/signedIn",
  signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
  callbacks: {
    signInSuccessWithAuthResult: () => false,
  },
};

function Login() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    const unregisteredAuthObserver = firebase
      .auth()
      .onAuthStateChanged((user) => {
        setIsSignedIn(!!user);
      });
    return () => unregisteredAuthObserver();
  }, []);

  if (!isSignedIn) {
    return (
      <div className="pt-20 px-10" style={{ minHeight: "calc(100vh - 64px)" }}>
        <div className="py-20 px-10">
          <h1 className="text-2xl text-center">Welcome Back!</h1>

          <div className="text-l text-center">
            Ready to start studying?
            <StyledFirebasedAuth
              uiConfig={uiConfig}
              firebaseAuth={firebase.auth()}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 px-10" style={{ minHeight: "calc(100vh - 64px)" }}>
      <div className="pt-10">
        <div className="text-2xl text-center">
          Welcome!
          <span className="text-yellow-600">
            {firebase.auth().currentUser.displayName}
          </span>
        </div>
        <div className="text-2xl text-center">You are now ready to study! </div>
      </div>

      <div className="p-10 flex flex-col gap-8">
        <a href="/curriculum">
          <div className="w-full flex items-center justify-center rounded-md border border-transparent bg-yellow-100 px-4 py-4 text-sm font-medium text-yellow-900 hover:bg-yellow-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 focus-visible:ring-offset-2">
            <HiPencilAlt className="w-6 h-6" />
            <span>Curriculum</span>
          </div>
        </a>
        {/* <a href="/calendar">
          <div className="w-full flex items-center justify-center rounded-md border border-transparent bg-yellow-100 px-4 py-4 text-sm font-medium text-yellow-900 hover:bg-yellow-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 focus-visible:ring-offset-2">
            <HiCalendar className="w-6 h-6" />
            <span>Calendar</span>
          </div>
        </a> */}
        <a onClick={() => firebase.auth().signOut()}>
          <div className="w-full flex items-center justify-center rounded-md border border-transparent bg-yellow-100 px-4 py-4 text-sm font-medium text-yellow-900 hover:bg-yellow-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 focus-visible:ring-offset-2">
            <HiMiniArrowTopRightOnSquare className="w-6 h-6" />
            <span>Sign out</span>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Login;
