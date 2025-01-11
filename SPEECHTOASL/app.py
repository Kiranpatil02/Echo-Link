# SPEECH TO ASL

from flask import Flask, jsonify, request
import speech_recognition as sr

app = Flask(__name__)

asl_images = {
    'A': "https://elearninggate.blob.core.windows.net/allimages/A.png",
    'B': "https://elearninggate.blob.core.windows.net/allimages/B.png",
    'C': "https://elearninggate.blob.core.windows.net/allimages/C.png",
    'D': "https://elearninggate.blob.core.windows.net/allimages/D.png",
    'E': "https://elearninggate.blob.core.windows.net/allimages/E.png",
    'F': "https://elearninggate.blob.core.windows.net/allimages/F.png",
    'G': "https://elearninggate.blob.core.windows.net/allimages/G.png",
    'H': "https://elearninggate.blob.core.windows.net/allimages/H.png",
    'I': "https://elearninggate.blob.core.windows.net/allimages/I.png",
    'J': "https://elearninggate.blob.core.windows.net/allimages/J.png",
    'K': "https://elearninggate.blob.core.windows.net/allimages/K.png",
    'L': "https://elearninggate.blob.core.windows.net/allimages/L.png",
    'M': "https://elearninggate.blob.core.windows.net/allimages/M.png",
    'N': "https://elearninggate.blob.core.windows.net/allimages/N.png",
    'O': "https://elearninggate.blob.core.windows.net/allimages/O.png",
    'P': "https://elearninggate.blob.core.windows.net/allimages/P.png",
    'Q': "https://elearninggate.blob.core.windows.net/allimages/Q.png",
    'R': "https://elearninggate.blob.core.windows.net/allimages/R.png",
    'S': "https://elearninggate.blob.core.windows.net/allimages/S.png",
    'T': "https://elearninggate.blob.core.windows.net/allimages/T.png",
    'U': "https://elearninggate.blob.core.windows.net/allimages/U.png",
    'V': "https://elearninggate.blob.core.windows.net/allimages/V.png",
    'W': "https://elearninggate.blob.core.windows.net/allimages/W.png",
    'X': "https://elearninggate.blob.core.windows.net/allimages/X.png",
    'Y': "https://elearninggate.blob.core.windows.net/allimages/Y.png",
    'Z': "https://elearninggate.blob.core.windows.net/allimages/Z.png",
}

def map_to_asl_images(text):
    text = text.upper()  
    words = text.split()  
    asl_images_for_text = []

    for word in words:
        asl_images_for_word = []
        for char in word:
            if char in asl_images:
                asl_images_for_word.append(asl_images[char])  
            else:
                asl_images_for_word.append("No Image")  
        

        asl_images_for_text.append(asl_images_for_word)
    
    return asl_images_for_text

@app.route('/asl', methods=['POST'])
def asl():
    
    data = request.get_json()
    input_text = data.get("text", "")
    
    asl_images_for_input = map_to_asl_images(input_text)

    response = {
        "images": []
    }

    for word_images in asl_images_for_input:
        word_image_paths = []
        for image_path in word_images:
            word_image_paths.append(image_path)
        response["images"].append(word_image_paths)

    return jsonify(response)

@app.route('/speech-to-asl', methods=['POST'])
def speech_to_asl_endpoint():

    if 'audio' not in request.files:
        return jsonify({"error": "No audio file provided"}), 400

    audio_file = request.files['audio']
    
    response = speech_to_asl(audio_file)

    return jsonify(response)

def speech_to_asl(audio_file):
    recognizer = sr.Recognizer()

    try:
        with sr.AudioFile(audio_file) as source:
            audio_data = recognizer.record(source)

            try:
                text = recognizer.recognize_google(audio_data)
                print(f"Recognized Text: {text}")  
            except sr.UnknownValueError:
                return {"error": "Google Speech Recognition could not understand the audio"}
            except sr.RequestError as e:
                return {"error": f"Google Speech Recognition request failed; {e}"}
            
            asl_images_for_input = map_to_asl_images(text)

            response = {
                "text": text,
                "images": []
            }

            for word_images in asl_images_for_input:
                word_image_paths = []
                for image_path in word_images:
                    word_image_paths.append(image_path)
                response["images"].append(word_image_paths)

            return response
    
    except Exception as e:
        return {"error": str(e)}

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000,debug=True)







