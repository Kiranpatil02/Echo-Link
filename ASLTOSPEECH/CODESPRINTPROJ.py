# ASL TO SPEECH

import cv2
import time
import os
import LandmarksHand as LMH
from collections import deque
import azure.cognitiveservices.speech as speechsdk
import requests
import openai


openai.api_type = "azure"
openai.api_base = ""
openai.api_key = ""  
openai.api_version = ""

deployment_name = "gpt-4o"  
speech_key = ""  
speech_region = "" 

GS={}
hCam, wCam = 480, 640
cap = cv2.VideoCapture(0)
cap.set(4, hCam)
cap.set(3, wCam)
detector = LMH.DetectCoordHand(detectionCon=0)

letter_queue = []  
last_capture_time = time.time() 

def send_to_gpt4(queue):
    sequence = "".join(queue)
    
    try:
        chat_prompt = [
            {
                "role": "system",
                "content": "You are an AI model that interprets the meaning of the sequence given by deaf and mute people based on ASL. Ignore the repetitve letters. if letters are repeated then interpret that letter as maximum of 2 letters. But interpret properly in very short"
            },
            {
                "role": "user",
                "content": f"Interpret the following sequence and write the inference about what the person wants to say in short: {sequence} and give in two languages: english and hindi. Don't bold the language words"
            }
        ]

        response = openai.ChatCompletion.create(
            engine=deployment_name,
            messages=chat_prompt,
            max_tokens=50,
            temperature=0.7,
            top_p=0.95,
            frequency_penalty=0,
            presence_penalty=0
        )

        return response.choices[0].message["content"].strip()
    except Exception as e:
        return f"Error in GPT-4 translation: {str(e)}"




def speak_text(text, languages=["en-US"]):
    try:
        for language in languages:
            speech_config = speechsdk.SpeechConfig(subscription=speech_key, region=speech_region)
            speech_config.speech_synthesis_language = language
            speech_synthesizer = speechsdk.SpeechSynthesizer(speech_config=speech_config)
            result = speech_synthesizer.speak_text_async(text).get()
            if result.reason == speechsdk.ResultReason.SynthesizingAudioCompleted:
                print(f"Speech synthesized successfully.")
            else:
                print(f"Speech synthesis failed: {result.reason}")
    except Exception as e:
        print(f"Error in speech synthesis: {str(e)}")


