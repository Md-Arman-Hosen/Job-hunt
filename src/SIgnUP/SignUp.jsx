import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../FireBase/Firebase.init";
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { useState } from "react";
import { Link } from "react-router-dom";



const SignUp = () => {

    const [signUpError, setsignUpError] = useState('');
    const [signUPSuccess, setsignUpSuccess] = useState('');
    const [showPassWord, setshowPassword] = useState(false);


    const handleSignUp = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, email, password);
        setsignUpError(" ");
        setsignUpSuccess(" ");

        //add validation
        createUserWithEmailAndPassword(auth, name, email, password)
            .then(result => {
                console.log(result.user);
                setsignUpSuccess('Account created SuccessFully');
            })
            .catch(error => {
                console.error(error);
                signUpError(error.message);
                setsignUpError(error.message);

            })
    }
    return (
        <div>

            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card bg-base-100 w-full  shrink-0 shadow-2xl">
                        <h1 className="text-center text-2xl mt-2">SignUp</h1>
                        <form onSubmit={handleSignUp} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="name" name="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type={showPassWord ? "text" : "password"}
                                    placeholder="password"
                                    name="password"
                                    className="input input-bordered"
                                    required />
                                <span className="absolute bottom-45 right-12" onClick={() => setshowPassword(!showPassWord)}>
                                    {
                                        showPassWord ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                    }
                                </span>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">SignUp</button>
                            </div>
                        </form>
                        <div className="mt-4 text-center">
                            <p className="text-sm">
                               Already have an account?{" "}
                                <p className="text-blue-500 hover:underline mb-6">
                                    <Link to="/login">Log In here</Link>
                                </p>
                            </p>
                        </div>
                        {
                            signUpError && <p className="text-red-600">{signUpError}</p>
                        }
                        {
                            signUPSuccess && <p className="text-green-600">{signUPSuccess}</p>
                        }
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SignUp;