import React, {useState} from "react";
import { auth } from '../firebase/firebase';
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";



const SignUp = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            console.log(userCredential);
            const user = userCredential.user;
            localStorage.setItem('token', user.accessToken);
            localStorage.setItem('user', JSON.stringify(user))
            navigate('/Onboarding');

        }catch (error) {
            console.error(error);
        }
    };

  return (
    <div className='flex flex-col gap-y-5 justify-center min-h-screen mx-lg-20 mx-10'>
        <h2 className='font-extrabold text-4xl mb-7'>Creat your account</h2>
        <form action=""  >
            <div id='set'>
                <div className='flex flex-col gap-y-2'>
                    <div className='flex gap-6 flex-col'>
                        <div>
                            <label htmlFor="fullname" >Full Name</label>
                            <div className='border-solid border-2 p-4 rounded-lg lg:w-3/6 md:w-3/6 mt-2'>
                                <input type="text" name="fullname" placeholder='Enter full name' id="fullname" value={fullName}className='outline-none' required onChange={(e) => setFullName(e.target.value)} />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="email-address" >Email Address</label>
                            <div className='border-solid border-2 p-4 rounded-lg lg:w-3/6 md:w-3/6 mt-2'>
                                <input type="email" name="email-address" placeholder='Enter email address' id="email-address" value={email} className='outline-none' required onChange={(e) => setEmail(e.target.value)}/>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="password" >Input Password</label>
                            <div className='border-solid border-2 p-4 rounded-lg lg:w-3/6 md:w-3/6 mt-2'>
                                <input type="password" name="password" placeholder='Enter password' id="password" value={password} className='outline-none' required onChange={(e) => setPassword(e.target.value)} /><span></span>
                            </div>
                        </div>
                        <div className=' bg-blue-500 p-4 text-white border-solid border-2 p-4 rounded-lg lg:w-3/6 md:w-3/6 text-center'>
                            <button className="text-center " onSubmit={handleSubmit}> 
                               Sign In
                            </button>
                        </div>
                    
                    </div>  
                </div>
            </div>
        </form>
        <div className="text-center "><p>By using this app, you agree to our <a href="">Terms of use and Conditions</a></p></div>
        <div className="mt-6">
            <div className="border-solid border-2 p-4 rounded-lg lg:w-3/6 md:w-3/6 mt-2  rounded m-4">
             <button className=""> 
                <div className="flex justify-center items-center gap-3 ">
                    <img src="" alt="dfff" />
                    <p>Sign up with Google</p>
                </div>
             </button>
            </div>
            <div className="border-solid border-2 p-4 rounded-lg lg:w-3/6 md:w-3/6 mt-2  rounded m-4">
             <button className=""> 
                <div className="flex justify-center items-center gap-3 ">
                    <img src="" alt="dfff" />
                    <p>Sign up with Facebook</p>
                </div>
             </button>
            </div>
            <div className="border-solid border-2 p-4 rounded-lg lg:w-3/6 md:w-3/6 mt-2  rounded m-4">
             <button className=""> 
                <div className="flex justify-center items-center gap-3 ">
                    <img src="" alt="dfff" />
                    <p>Sign up with Apple</p>
                </div>
             </button>
            </div>
            <div className="mb-4 text-center">
                <p>Already have an account? <a href="">Sign in</a></p>
            </div>
        </div>
    </div>
    
  );
};





export default SignUp;
