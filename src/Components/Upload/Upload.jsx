import React from "react";
import deaf from "../../assets/deaf.png";
import line from "../../assets/line.svg"
import group from "../../assets/group.svg"
import ASL from "../../assets/ASL_TO_SPEECH_CODESPRINT.MP4"

export default function Upload() {

      
  return (
    <>
      <div>

        <div className="flex  items-center justify-center  justify-between px-40 ">
          <div >
            <img className="h-32" src={deaf} alt="" />
          </div>
          <div >
            <img src={line} alt="" />
          </div>
          <div>
            <img className="size-72" src={group} alt="" />
          </div>
        </div>
        <div>
            <h2 className="mx-auto w-fit text-3xl font-semibold">Connect by Uploading the Video</h2>
        </div>
        <div className="border-2 bg-gray-200 mt-3 p-3">

        <video className="h-72 mt-4 mx-auto" src={ASL} controls></video>
        </div>
       
      </div>
    
    </>
  );
}
