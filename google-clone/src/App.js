import React, { useState } from 'react';
import './App.css';

const LanguageOptions = ({ onLanguageChange }) => {
  const handleLanguageChange = (selectedLanguage) => {
    onLanguageChange(selectedLanguage);
  };

  return (
    <div className="language-options">
      Google offered in: &nbsp;&nbsp;
      <a href="#!" onClick={() => handleLanguageChange('Afrikaans')}>Afrikaans</a>&nbsp;&nbsp;
      <a href="#!" onClick={() => handleLanguageChange('Sesotho')}>Sesotho</a>&nbsp;&nbsp;
      <a href="#!" onClick={() => handleLanguageChange('isiZulu')}>isiZulu</a>&nbsp;&nbsp;
      <a href="#!" onClick={() => handleLanguageChange('IsiXhosa')}>IsiXhosa</a>&nbsp;&nbsp;
      <a href="#!" onClick={() => handleLanguageChange('Setswana')}>Setswana</a>&nbsp;&nbsp;
      <a href="#!" onClick={() => handleLanguageChange('Northern Sotho')}>Northern Sotho</a>
    </div>
  );
};

const App = () => {
  const [language, setLanguage] = useState('English'); // Initial language state

  const handleLanguageChange = (selectedLanguage) => {
    setLanguage(selectedLanguage);
  };

  const handleSearch = () => {
    // Handle the search functionality here
    console.log("Search button clicked");
  };

  return (
    <div className="container">
      {/* Header */}
      <header>
        {/* Google Logo */}
        <img
          src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          alt="Google Logo"
        />

        {/* Search Bar */}
        <div className="search-bar">
          <input type="text" placeholder="Search" />
          <div className="button-container">
            <button type="button" className="search-button" onClick={handleSearch}>Search</button>
            <button type="button" className="lucky-button">I'm Feeling Lucky</button>
          </div>

          {/* Language Options */}
          <br></br>
          <LanguageOptions onLanguageChange={handleLanguageChange} />
        </div>
      </header>

      {/* Footer */}
      <footer>
        <p>Selected language: {language}</p>
        
        <a
          href="https://www.google.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Original Google Website
        </a>
      </footer>

      

    </div>
  );
};

export default App;
