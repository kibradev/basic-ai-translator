from openai import OpenAI
from flask import Flask, request, jsonify
from flask_cors import CORS

client = OpenAI(
    organization='org-4RltGIiMFrB1Hvz1sosL2YVe',
    api_key='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'
)

app = Flask(__name__)
CORS(app)

@app.route('/translate', methods=['POST'])

def translate_text():
    data = request.json
    language = data.get('language')
    text = data.get('text')
    print(f"Received Data: {data}")
    if not language or not text:
        return jsonify({'error': 'Dil seçip birşeyler yazsana la'}), 400
    
    try:
        message = f"Translate the following text to {language}: {text}"
        response = client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=[{"role": "user", "content": message}]
        )
        translated_text = response.choices[0].message.content.strip()
        return jsonify({'translation': translated_text})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)