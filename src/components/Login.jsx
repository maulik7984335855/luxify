// components/Login.js
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig";
import AppContext from "../context/AppContext";

const Login = () => {
  const navigate = useNavigate();
  const {login} = useContext(AppContext)

  const handleGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const {user} =   await signInWithPopup(auth, provider);
      // console.log(user);

      // console.log(user.displayName,user.email,user.photoURL,user.uid);
      const _id = user.uid.toString();
      login(user.displayName,user.email,user.photoURL,_id);
      navigate('/orders'); 
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };

  return (
    <div className="about container bg-[#000] h-screen max-w-screen-2xl">
      <div className="h-screen text-white pt-20 flex justify-center items-center max-w-screen-2xl">
        <button onClick={handleGoogle} className="flex gap-2 items-center justify-center bg-white text-black rounded-lg p-2">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            version="1.1"
            x="0px"
            y="0px"
            viewBox="0 0 48 48"
            enableBackground="new 0 0 48 48"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#FFC107"
              d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12
                c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4
                C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
            ></path>
            <path
              fill="#FF3D00"
              d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039
                l5.657-5.657C34.046,6.053,29.268,4,24,4C16.319,4,9.505,8.292,6.306,14.691z"
            ></path>
            <path
              fill="#4CAF50"
              d="M24,44c5.139,0,9.798-1.955,13.313-5.139l-6.072-5.286C28.799,35.863,26.481,36.822,24,36.822
                c-5.205,0-9.608-3.333-11.258-7.988l-6.532,5.033C9.503,39.891,16.191,44,24,44z"
            ></path>
            <path
              fill="#1976D2"
              d="M43.611,20.083H42V20H24v8h11.303c-0.825,2.329-2.23,4.352-4.075,5.875
                c0.002-0.001,0.003-0.003,0.005-0.004l6.072,5.286C36.615,37.657,40,31.254,40,24C40,22.659,39.862,21.35,43.611,20.083z"
            ></path>
          </svg>
          <p>Sign in with Google</p>
        </button>
      </div>
    </div>
  );
};

export default Login;
