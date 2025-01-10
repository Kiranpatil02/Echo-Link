import React from "react";
import deaf from "../../assets/deaf.png";
import line from "../../assets/line.svg"
import group from "../../assets/group.svg"
import { useState,useCallback } from "react";
import { Link } from "react-router-dom";

export default function Upload() {
    // const [dragActive, setDragActive] = useState(false);
    // const handleDrag = useCallback((e) => {
    //     e.preventDefault();
    //     e.stopPropagation();
    //     if (e.type === "dragenter" || e.type === "dragover") {
    //       setDragActive(true);
    //     } else if (e.type === "dragleave") {
    //       setDragActive(false);
    //     }
    //   }, []);

    //   const handleDrop = useCallback((e) => {
    //     e.preventDefault();
    //     e.stopPropagation();
    //     setDragActive(false);
        
    //     const uploadedFiles = [...e.dataTransfer.files];
    //     const fontFiles = uploadedFiles.filter(file => 
    //       file.name.match(/\.(ttf|otf|eot|woff|woff2)$/i)
    //     );
        
    //     setFiles(prevFiles => [...prevFiles, ...f`ontFiles]);
    //   }, []);
      
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
        <div className=" ">
            <div className="border-2 border-dashed  w-2/5 mx-auto flex flex-col p-10">
            <div className="border flex flex-col items-center">

                <p className="text-xl font-bold">Drop your Video</p>
                <input type="file" accept=".mp4" className="" />
            </div>
                
            </div>

        </div>
       
      </div>
    
    </>
  );
}
