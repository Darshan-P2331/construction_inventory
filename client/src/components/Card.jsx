import React from 'react'

const Card = ({id,title,name,owner,estimate_cost,location}) => {
  // const state = useContext(second);
    return (
        <div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-10 mx-5 w-1/2">
        <div>
          <h2 className="text-gray-800 text-3xl font-semibold">{title}</h2>
          <p className="mt-2 text-gray-600">
            {location}
          </p>
          <p className="text-md mt-2 font-medium text-gray-900 truncate">
            {owner}
          </p>
        </div>
        <div className="flex justify-between items-center mt-4">
          <p className="text-base font-semibold text-gray-900">Rs{estimate_cost}</p>
          <a
            href={"/details/"+id}
            className="text-xl font-medium text-indigo-500"
          >
            Transactions
          </a>
        </div>
      </div>
    )
}

export default Card
