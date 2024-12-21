import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../FireBase/Firebase.init";
import { useState } from "react";

const Login = () => {

  const [logInError, setlogInError] = useState('');
  const [logInSuccess, setlogInSuccess] = useState('');

  const handleLogIn = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    // reset successs message
    setlogInSuccess ('');
    //reset Error 
    setlogInError('');
    //create user
    createUserWithEmailAndPassword(auth, email, password)
      .then(result => {
        console.log(result.user);
        setlogInSuccess('Log In SuccessFully');
      })
      .catch(error => {
        console.error(error);
        setlogInError(error.message);
      })
  }



  return (
    <div>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="card w-full max-w-sm shadow-lg bg-white">
          <div className="card-body">
            <h2 className="text-center text-2xl font-bold">Login</h2>
            <form onSubmit={handleLogIn}>
              {/* Email Input */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  className="input input-bordered w-full"
                  required
                />
              </div>

              {/* Password Input */}
              <div className="form-control mt-4">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  className="input input-bordered w-full"
                  required
                />
              </div>

              {/* Submit Button */}
              <div className="form-control mt-6">
                <button className="btn btn-primary w-full">Login</button>
              </div>
            </form>

            {/* Divider and Footer Links */}
            <div className="mt-4 text-center">
              <p className="text-sm">
                Don&apos;t have an account?{" "}
                <p className="text-blue-500 hover:underline">
                  Register here
                </p>
              </p>
            </div>
            {
              logInError && <p className="text-red-600">{logInError}</p>
            }
            {
              logInSuccess && <p className="text-green-600">{logInSuccess}</p>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
