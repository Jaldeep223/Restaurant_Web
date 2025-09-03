import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

// Local MP4 or hosted video link
const videoEmbedLink =
  "https://v1.pinimg.com/videos/mc/720p/77/3d/bd/773dbd7a3f87901c6b2ceaecacc9a4c3.mp4";

const BackgroundImg = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <video
        src={videoEmbedLink}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        {/* fallback text */}
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Foreground Content */}
      <div className="relative z-10">
        <Navbar />
        <div className="flex flex-col items-center justify-center text-center px-4 h-[calc(100vh-5rem)] pt-40">
          <h1 className="font-maker text-6xl md:text-8xl lg:text-9xl font-bold mb-4 text-white drop-shadow-lg">
            Tiffinity
          </h1>
          <p className="text-xl md:text-2xl text-orange-300">
            Delicious food delivered to your doorstep
          </p>

          <div className="pt-10">
            <button
              onClick={() => navigate("/order-now")}
              className="mt-4 px-8 py-4 text-2xl md:text-3xl font-extrabold text-green-400 
              border-2 border-white rounded-2xl cursor-pointer 
              shadow-[0_0_10px_rgba(34,197,94,0.7)] hover:shadow-[0_0_30px_rgba(34,197,94,1)] 
              transition-all duration-500 transform hover:scale-110 hover:text-white animate-pulse-fast"
            >
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackgroundImg;




