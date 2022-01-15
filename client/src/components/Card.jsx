import React from 'react'

const Card = () => {
    return (
        <div class="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-10 mx-5">
        <div>
          <h2 class="text-gray-800 text-3xl font-semibold">Design Tools</h2>
          <p class="mt-2 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
            dolores deserunt ea doloremque natus error, rerum quas odio quaerat
            nam ex commodi hic, suscipit in a veritatis pariatur minus
            consequuntur!
          </p>
          <p class="text-md mt-2 font-medium text-gray-900 truncate">
            Bonnie Green
          </p>
        </div>
        <div class="flex justify-between items-center mt-4">
          <p className="text-base font-semibold text-gray-900">$5000</p>
          <a
            href="/"
            class="text-xl font-medium text-indigo-500"
          >
            View more
          </a>
        </div>
      </div>
    )
}

export default Card
