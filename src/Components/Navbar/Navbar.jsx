import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(){
    return(
        <>
        <div className="p-5 border font-inter">
            <div className="text-xl flex ">
                <ul className="flex items-center  w-full justify-between ">
                    <li className="italic font-semibold ">
                        <Link to={"/Home"}>
                        Tune It
                        </Link>
                        </li>
                    <li className="flex space-x-5">
                    <li className="cursor-pointer hover:underline">
                        <Link to={"/features"}>
                        Features
                        </Link>
                        </li>
                    <li className="cursor-pointer hover:underline">About Us</li>
                    </li>
               
                    <li className="space-x-4">
                        <button className="border p-1 bg-purple-300 shadow-md hover:scale-110 rounded-xl text-lg px-3">Signup</button>
                        <button className="border p-1 rounded-xl text-lg shadow-md hover:scale-110  px-3">Login</button>
                    </li>

                </ul>
                
                
            </div>
        </div>
        </>
    )
}