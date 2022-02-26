import axios from "axios";
import React, { useContext, useState } from "react";
import { GlobalState } from "../GlobalState";

const initialState = {
  material: "",
  cost: "",
  quantity: "",
  err: "",
  success: "",
};

const Request = () => {
  const state = useContext(GlobalState);
  const [user] = state.user;
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormData({ ...formData, [name]: value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/materials/",{...formData,uid:user.uid,site_id: user.site_id})
      setFormData({ ...formData, err: "", success: res.data.msg });
    } catch (err) {
      setFormData({ ...formData, success: "", err: err.response.data.message });
    }
  };

  return (
    <div className="w-full md:w-3/4 flex mx-auto">
      <div className="w-full">
        <h2 className="mt-6 text-4xl font-extrabold text-white">Request Materials</h2>
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
                htmlFor="material"
                className="block text-sm font-medium text-white"
              >
                Material
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="material"
                  id="material"
                  required
                  placeholder="Material"
                  value={formData.material}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="quantity"
                className="block text-sm font-medium text-white"
              >
                Quantity
              </label>
              <div className="mt-1">
                <input
                  type="number"
                  name="quantity"
                  id="quantity"
                  required
                  placeholder="Quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="cost"
                className="block text-sm font-medium text-white"
              >
                Cost
              </label>
              <div className="mt-1">
                <input
                  type="number"
                  name="cost"
                  id="cost"
                  required
                  placeholder="Cost"
                  value={formData.cost}
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
                Request
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Request;
