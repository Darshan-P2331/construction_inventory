import React from "react";

const IntroPage = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center text-center bg-white">
      <div>
        <h1 className="text-4xl font-bold my-3">
          University Visveswaraya Colloge of Engineering
        </h1>
        <h2 className="text-3xl font-semibold">Construction Management</h2>
        <div className="flex items-center justify-evenly mt-8 mb-10">
          <h4 className="text-2xl">Darshan.P (19GANSE010)</h4>
          <h4 className="text-2xl">E.Ram Sanjay (19GANSE015)</h4>
        </div>
        <a
          href="/home"
          className="px-6 py-2 
                    font-medium text-white bg-indigo-600 border border-transparent 
                    rounded-full shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 
                    focus:ring-offset-2 focus:ring-indigo-500"
        >
          Enter
        </a>
      </div>
    </div>
  );
};

export default IntroPage;
