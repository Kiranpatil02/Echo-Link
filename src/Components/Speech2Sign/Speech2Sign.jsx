    import React from "react";
    import { useState } from "react";

    export default function Speech2Sign(){
        const [recording, setRecording] = useState(false);
        const [transcription, setTranscription] = useState("")
        const [aslImages, setAslImages] = useState([]); // State to store ASL images response
    
        const handleRecord = () => {
            if (!recording) {
              startRecording();
            } else {
              stopRecording();
            }
          };
        
          const startRecording = () => {
            setRecording(true);
            const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
            recognition.lang = "en-US";
        
            recognition.onstart = () => {
              console.log("Voice recognition started...");
            };
        
            recognition.onresult = (event) => {
              const spokenText = event.results[0][0].transcript;
              console.log("Captured text:", spokenText);
              setTranscription(spokenText);
            };
        
            recognition.onerror = (event) => {
              console.error("Speech recognition error:", event.error);
              setRecording(false);
            };
        
            recognition.onend = () => {
              console.log("Voice recognition ended.");
              setRecording(false);
            };
        
            recognition.start();
          };
        
          const stopRecording = () => {
            console.log("Stopping recording...");
            setRecording(false);
          };
        


        const handleSend = async () => {
        const url = "https://backenedstasl-afhsftauc6hbetb3.canadacentral-01.azurewebsites.net/asl";
        console.log("Clicked")
    
        // Create the payload
        const payload = {
            text: transcription,
        };
    
        try {
            const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
            });
    
            const data = await response.json();
            console.log(data,"This data")
    
            // Set ASL images in state
            setAslImages(data.images || []);
        } catch (error) {
            console.error("Error sending request:", error);
        }
        };


        return(
            <>
            <div>
            <div className="border w-1/2 mx-auto flex flex-col items-center">
          <h2>Speak Here</h2>
          <button
            className={`mt-4 px-6 py-2 rounded text-white ${
              recording ? "bg-red-500" : "bg-blue-500 hover:bg-blue-600"
            }`}
            onClick={handleRecord}
          >
            {recording ? "Stop Recording" : "Start Recording"}
          </button>
          <p className="mt-2 text-gray-600">
            {transcription || "Press the button and start speaking..."}
          </p>
        </div>
        <div className="w-28 mx-auto">
          <button
            className={`mt-4 px-6 py-2 rounded text-white ${
              transcription.trim() === ""
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-green-500 hover:bg-green-600"
            }`}
            onClick={handleSend}
            disabled={transcription.trim() === ""}
          >
            Send
          </button>
        </div>
            </div>
            <div className="w-1/2 mx-auto mt-6">
            <h3 className="text-center text-lg font-semibold">ASL Representation</h3>
            {aslImages.map((wordImages, wordIndex) => (
                <div
                key={wordIndex}
                className="flex justify-center gap-2 my-4 border p-4 rounded bg-gray-100"
                >
                {wordImages.map((image, charIndex) => (
                    <img
                    key={charIndex}
                    src={image}
                    alt={`Word ${wordIndex + 1}, Character ${charIndex + 1}`}
                    className=""
                    />
                ))}
                </div>
            ))}
            </div>
            </>
        )
    }