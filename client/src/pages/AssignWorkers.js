import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { GlobalState } from "../GlobalState";

const AssignWorkers = () => {
    const state = useContext(GlobalState);
    const [workers, setWorkers] = state.workers;
    const [constructionSites] = state.constructions;
    const [success, setSuccess] = useState("");

    const handleChange = async (e) => {
        const {name: id,value: site_id} = e.target
        const res = await axios.post("http://localhost:5000/workers/assign",{id,site_id})
        setSuccess(res.data.msg)
    }

  return (
    <div className="w-full md:w-3/4 flex mx-auto">
      <div className="w-full">
        <h2 className="mt-6 text-4xl font-extrabold text-gray-900">
          Assign Workers
        </h2>
        {success && <div className="w-full my-2 text-center bg-green-100 rounded-lg py-2 text-green-600 ">
                {success}
              </div>}
        <div className="overflow-x-auto">
          <table className="table-auto w-full mt-5">
            <thead className="font-semibold uppercase bg-gray-100">
              <tr>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Name</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Gender</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Work type</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Pay</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Contact info</div>
                </th>
                <th className="p-2 whitespace-nowrap">Allocated Site</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 text-md font-medium">
                {
                    workers.map(worker => (

              <tr key={worker.id} className="divide-y divide-gray-400 bg-gray-50">
                <th className="p-2 whitespace-nowrap text-left">{worker.name}</th>
                <th className="p-2 whitespace-nowrap text-left">{worker.gender}</th>
                <th className="p-2 whitespace-nowrap text-left">{worker.work_type}</th>
                <th className="p-2 whitespace-nowrap text-left">{worker.pay_per_day}</th>
                <th className="p-2 whitespace-nowrap text-left">{worker.contact_info}</th>
                <th className="p-2 whitespace-nowrap text-left">
                  <select value={worker.site_id || ""} name={worker.id} className="w-auto" onChange={handleChange}>
                    <option value={null}>Not Allocated</option>
                    {
                        constructionSites.map((site) => (
                            <option key={site.id} value={site.id}>{site.title}</option>
                        ))
                    }
                  </select>
                </th>
              </tr>
                    ))
                }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AssignWorkers;
