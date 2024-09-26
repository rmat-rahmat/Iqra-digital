import React, { useState } from 'react';
import './App.css';

// Arabic alphabet array

const letterNames = {
  'ا': 'أليف',          // Alif
  'ب': 'با',          // Baa
  'ت': 'تا',          // Taa
  'ث': 'ثا',          // Thaa
  'ج': 'جيم',          // Jeem
  'ح': 'حا',          // Haa
  'خ': 'خا',          // Khaa
  'د': 'دال',          // Daal
  'ذ': 'ذال',          // Dhaal
  'ر': 'را',          // Raa
  'ز': 'زاي',          // Zay
  'س': 'سين',          // Seen
  'ش': 'شين',          // Sheen
  'ص': 'صاد',          // Saad
  'ض': 'ضاد',          // Dhaad
  'ط': 'طا',          // Taa
  'ظ': 'ظا',          // Dhaal
  'ع': 'عين',          // Ayn
  'غ': 'غين',          // Ghayn
  'ف': 'فا',          // Faa
  'ق': 'قاف',          // Qaaf
  'ك': 'كاف',          // Kaaf
  'ل': 'لام',          // Laam
  'م': 'ميم',          // Meem
  'ن': 'نون',          // Noon
  'و': 'واو',           // Waw
  'هـ': 'ها',         // Haa
  'لا': 'لام أليف',     // Lam-Alif
  'ء': 'همزة',        // Hamzah
  'ي': 'يا'           // Yaa
};


const arabicLetters = Object.keys(letterNames); // Array of Arabic letters

const App = () => {
  const [selectedLetter, setSelectedLetter] = useState('');

  const [currentlySpokenLetter, setCurrentlySpokenLetter] = useState(null);
  // const speakLetter = (letter) => {
  //   const utterance = new SpeechSynthesisUtterance(letter);
  //   window.speechSynthesis.speak(utterance);
  //   setSelectedLetter(letterNames[letter]); // Set the name of the letter in Arabic
  // };
  
  const speakLetter = (letter) => {
    if (currentlySpokenLetter) {
      window.speechSynthesis.cancel();
    }
    setSelectedLetter(letter);

    setCurrentlySpokenLetter(letter); // Update the currently spoken letter
    const speech = new SpeechSynthesisUtterance();
    speech.text = letterNames[letter];
    speech.lang = 'ar-sa';  // Arabic language code
    speechSynthesis.speak(speech);
  };

  const handleMouseEnter = (letter) => {
    speakLetter(letter);
  };

  const handleMouseLeave = () => {
    // Optional: Stop speaking when mouse leaves the button
    // window.speechSynthesis.cancel();
  };

  const handleFocus = (letter) => {
    speakLetter(letter);
  };



  return (
   
    <div className="App" style={{ direction: 'rtl', textAlign: 'right', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
     
     
     <div className="word-display" style={{ fontSize: '26vw', flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '50px' }}>
        {selectedLetter ? <div>{selectedLetter}</div> : <div style={{ fontSize: '4vw' }}></div>}
      </div>
      <div className="letter-buttons" style={{ display: 'grid', gridTemplateColumns: 'repeat(10, 1fr)', gap: '10px', marginBottom: '20px', padding: '10px' }}>
        {arabicLetters.map((letter, index) => (
          <button 
            key={index} 
            className="letter-button" 
            onMouseEnter={() => handleMouseEnter(letter)} 
            style={{ 
              margin: '5px', 
              fontSize: '4vw', 
              padding: '15px', 
              border: 'none', // Remove default button border
              background: 'transparent', // No background
              cursor: 'pointer',
              transition: 'background 0.3s', // Smooth background transition
            }}
          >
            {letter}
          </button>
        ))}
      </div>
    </div>
  );
};

export default App;
