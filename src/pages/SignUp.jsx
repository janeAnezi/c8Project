import React, { useState, useEffect } from "react";
import { auth } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithRedirect,
  getRedirectResult,
} from "firebase/auth";
import { GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import Google from "../assets/google.svg";
import Facebook from "../assets/facebook.svg";
import Apple from "../assets/apple.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
import Back from "../assets/back.png";
import Loader from "../Components/OnboardingLoader";
// import Hide from "../assets/hide.png";
// import View from "../assets/view.png";

const SignUp = () => {
  const [fullName, setFullName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { register, handleSubmit, formState, reset } = useForm();
  const { errors } = formState;
  const navigate = useNavigate();

  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSignUp = ({ fullname, email, password }) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        const userData = {
          fullname: fullname,
          email: email,
        };
        localStorage.setItem("userData", JSON.stringify(userData));
        // navigate("/home");
        toast.success("Sign In Successful. You will be redirected", {
          autoClose: 2000,
          onClose: () => {
            console.log("sign in successful");
            navigate("/home");
          },
        });
      })
      .catch((err) => {
        console.log(err, "err");
        console.log(err.code);
        let customErrorMessage = "An error occurred";
        if (err.code === "auth/email-already-in-use") {
          customErrorMessage =
            "Existing user. Please login with your email address.";
        }
        setErrorMessage(customErrorMessage);
        toast.error(errorMessage);
      })
      .finally(() => setIsLoading(false));
  };

  const providerSignIn = (provider) => {
    signInWithRedirect(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user.email);
        navigate("/home");
        // toast.success("Sign In Successful. You will be redirected", {
        //   autoClose: 2000,
        //   onClose: () => {
        //     console.log("sign in successful");
        //     navigate("/home");
        //   },
        // });
      })
      .catch((err) => {
        const error = err.code;
        toast.error(error.message);
        const errorMessage = err.message;
      });
  };

  useEffect(() => {
    const getRedirectResultAsync = async () => {
      try {
        const response = await getRedirectResult(auth);
        if (response) {
          navigate("/home");
        }
      } catch (error) {
        console.error("Error getting redirect result:", error);
      }
    };

    getRedirectResultAsync();
  }, []);

  const googleSignIn = () => {
    providerSignIn(googleProvider);
  };
  const facebookSignIn = () => {
    providerSignIn(facebookProvider);
  };

  function handleClick(e) {
    e.preventDefault();
    reset(); //this resets the form fields on toggle between the current page and login page
    navigate("/signin");
  }

  return (
    <>
      <div className="flex flex-col gap-y-5 justify-center md:items-center min-h-screen mx-lg-20 mx-6">
        <ToastContainer />
        <div
          className="w-full flex my-3 justify-between top-4"
          onClick={() => navigate("/")}
        >
          <img
            src={Back}
            alt="back"
            className="h-[1.5rem] w-[1.5rem] cursor-pointer"
          />
        </div>
        <h2 className="font-extrabold text-3xl mb-2">Create your account</h2>
        <form
          action=""
          onSubmit={handleSubmit(handleSignUp)}
          className="lg:flex flex-col justify-center lg:items-center w-full"
        >
          <div className="flex flex-col lg:items-center mb-4 w-full">
            <label htmlFor="fullname" className="text-neutral-500">
              Full Name
            </label>
            <input
              type="text"
              name="fullname"
              placeholder="Enter full name"
              id="fullname"
              // value={fullName}
              className="placeholder:text-black outline-none border-solid border-2 p-4 focus:border-blue-500 rounded-lg lg:w-3/6 md:w-3/6 mt-2"
              // required
              // onChange={(e) => setFullName(e.target.value)}
              {...register("fullname", { required: "required Field" })}
            />
          </div>
          <div className="flex flex-col lg:items-center mb-4 w-full">
            <label htmlFor="email-address" className="text-neutral-500">
              Email Address
            </label>
            <input
              type="email"
              name="email-address"
              placeholder="Enter email address"
              id="email-address"
              className="placeholder:text-black outline-none border-solid border-2 p-4 focus:border-blue-500 rounded-lg lg:w-3/6 md:w-3/6 mt-2"
              {...register("email", {
                required: "Required Field",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
            />
            <span className="text-red-500 text-sm">
              {errors?.email && errors?.email?.message}
            </span>
          </div>

          <div className="flex flex-col lg:items-center mb-4 w-full">
            <label htmlFor="password" className="text-neutral-500">
              Input Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter password"
              id="password"
              className="placeholder:text-black outline-none border-solid border-2 p-4 focus:border-blue-500 rounded-lg lg:w-3/6 md:w-3/6 mt-2"
              {...register("password", {
                required: "Required Field",
                pattern: {
                  value:
                    /^(?=.*[A-Za-z\d])(?=.*[!@#$%^&*.,><*])[A-Za-z\d!@#$%^&*,.><*]{8,}$/,
                  message:
                    "Password must be at least 8 characters and must include at least one letter, one digit, and one special character.",
                },
              })}
            />
            {/* <span className="" onClick={togglePasswordVisibility}>
            {showPassword ? <img src={showPass} /> : <img src={hidePass} />}
          </span> */}
            <span className="text-red-500 text-sm">
              {errors?.password && errors?.password?.message}
            </span>
          </div>

          <div className="text-center">
            <button
              className="text-center bg-[rgb(66,104,251)] text-white text-lg font-semibold cursor-pointer py-4 px-4 rounded-lg w-full my-3 lg:w-3/6"
              type="submit"
            >
              Sign Up
            </button>
            <p>
              By using this app, you agree to our{" "}
              <a
                href="https://docs.google.com/document/d/15ONH41KmOXuOUFBbTSLmjOb2Q-xufJC2jQeK3HOB0dw/edit"
                className="text-blue-500 font-bold"
                target="_blank"
              >
                Terms of use and Conditions
              </a>
            </p>
          </div>
        </form>

        <div className="mt-5 flex flex-col lg:items-center w-full">
          <button className="rounded-lg border-solid border-2 mb-1 py-3 px-4 w-full lg:w-3/6 md:w-3/6 mt-2">
            <div
              className="flex justify-center items-center gap-3 "
              onClick={googleSignIn}
            >
              <img src={Google} alt="google" className="w-6" />
              <p>Sign up with Google</p>
            </div>
          </button>
          <button className="rounded-lg border-solid border-2 mb-1 py-3 px-4 w-full lg:w-3/6 md:w-3/6 mt-2">
            <div
              className="flex justify-center items-center gap-3 "
              onClick={facebookSignIn}
            >
              <img src={Facebook} alt="facebook" className="w-6" />
              <p>Sign up with Facebook</p>
            </div>
          </button>
          <button className="rounded-lg border-solid border-2 mb-1 py-3 px-4 w-full lg:w-3/6 md:w-3/6 mt-2">
            <div className="flex justify-center items-center gap-3 ">
              <img src={Apple} alt="apple" className="w-8 p-0" />
              <p>Sign up with Apple</p>
            </div>
          </button>
          <div className="my-4 text-center">
            <p>
              Already have an account?{" "}
              <span
                className="text-blue-500 font-semibold"
                onClick={handleClick}
              >
                Sign in
              </span>
            </p>
          </div>
        </div>
      </div>
      {isLoading && <Loader />}
    </>
  );
};

export default SignUp;
