
const Login = () => {
    return (
        <div>
             <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="card w-full max-w-sm shadow-lg bg-white">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold">Login</h2>
          <form>
            {/* Email Input */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email"
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
              <a href="/register" className="text-blue-500 hover:underline">
                Register here
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default Login;
