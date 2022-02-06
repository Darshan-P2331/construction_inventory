import axios from "axios";
import { Link } from 'react-router-dom'
import React, { useContext, useEffect } from "react";
import { GlobalState } from "../GlobalState";

const Requests = ({ site_id }) => {
    const state = useContext(GlobalState)
    const [requests, setRequests] = state.requests
    const [isAdmin] = state.isAdmin

    useEffect(() => {
        if (site_id) {
            const fetchRequest = async () => {
                const res = await axios.post("http://localhost:5000/materials/fetch", { site_id })
                setRequests(res.data)
            }
            fetchRequest();
        }
    }, [setRequests, site_id]);

    return (
        <div className="w-full md:w-3/4 flex mx-auto">
            <div className="w-full">
                <h2 className="mt-6 text-4xl font-extrabold text-gray-900">Requests</h2>
                <div className="overflow-x-auto">
                    <table className="table-auto w-full mt-5">
                        <thead className="font-semibold uppercase bg-gray-100">
                            <tr>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">Material</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">Quantity</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">Cost</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">Date</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">Status</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">

                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 text-md font-medium">
                            {
                                requests.map((data, i) => (
                                    <tr className="divide-y divide-gray-100" key={i}>
                                        <th className="p-2 whitespace-nowrap">
                                            <div className="text-left">{data.material}</div>
                                        </th>
                                        <th className="p-2 whitespace-nowrap">
                                            <div className="text-left">{data.quantity}</div>
                                        </th>
                                        <th className="p-2 whitespace-nowrap">
                                            <div className="text-left">Rs {data.cost}</div>
                                        </th>
                                        <th className="p-2 whitespace-nowrap">
                                            <div className="text-left">{data.date.split('T')[0]}</div>
                                        </th>
                                        <th className="p-2 whitespace-nowrap">
                                            {
                                                data.isApproved ?
                                                    <div className="text-left">
                                                        <span className="text-green-600 px-2 py-1 rounded-2xl bg-green-200">Approved</span>
                                                    </div>
                                                    :
                                                    <div className="text-left">
                                                        <span className="text-yellow-600 px-2 py-1 rounded-2xl bg-yellow-200">Pending</span>
                                                    </div>

                                            }
                                        </th>
                                        <th className="p-2 whitespace-nowrap text-blue-500 underline">
                                            {
                                                !data.isApproved && isAdmin ?
                                                    <Link to={{ pathname: `/transactions/${site_id}`, search:`material:${data.material}\nquantity:${data.quantity}\ncost:${data.cost}` }} >
                                                        Approve
                                                    </Link> : ""
                                            }
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

export default Requests;
