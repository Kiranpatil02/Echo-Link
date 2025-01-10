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
                    <li className="cursor-pointer">
                        <Link to={"/features"}>
                        Features
                        </Link>
                        </li>
                    <li className="cursor-pointer">About Us</li>
                    </li>
               
                    <li className="space-x-4">
                        <button>Signup</button>
                        <button>Login</button>
                    </li>

                </ul>
                
                
            </div>
        </div>
        </>
    )
}