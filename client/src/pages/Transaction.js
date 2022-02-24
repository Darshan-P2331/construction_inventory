import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { GlobalState } from "../GlobalState";

const initialState = {
  receiver: "",
  amount: "",
  details: "",
};

const Transaction = (props) => {
  const state = useContext(GlobalState);
  const [user] = state.user;
  const [formData, setFormData] = useState(initialState);
  const [request, setRequest] = useState({});

  useEffect(() => {
    if (props.location.search) {
      const fetchDetails = async () => {
        const res = await axios.post("http://localhost:5000/materials/one",{id: props.match.params.id})
        setRequest(res.data[0])
        setFormData({
          ...formData,
          details: props.location.search.substring(1),
        });
      };
      fetchDetails();
    }
  }, [ props.location.search]);

  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/materials/approved",{id: props.match.params.id})
      const res = await axios.post("http://localhost:5000/transactions/add", {
        ...formData,
        site_id: request.site_id,
      });
      setFormData({ ...formData, err: "", success: res.data.msg });
    } catch (err) {
      setFormData({ ...formData, success: "", err: err.response.data.message });
    }
  };

  return (
    <div className="w-full md:w-3/4 flex mx-auto">
      <div className="w-full">
        <h2 className="mt-6 text-4xl font-extrabold text-gray-900">
          Add Transaction
        </h2>
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
                htmlFor="receiver"
                className="block text-sm font-medium text-gray-700"
              >
                Receiver
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="receiver"
                  id="receiver"
                  required
                  placeholder="receiver"
                  value={formData.receiver}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="details"
                className="block text-sm font-medium text-gray-700"
              >
                Details
              </label>
              <div className="mt-1">
                <textarea
                  id="details"
                  name="details"
                  rows="4"
                  required
                  placeholder="Details"
                  value={formData.details}
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>
            <div>
              <label
                htmlFor="amount"
                className="block text-sm font-medium text-gray-700"
              >
                Amount
              </label>
              <div className="mt-1">
                <input
                  type="number"
                  name="amount"
                  id="amount"
                  required
                  placeholder="Amount"
                  value={formData.amount}
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
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Transaction;
