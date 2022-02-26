import React, { useEffect, useState } from "react";
import axios from "axios";

const initialState = {
  title: '',
  owner: '',
  estimate_cost: 0,
  location: '',
  user: '',
  err: '',
  success: '',
}

const ConstructionSite = () => {
  const [formData, setFormData] = useState(initialState);
  const [users, setUsers] = useState([])

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios.get("http://localhost:5000/user/free")
      
      if (res.status === 200) {
        setUsers(res.data.result)
        
      }
    }
    fetchUsers();
  }, []);
  

  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/constructions/add", formData);
      setFormData({ ...formData, err: "", success: res.data.msg });

    } catch (err) {
      console.log(err)
      err.response.data.msg &&
        setFormData({ ...formData, err: err.response.data.msg, success: "" });
    }
  }

  return (
    <div className="w-full md:w-3/4 flex mx-auto">
      <div className="w-full">
        <h2 className="mt-6 text-4xl font-extrabold text-white">
          Register Construction Site
        </h2>
        <div className="w-full flex justify-center">
          <form className="mb-0 mt-5 space-y-6 w-3/4" onSubmit={handleSubmit}>
            <div>
              {formData.err && <div className="w-full text-center bg-red-100 rounded-lg py-2 text-red-600 ">
                {formData.err}
              </div>}
              {formData.success && <div className="w-full text-center bg-green-100 rounded-lg py-2 text-green-600 ">
                {formData.success}
              </div>}
            </div>
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-white"
              >
                Name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="title"
                  id="title"
                  required
                  placeholder="Name"
                  value={formData.title}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="owner"
                className="block text-sm font-medium text-white"
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
                  value={formData.owner}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="location"
                className="block text-sm font-medium text-white"
              >
                Location
              </label>
              <div className="mt-1">
                <textarea
                  name="location"
                  id="location"
                  placeholder="Location"
                  rows="3"
                  value={formData.location}
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>
            <div>
              <label 
              htmlFor="user"
              className="block text-sm font-medium text-white"
              >
                Supervisor
              </label>
              <div className="mt-1">
                <select name="user" id="user" onChange={handleChange} value={formData.user} required>
                  <option value="">Select a supervisor</option>
                  {
                    users.map((user) => (
                      <option key={user.uid} value={user.uid}>{user.name}</option>
                    ))
                  }
                </select>
              </div>
            </div>
            <div>
              <label
                htmlFor="estimate_cost"
                className="block text-sm font-medium text-white"
              >
                Estimate Cost
              </label>
              <div className="mt-1">
                <input
                  type="number"
                  name="estimate_cost"
                  id="estimate_cost"
                  required
                  placeholder="Estimate cost"
                  value={formData.estimate_cost}
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

export default ConstructionSite;
