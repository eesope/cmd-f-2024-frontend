import { signInWithGooglePopup } from "C:/Users/User/OneDrive/Documents/Gnosis/cmd-f-2024-frontend/src/signinGoogle.jsx"
const SignIn = () => {
    const logGoogleUser = async () => {
            const response = await signInWithGooglePopup();
            console.log(response);
        }
    return (
            <div>
                <button onClick={logGoogleUser}>Sign In With Google</button>
            </div>
        )
    }
    export default SignIn;