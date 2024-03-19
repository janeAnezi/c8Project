// import { doSignInwithEmailAndPassword, doSignInWithGoogle, doSignInWithApple, doSignInWithFacebook } from "../../Firebase/auth";
import { useState } from 'react';
// import { useAuth } from "../Contexts/authContext";
// import { async } from "@firebase/util";
import Apple from '../assets/apple.png';
import Google from '../assets/google.png';
import Facebook from '../assets/facebook.png';
import Hide from '../assets/hide.png';
import View from '../assets/view.png';


const SignIn = () => {


  const [showPassword, setShowPassword] = useState(false); 
  
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  
  // const { userLoggedIn } = useAuth()

  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')
  // const [isSigningIn, setIsSigningIn] = useState(false)
  // const [errorMessage, setErrorMessage] = useState('')

  // const onSubmit = async (e) => {
  //   e.preventDefault()
  //   if (!isSigningIn) {
  //     setIsSigningIn(true)
  //     await doSignInwithEmailAndPassword(email, password)
  //   }
  // }

  // const onGoogleSignIn = (e) => {
  //   e.preventDefault()
  //   if(!isSigningIn) {
  //     setIsSigningIn(true)
  //     doSignInWithGoogle().catch(err => {
  //       setIsSigningIn(false)
  //     })
  //   }
  // }

  // const onAppleSignIn = (e) => {
  //   e.preventDefault()
  //   if(!isSigningIn) {
  //     setIsSigningIn(true)
  //     doSignInWithApple().catch(err => {
  //       setIsSigningIn(false)
  //     })
  //   }
  // }

  // const onFacebookSignIn = (e) => {
  //   e.preventDefault()
  //   if(!isSigningIn) {
  //     setIsSigningIn(true)
  //     doSignInWithFacebook().catch(err => {
  //       setIsSigningIn(false)
  //     })
  //   }
  // }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className="flex flex-col min-h-screen lg:items-center justify-center px-5">
      <h2 className="text-2xl font-extrabold my-8 text-gray-900">Sign into your account</h2>
       
      <div className="">
        <label className="flex flex-col gap-2 text-xs">
          Email Address{" "}
          <input
            type="text"
            id="Email"
            placeholder="Enter email address"
            className=" text-sm w-80 border rounded p-3 mb-4 w-40 lg:w-80 border border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </label>

        <div className='relative flex items-center'>
          
        <label  className="flex flex-col gap-2 text-xs">
          Input Password{" "}
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            placeholder="Enter password"
            className="text-sm w-80 border rounded p-3 mb-4 w-40 lg:w-80 border border-gray-300 focus:outline-none focus:border-blue-500"
          />
          <img src={showPassword ? '../assets/view.png' : '../assets/hide.png'} alt="toggle-password" className='absolute right-4 top-1/2 transform -translate-y-1/2 w-4 h2 pt-2 cursor-pointer' onClick={tooglePasswordVisibility}/>
        </label>

        </div>
     

       <div className="flex items-center">
       <input type="checkbox"
         id="rememberMe"
         className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
          /> 
          <label htmlFor="rememberMe" className="ml-2 block text-xs text-gray-900">
            Remember Me
          </label>

       </div>

      </div>


      <button
        className="inline-flex justify-center w-80 text-white  py-3 my-6
        bg-blue-600 hover:bg-blue-600 text-sm  rounded cursor-pointer outline-none border-none"
      >
        Continue
      </button>


      <button onSubmit={onSubmit}
        className=" inline-flex justify-center w-80 py-2 my-2 text-gray-800
        bg-transparent border border-solid border-dark text-sm  rounded cursor-pointer outline-none "
      >
        <img src={Google} alt="Icon" className="w-4 h-4 mr-2"/>
        Sign in with Google
      </button>

      <button
        className=" inline-flex justify-center w-80 py-2 my-2 text-gray-800
        bg-transparent border border-solid border-dark text-sm  rounded cursor-pointer outline-none "
      >
        <img src={Facebook} alt="Icon" className="w-4 h-4 mr-2"/>
        Sign in with Facebook
      </button>

      <button
        className=" inline-flex justify-center w-80 py-2 mt-2 text-gray-800
        bg-transparent border border-solid border-dark  text-sm  rounded cursor-pointer outline-none "
      >
        <img src={Apple} alt="Icon" className="w-4 h-4 mr-2"/>
        Sign in with Apple
      </button>


      <p className="text-gray-400 mt-3 text-xs text-center">
        Don't have an account?{" "}
        <span>
          <a href="" className="text-blue-500 text-xs hover:text-blue-600">
            Create your account
          </a>
        </span>
      </p>
      
    </div>
    </div>
  );
};

export default SignIn;

