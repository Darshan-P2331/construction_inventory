import axios from "axios";
import React, { useState } from "react";

const initialState = {
  name: "",
  contact_info: "",
  gender: "",
  pay_per_day: "",
  work_type: "",
  success: "",
  err: "",
};

const Workers = () => {
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/workers/", formData);
      setFormData({ ...formData, err: "", success: res.data.msg });
    } catch (err) {
      setFormData({ ...formData, success: "", err: err.response.data.message });
    }
  };

  return (
    <div className="w-full md:w-3/4 flex mx-auto">
      <div className="w-full">
        <h2 className="mt-6 text-4xl font-extrabold text-white">Workers</h2>
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
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-white"
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
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div>
              <span
                className="block text-sm font-medium text-white"
              >
                Gender
              </span>
              <div className="mt-1">
                <label className="inline-flex items-center">
                  <input type="radio" name="gender" id="gender" value="M" onChange={handleChange} />
                  <span className="ml-2 text-white">Male</span>
                </label>
                <label className="inline-flex items-center ml-3">
                  <input type="radio" name="gender" id="gender" value="F" onChange={handleChange}/>
                  <span className="ml-2 text-white">Female</span>
                </label>
              </div>
            </div>
            <div>
              <label
                htmlFor="contact_info"
                className="block text-sm font-medium text-white"
              >
                Contact Information
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="contact_info"
                  id="contact_info"
                  required
                  placeholder="Contact Information"
                  value={formData.contact_info}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div>
              <label 
              htmlFor="work_type"
              className="block text-sm font-medium text-white"
              >
                Work Type
              </label>
              <div className="mt-1">
              <select name="work_type" id="work_type" onChange={handleChange} value={formData.work_type} required>
              <option value="">Select a Category</option>
              <option value="welder">Welder</option>
              <option value="cutter">Cutter</option>
              <option value="cleaner">Cleaner</option>
              <option value="unskilled">Unskilled</option>
                </select>
              </div>
              </div>
            <div>
              <label
                htmlFor="pay_per_day"
                className="block text-sm font-medium text-white"
              >
                Pay Per Day
              </label>
              <div className="mt-1">
                <input
                  type="number"
                  name="pay_per_day"
                  id="pay_per_day"
                  required
                  placeholder="Pay Per Day"
                  value={formData.pay_per_day}
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

export default Workers;