while True:
    success, img = cap.read()
    img = detector.HandTrack(img)
    posList = detector.LandmarksPosition(img, draw=False)
    if len(posList) < 21:
        print("Hand not detected or insufficient landmarks.")
    

    if len(posList) >= 21:
        result = ""
        fingers = []
        finger_mcp = [5,9,13,17]
        finger_dip = [6,10,14,18]
        finger_pip = [7,11,15,19]
        finger_tip = [8,12,16,20]
        for id in range(4):
            if(posList[finger_tip[id]][1]+ 25  < posList[finger_dip[id]][1] and posList[16][2]<posList[20][2]):
                fingers.append(0.25)
            elif(posList[finger_tip[id]][2] > posList[finger_dip[id]][2]):
                fingers.append(0)
            elif(posList[finger_tip[id]][2] < posList[finger_pip[id]][2]): 
                fingers.append(1)
            elif(posList[finger_tip[id]][1] > posList[finger_pip[id]][1] and posList[finger_tip[id]][1] > posList[finger_dip[id]][1]): 
                fingers.append(0.5)
                    
        print(fingers)   

        if len(fingers) < 4:
            print("Fingers not detected or insufficient.")

            

        if len(posList) >= 21 and len(fingers)>=4:
           
            if(posList[3][2] > posList[4][2]) and (posList[3][1] > posList[6][1])and (posList[4][2] < posList[6][2]) and fingers.count(0) == 4:
                result = "A"
                
            elif(posList[3][1] > posList[4][1]) and fingers.count(1) == 4:
                result = "B"
            
            elif(posList[3][1] > posList[6][1]) and fingers.count(0.5) >= 1 and (posList[4][2]> posList[8][2]):
                result = "C"
                
            elif(fingers[0]==1) and fingers.count(0) == 3 and (posList[3][1] > posList[4][1]):
                result = "D"
            
            elif (posList[3][1] < posList[6][1]) and fingers.count(0) == 4 and posList[12][2]<posList[4][2]:
                result = "E"

            elif (fingers.count(1) == 3) and (fingers[0]==0) and (posList[3][2] > posList[4][2]):
                result = "F"

            elif(fingers[0]==0.25) and fingers.count(0) == 3:
                result = "G"

            elif(fingers[0]==0.25) and(fingers[1]==0.25) and fingers.count(0) == 2:
                result = "H"
            
            elif (posList[4][1] < posList[6][1]) and fingers.count(0) == 3:
                if (len(fingers)==4 and fingers[3] == 1):
                    result = "I"
            
            elif (posList[4][1] < posList[6][1] and posList[4][1] > posList[10][1] and fingers.count(1) == 2):
                result = "K"
                
            elif(fingers[0]==1) and fingers.count(0) == 3 and (posList[3][1] < posList[4][1]):
                result = "L"
            
            elif (posList[4][1] < posList[16][1]) and fingers.count(0) == 4:
                result = "M"
            
            elif (posList[4][1] < posList[12][1]) and fingers.count(0) == 4:
                result = "N"
            
            elif(posList[4][2] < posList[8][2]) and (posList[4][2] < posList[12][2]) and (posList[4][2] < posList[16][2]) and (posList[4][2] < posList[20][2]):
                result = "O"
            
            elif(fingers[2] == 0)  and (posList[4][2] < posList[12][2]) and (posList[4][2] > posList[6][2]):
                if (len(fingers)==4 and fingers[3] == 0):
                    result = "P"
            
            elif(fingers[1] == 0) and (fingers[2] == 0) and (fingers[3] == 0) and (posList[8][2] > posList[5][2]) and (posList[4][2] < posList[1][2]):
                result = "Q"
            
            elif(posList[8][1] < posList[12][1]) and (fingers.count(1) == 2) and (posList[9][1] > posList[4][1]):
                result = "R"
             
            
            elif (posList[4][1] > posList[12][1]) and posList[4][2]<posList[12][2] and fingers.count(0) == 4:
                result = "S"

            
            elif (posList[4][1] > posList[12][1]) and posList[4][2]<posList[6][2] and fingers.count(0) == 4:
                result = "T"

                
            elif (posList[4][1] < posList[6][1] and posList[4][1] < posList[10][1] and fingers.count(1) == 2 and posList[3][2] > posList[4][2] and (posList[8][1] - posList[11][1]) <= 50):
                result = "U"
                
            elif (posList[4][1] < posList[6][1] and posList[4][1] < posList[10][1] and fingers.count(1) == 2 and posList[3][2] > posList[4][2]):
                result = "V"
            
            elif (posList[4][1] < posList[6][1] and posList[4][1] < posList[10][1] and fingers.count(1) == 3):
                result = "W"
            
            elif (fingers[0] == 0.5 and fingers.count(0) == 3 and posList[4][1] > posList[6][1]):
                result = "X"
            
            elif(fingers.count(0) == 3) and (posList[3][1] < posList[4][1]):
                if (len(fingers)==4 and fingers[3] == 1):
                    result = "Y"
            elif (fingers[0] == 1) and (fingers[1] == 1) and (fingers[2] == 1) and (fingers[3] == 1) and (posList[4][1] < posList[6][1]) and (posList[3][2] > posList[6][2]) and (posList[3][1] > posList[6][1]):
                result = "Z"
            else:
                print("Not Valid Sign")

            if result and cv2.waitKey(1) & 0xFF == ord(' '):  
                letter_queue.append(result)  
                print(f"Captured: {result}")

                GS[result] = posList
                print(GS)


    if cv2.waitKey(1) & 0xFF == ord('z'):  
        if len(letter_queue) > 0:
            print(letter_queue)
            print(GS)
            inference = send_to_gpt4(letter_queue)
            print(f"Inference: {inference}")
            speak_text(inference)  
        break
          

    cv2.imshow("Image", img)


cap.release()
cv2.destroyAllWindows()
