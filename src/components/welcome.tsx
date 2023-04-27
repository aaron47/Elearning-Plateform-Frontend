import { useState } from "react";
import Navbar from "./Navbar";

const Welcome = () => {
  return (
    <div className="min-h-screen bg-gray-800">
      <Navbar />

      <div className="flex justify-center items-center h-screen">
        <div className="w-1/2 h-1/2 bg-gray-300 rounded-xl shadow-lg ">
          <div className="flex items-start justify-center h-full">
            <div className="text-5xl font-bold text-center">Welcome (user)</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
