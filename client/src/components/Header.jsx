import React, { useContext } from 'react'
import { GlobalState } from '../GlobalState';

const Header = () => {
    const state = useContext(GlobalState);
    const [user, setUser] = state.user;
    const [isAdmin,setIsAdmin] = state.isAdmin
    const [isLoggedIn,setIsLoggedIn] = state.isLoggedIn

    const logoutUser = () => {
        localStorage.removeItem("dbmsLogin");
        setUser({})
        setIsAdmin(false)
        setIsLoggedIn(false)
        window.location.href = "/";
    };

    const userRoutes = (
        <a href="/request">Request</a>
    )
    const adminRoutes = (
        <>
        <a className="mx-1 hover:text-indigo-400 hover:underline" href="/workers">Add Workers</a>
        <a className="mx-1 hover:text-indigo-400 hover:underline" href="/construction">Add Constructions</a>
        <a className="mx-1 hover:text-indigo-400 hover:underline" href="/assign">Assign Workers</a>
        <a className="mx-1 hover:text-indigo-400 hover:underline" href="/register">Register</a>
        </>
    )
    return (
        <header className="w-full border-b shadow-md items-center flex justify-center">
            <div className="w-full md:w-3/4 py-3 flex justify-between items-center">
                <div className="flex-1">
                    <a href='/' className="text-4xl font-bold text-indigo-600">Title</a>
                </div>
                <div className="flex items-center justify-evenly">
                    <a className="mx-1 hover:text-indigo-400 hover:underline" href="/">Home</a>
                    {
                        !isAdmin && isLoggedIn && userRoutes
                    }
                    {
                        isAdmin && adminRoutes
                    }
                    {
                        user.name ?
                            <button className="px-4 py-2 text-sm 
                        font-medium text-white bg-red-600 border border-transparent 
                        rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 
                        focus:ring-offset-2 focus:ring-red-500 ml-2" onClick={logoutUser}>Log Out</button>
                            :
                            <a href="/signin" className="px-4 py-2 text-sm 
                    font-medium text-white bg-indigo-600 border border-transparent 
                    rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 
                    focus:ring-offset-2 focus:ring-indigo-500 ml-2">Sign In</a>
                    }
                </div>
            </div>
        </header>
    )
}

export default Header
