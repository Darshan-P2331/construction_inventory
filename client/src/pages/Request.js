import React, { useState } from "react";

const initialState = {};

const Request = () => {
  const [formData, setFormData] = useState(initialState);

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="w-full md:w-3/4 flex mx-auto">
      <div className="w-full">
        <h2 className="mt-6 text-4xl font-extrabold text-gray-900">Workers</h2>
        <div className="w-full flex justify-center">
          <form className="mb-0 mt-5 space-y-6 w-3/4" onSubmit={handleSubmit}>
            <div>
              {formData.err && (
                <div className="w-full text-center bg-red-100 rounded-lg py-2 text-red-600 ">
                  {formData.err}
                </div>
              )}
              {formData.success && (
                <div className="w-full text-center bg-green-100 rounded-lg py-2 text-green-600 ">
                  {formData.success}
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Request;
