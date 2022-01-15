import React from 'react'

const Header = () => {
    return (
        <header className="w-full border-b shadow-md items-center flex justify-center">
            <div className="w-full md:w-3/4 py-3 flex justify-between items-center">
                <div className="flex-1">
                    <a href='/' className="text-4xl font-bold text-indigo-600">Title</a>
                </div>
                <div className="flex items-center">
                    <a href="/">Home</a>
                    <a href="/signin" className="px-4 py-2 text-sm 
                    font-medium text-white bg-indigo-600 border border-transparent 
                    rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 
                    focus:ring-offset-2 focus:ring-indigo-500 ml-2">Sign In</a>
                </div>
            </div>
        </header>
    )
}

export default Header
