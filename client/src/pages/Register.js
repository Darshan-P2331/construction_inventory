import axios from "axios";
import React, { useState } from "react";

const initialState = {
  name: "",
  email: "",
  password: "",
  phone_no: "",
  err: "",
  success: "",
};

const Register = () => {
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormData({ ...formData, [name]: value });
    // console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5000/user/register",
        formData
      );
      setFormData({ ...formData, err: "", success: res.data.msg });

      // localStorage.setItem("firstLogin", true);

      window.location.href = "/home";
    } catch (err) {
      console.log(err);
      err.response.data.msg &&
        setFormData({ ...formData, err: err.response.data.msg, success: "" });
    }
  };

  return (
    <div className="h-max flex flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-4xl font-extrabold text-center text-white">
          Register
        </h2>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="px-6 py-8 bg-white rounded-lg shadow sm:px-10">
          <form className="mb-0 space-y-6" onSubmit={handleSubmit}>
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
                  onChange={handleChange}
                  value={formData.name}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <div className="mt-1">
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  placeholder="Email"
                  autoComplete="email"
                  onChange={handleChange}
                  value={formData.email}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="phone_no"
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>
              <div className="mt-1">
                <input
                  type="number"
                  name="phone_no"
                  id="phone_no"
                  required
                  onInput={(e) =>
                    (e.target.value = e.target.value.slice(0, 10))
                  }
                  placeholder="Phone Number"
                  autoComplete="phone_no"
                  value={formData.phone_no}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="mt-1">
                <input
                  type="password"
                  name="password"
                  id="password"
                  required
                  placeholder="Password"
                  autoComplete="password"
                  value={formData.password}
                  onChange={handleChange}
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

export default Register;
