import './App.css';
import React, {useState} from 'react'

function App() {
  const [value, setTranslateValue] = useState('');
  const [language, setLanguage] = useState('');
  const [myTranslateText, setResult] = useState('Ben Bir Ördeğim');
  const handleLanguageChange = (event) => {
      setLanguage(event.target.value);
  };
  
  const diller = [
    'Türkçe',
    'English',
    'Almanca',
    'Rusça',
    'Çince'
  ];

  const handleTranslate = async () => {
    if (!value || !language) {
      alert('Lütfen bir metin ve hedef dil seçin.');
      return;
    }
    try {
      const response = await fetch('http://localhost:5000/translate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ language, text: value }),
      });
      const data = await response.json();
      if (data.translation) {
        setResult(data.translation);
      } else if (data.error) {
        setResult(`Hata: ${data.error}`);
      } else {
        setResult('Çeviri yapılamadı.');
      }
    } catch (error) {
      console.error(error);
      setResult('Bir hata oluştu.');
    } finally {
      console.log("İşlem Sona Erdi");
    }
  };

  return (
    <div className="App">
      <h1>Kibraland Ai Translator</h1>
      <p>Quick Translation Tool</p>
      <div className='translate-input'>
        <div className='translate-input-box'>
          <span class="material-symbols-outlined">
            translate
          </span>
          <input placeholder="I'm a duck" value={value} onChange={(e) => setTranslateValue(e.target.value)} />
        </div>
        <select
            value={language}
            onChange={handleLanguageChange}
            
        >
            <option value="">Dil Seçiniz</option>
            {diller.map((language) => (
                    <option key={language} value={language}>
                        {language}
                    </option>
                ))}
        </select>
        <div onClick={handleTranslate} className='translate-button'>
          <span class="material-symbols-outlined">
            translate
          </span>
        </div>
      </div>
      <div className='output-part'>
          <h3>Output</h3>
          <h4>{myTranslateText}</h4>
      </div>
    </div>
  );
}

export default App;
