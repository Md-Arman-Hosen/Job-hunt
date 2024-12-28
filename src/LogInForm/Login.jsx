import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../FireBase/Firebase.init";
import { useState } from "react";
import{FaEye ,FaEyeSlash} from 'react-icons/fa'
import { Link } from "react-router-dom";

const Login = () => {

  const [logInError, setlogInError] = useState('');
  const [logInSuccess, setlogInSuccess] = useState('');
  const [showPassWord,setshowPassword] = useState(false);

  const handleLogIn = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const accepted = e.target.terms.checked;
    console.log(email, password,accepted);

    if(password.length < 8){
      setlogInError('Password Should be at least 8 character')
      return;
    }
    else if (!/A-Z/.test(password)){
      setlogInError('password should have one upper case.')
      return;
    }
    else if (!accepted){
      setlogInError('Please accept our terms and conditions.')
      return;
    }
    // reset successs message
    setlogInSuccess ('');
    //reset Error 
    setlogInError('');
    //create user
    signInWithEmailAndPassword(auth, email, password)
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
              <div className="form-control mt-4 relative">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={ showPassWord ? "text":"password"}
                  name="password"
                  placeholder="Enter your password"
                  className="input input-bordered w-full mb-4"
                  required
                /> <span className="absolute top-2/4 right-4" onClick={()=> setshowPassword(!showPassWord)}>
                  {
                    showPassWord? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                  }
                </span>
              </div>
                <input type="checkbox" name="terms" id="terms" />
                <label htmlFor="terms"> Accept our terms and condition</label>
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
                   <Link to="/signUp">Register here</Link>
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
