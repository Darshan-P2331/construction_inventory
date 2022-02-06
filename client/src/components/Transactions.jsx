import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import { GlobalState } from '../GlobalState';

const Transactions = ({ site_id }) => {
    const state = useContext(GlobalState)
    const [transactions, setTransactions] = state.transactions

    useEffect(() => {
        if (site_id) {
            const fetchRequest = async () => {
                const res = await axios.post("http://localhost:5000/transactions/", { site_id })
                setTransactions(res.data)
            }
            fetchRequest();
        }
    }, [setTransactions, site_id]);

    return <div className="w-full md:w-3/4 flex mx-auto">
        <div className="w-full">
            <h2 className="mt-6 text-4xl font-extrabold text-gray-900">Transactions</h2>
            <div className="overflow-x-auto">
                <table className="table-auto w-full mt-5">
                    <thead className="font-semibold uppercase bg-gray-100">
                        <tr>
                            <th className="p-2 whitespace-nowrap">
                                <div className="font-semibold text-left">Id</div>
                            </th>
                            <th className="p-2 whitespace-nowrap">
                                <div className="font-semibold text-left">receiver</div>
                            </th>
                            <th className="p-2 whitespace-nowrap">
                                <div className="font-semibold text-left">details</div>
                            </th>
                            <th className="p-2 whitespace-nowrap">
                                <div className="font-semibold text-left">amount</div>
                            </th>
                            <th className="p-2 whitespace-nowrap">
                                <div className="font-semibold text-left">Date</div>
                            </th>
                            <th className="p-2 whitespace-nowrap">
                                <div className="font-semibold text-left">Status</div>
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 text-md font-medium">
                        {
                            transactions.map(data => (

                        <tr key={data.id}>
                            <th className="p-2">
                                <div className="text-left">{data.id}</div>
                            </th>
                            <th className="p-2 whitespace-nowrap">
                                <div className="text-left">{data.receiver}</div>
                            </th>
                            <th className="p-2">
                                <div className="text-left">{data.details}</div>
                            </th>
                            <th className="p-2">
                                <div className="text-left">Rs {data.amount}</div>
                            </th>
                            <th className="p-2">
                                <div className="text-left">{data.date.split('.')[0]}</div>
                            </th>
                            <th className="p-2 whitespace-nowrap">
                            <div className="text-left">
                                <span className="text-green-600 px-2 py-1 rounded-2xl bg-green-200">Accepted</span>
                            </div>
                            </th>
                        </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </div>;
};

export default Transactions;
