import React from 'react';

const DarkModeToggle = ({ darkMode, toggleDarkMode }) => {
    return (
        <button onClick={toggleDarkMode}>
            {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </button>
    );
};

export default DarkModeToggle;