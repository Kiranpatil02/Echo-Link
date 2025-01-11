import cv2
import time
import mediapipe as mp

class DetectCoordHand():
    def __init__(self, mode = False, maxHands = 2, detectionCon = 0.5, trackCon = 0.5):
        self.mode = mode
        self.maxHands = maxHands
        self.detectionCon = detectionCon
        self.trackCon = trackCon

        self.mpHands = mp.solutions.hands
        self.hands = self.mpHands.Hands(self.mode, self.maxHands, self.detectionCon, self.trackCon)
        self.mpDraw = mp.solutions.drawing_utils

    def HandTrack(self, img, draw = True) :
        imgRGB = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
        self.result = self.hands.process(imgRGB)
        
        if self.result.multi_hand_landmarks :
            for handLand in self.result.multi_hand_landmarks :
                if draw :
                    self.mpDraw.draw_landmarks(img, handLand, self.mpHands.HAND_CONNECTIONS)

        return img

    def LandmarksPosition(self, img, handNo = 0, draw = True) :
        Position = []
        if self.result.multi_hand_landmarks :
            myHand = self.result.multi_hand_landmarks[handNo]
            for id, lm in enumerate(myHand.landmark):
                h, w, c = img.shape
                cx, cy = int(lm.x * w), int(lm.y * h)
                Position.append([id, cx, cy])
                
                if draw :
                    cv2.circle(img, (cx,cy), 10, (255,255,255), cv2.FILLED)
            
        return Position

