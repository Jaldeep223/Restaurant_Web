import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // ✅ added useNavigate
import { LuEye, LuEyeOff } from "react-icons/lu";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [houseNumber, setHouseNumber] = useState("");
  const [buildingName, setBuildingName] = useState("");
  const [postcode, setPostcode] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate = useNavigate(); // ✅ navigation hook

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }
    setError("");

    console.log({
      name,
      surname,
      contact,
      email,
      houseNumber,
      buildingName,
      postcode,
      password,
      confirmPassword,
    });

    // ✅ Redirect to login page after signup
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800 px-4 sm:px-6 md:px-10 pt-10">
      <div className="bg-gray-900 p-6 sm:p-8 md:p-10 rounded-2xl shadow-2xl w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mt-10 ">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-orange-500 mb-6 sm:mb-8">
          Create Account
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
          {/* Name & Surname */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 sm:py-3 border text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
            <input
              type="text"
              placeholder="Surname"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              className="w-full px-4 py-2 sm:py-3 border text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>

          {/* Contact & Email */}
          <input
            type="tel"
            placeholder="+44 7424 127879"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            pattern="^\+\d{1,3}\s\d{4,14}$"
            title="Include country code. Example: +44 7123 456789"
            className="w-full px-4 py-2 sm:py-3 border text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />

          <input
            type="email"
            placeholder="Email ID"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 sm:py-3 border text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />

          {/* Address Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="House/Flat Number"
              value={houseNumber}
              onChange={(e) => setHouseNumber(e.target.value)}
              className="w-full px-4 py-2 sm:py-3 border text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
            <input
              type="text"
              placeholder="Building/Street Name"
              value={buildingName}
              onChange={(e) => setBuildingName(e.target.value)}
              className="w-full px-4 py-2 sm:py-3 border text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>

          <input
            type="text"
            placeholder="Postcode"
            value={postcode}
            onChange={(e) => setPostcode(e.target.value)}
            className="w-full px-4 py-2 sm:py-3 border text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />

          {/* Password & Confirm Password */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 sm:py-3 border text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 pr-10"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-orange-500"
              >
                {showPassword ? <LuEyeOff size={20} /> : <LuEye size={20} />}
              </button>
            </div>

            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-2 sm:py-3 border text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 pr-10"
                required
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-orange-500"
              >
                {showConfirmPassword ? (
                  <LuEyeOff size={20} />
                ) : (
                  <LuEye size={20} />
                )}
              </button>
            </div>
          </div>

          {error && (
            <p className="text-red-500 text-sm sm:text-base">{error}</p>
          )}

          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 sm:py-3 rounded-lg font-semibold text-sm sm:text-base md:text-lg hover:bg-orange-600 transition-colors"
          >
            Sign Up
          </button>
        </form>

        <p className="mt-4 sm:mt-6 text-center text-gray-400 text-xs sm:text-sm md:text-base">
          Already have an account?{" "}
          <Link
            to="/login" // ✅ fixed route
            className="text-orange-500 font-semibold hover:underline"
          >
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
