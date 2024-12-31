# Kibraland Ai Translator

Kibraland Ai Translator is a web-based translation application that leverages OpenAI's API to perform text translations. The project includes a React.js frontend and a Flask backend.

---

## Features
- Users can input text and translate it into their chosen language.
- High-quality translation results using OpenAI API.
- Supported languages: Turkish, English, German, Russian, Chinese.

---

## Setup Instructions

### Frontend (React.js)

#### Install Dependencies

```bash
npm install
```

#### Run the Application

```bash
npm start
```

#### Important Files
- `App.js`: Contains React components.
- `App.css`: Stylesheet for the application.

### Backend (Flask)

#### Required Python Libraries
Install the required libraries using the following command:

```bash
pip install openai flask flask-cors
```

#### Run the Backend

```bash
python app.py
```

### Environment Variables
Use a `.env` file to store your API key securely. Configure the Flask application accordingly.

---

## Project Structure

### Frontend
- `App.js`: React component designed for user input and OpenAI integration.
- `App.css`: Stylesheet for the application.

### Backend
- `app.py`: Flask application for integrating with OpenAI API.

---

## Steps to Run

### 1. Start the Backend
```bash
python app.py
```
The backend will run on `http://localhost:5000`.

### 2. Start the Frontend
```bash
npm start
```
The frontend will run on `http://localhost:3000`.

```plaintext
# .gitignore
node_modules/
__pycache__/
.env
```

---

## License
This project is licensed under the MIT License.
