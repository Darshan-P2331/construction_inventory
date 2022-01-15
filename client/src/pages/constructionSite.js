import React from "react";

const ConstructionSite = () => {
  return (
    <div className="w-full md:w-3/4 flex mx-auto">
      <div className="w-full">
        <h2 className="mt-6 text-4xl font-extrabold text-gray-900">
          Register Construction Site
        </h2>
        <div className="w-full flex justify-center">
          <form className="mb-0 mt-5 space-y-6 w-3/4">
            <div>
              <div className="w-full text-center bg-red-100 rounded-lg py-2 text-red-600 ">
                Error
              </div>
              <div className="w-full text-center bg-green-100 rounded-lg py-2 text-green-600 ">
                Success
              </div>
            </div>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  placeholder="Name"
                  autoComplete="name"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="owner"
                className="block text-sm font-medium text-gray-700"
              >
                Owner
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="owner"
                  id="owner"
                  required
                  placeholder="Owner"
                  autoComplete="owner"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="location"
                className="block text-sm font-medium text-gray-700"
              >
                Location
              </label>
              <div className="mt-1">
                <textarea
                  name="location"
                  id="location"
                  placeholder="Location"
                  rows="3"
                ></textarea>
              </div>
            </div>
            <div>
              <label 
              htmlFor="user"
              className="block text-sm font-medium text-gray-700"
              >
                Supervisor
              </label>
              <div className="mt-1">
                <select name="user" id="user" required>
                  <option value="">Select a supervisor</option>
                  <option value="">User 1</option>
                </select>
              </div>
            </div>
            <div>
              <label
                htmlFor="cost"
                className="block text-sm font-medium text-gray-700"
              >
                Estimate Cost
              </label>
              <div className="mt-1">
                <input
                  type="number"
                  name="cost"
                  id="cost"
                  required
                  placeholder="Estimate cost"
                  autoComplete="cost"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="flex justify-center w-full px-4 py-2 text-sm 
                    font-medium text-white bg-indigo-600 border border-transparent 
                    rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 
                    focus:ring-offset-2 focus:ring-indigo-500"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ConstructionSite;
