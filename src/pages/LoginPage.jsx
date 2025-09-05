import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LuEye, LuEyeOff } from "react-icons/lu"; 

const LoginPage = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User ID:", userId, "Password:", password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800 px-4 sm:px-6 md:px-8">
      <div className="bg-gray-900 p-6 sm:p-8 md:p-12 rounded-2xl shadow-2xl w-full max-w-md sm:max-w-lg md:max-w-xl transform transition-all duration-500 hover:scale-105">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-orange-500 mb-6 sm:mb-8">
          Login
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Enter your ID"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              className="w-full px-4 py-2 sm:py-3 border text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:scale-105 transition-transform"
              required
            />
          </div>

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 sm:py-3 text-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:scale-105 transition-transform pr-10"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-orange-500 transition-colors"
            >
              {showPassword ? <LuEyeOff size={20} /> : <LuEye size={20} />}
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 text-white text-lg sm:text-xl py-2 sm:py-3 rounded-lg font-semibold hover:bg-orange-600 transform hover:scale-105 transition-all"
          >
            Submit
          </button>
        </form>

        <p className="mt-4 sm:mt-6 text-center text-gray-400 text-sm sm:text-base md:text-lg">
          New user?{" "}
          <Link
            to="/register"
            className="text-orange-500 font-semibold hover:underline"
          >
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
