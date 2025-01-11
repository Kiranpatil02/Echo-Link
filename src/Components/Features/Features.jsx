import React from "react";
import { BsStars } from "react-icons/bs";
import { Link } from "react-router-dom";


export default function Features(){
    return(
        <>
         <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <div className="mb-6">
            <div className="w-10 h-10 bg-emerald-400 rounded-full flex items-center justify-center mb-6">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold mb-4">
              Enabling a Common Tounge to All
            </h2>
          </div>
        </div>

        <div className="md:col-span-2 grid sm:grid-cols-2 gap-4 ">
          <div className="bg-gradient-to-t from-[#fff1eb] to-[#ace0f9]rounded-xl p-6 shadow-md">
            <div className="w-10 h-10  text-2xl text-orange-700 flex items-center justify-center mb-4">
              <BsStars/>
            </div>
            <h3 className="font-semibold text-lg mb-2"> AI-Powered Gesture Recognition</h3>
            <p className="text-gray-600 text-sm mb-4">
            Our  AI system detects and interprets hand gestures, which helpst to translate to convey message
            </p>
            
          </div>
          <div className="bg-[linear-gradient(-20deg,#e9defa_0%,#fbfcdb_100%)] rounded-xl p-6 shadow-md">
            <div className="w-10 h-10 bg-emerald-400 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="font-semibold text-lg mb-2">No Interpreter Needed</h3>
            <p className="text-gray-600 text-sm mb-4">
            Removes the dependency on interpreters, allowing users to communicate independently at events, schools, and public spaces.
            </p>
          </div>
          <div className="bg-[linear-gradient(-225deg,#E3FDF5_0%,#FFE6FA_100%)] rounded-xl p-6 shadow-md">
            <div className="w-10 h-10 bg-emerald-400 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="font-semibold text-lg mb-2">Accessibility Anywhere</h3>
            <p className="text-gray-600 text-sm mb-4">
            Works on mobile devices, laptops, and tablets, making it accessible anytime and anywhere.
            </p>
          </div>

          <div className="bg-[linear-gradient(to_top,#fdcbf1_0%,#fdcbf1_1%,#e6dee9_100%)] rounded-xl p-6 shadow-md">
            <div className="w-10 h-10 bg-emerald-400 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
              </svg>
            </div>
            <h3 className="font-semibold text-lg mb-2">Easy Integration</h3>
            <p className="text-gray-600 text-sm mb-4">
            Can be integrated into classrooms, workplaces, and events for inclusive environments.
            </p>
          </div>
        </div>
      </div>
    </div>
        
        </>
    )
}