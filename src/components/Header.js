import React from 'react';

function Header({ darkMode, setDarkMode }) {
  return (
    <div className="toggle ">
      <span className="h1">Notes</span>
      <button
        onClick={() => setDarkMode(prevState => !prevState)}
        className="save"
      >
        Toggle Mode
      </button>
    </div>
  );
}

export default Header;
