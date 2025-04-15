import { useEffect, useState } from 'react';

const ThemeToggle = () => {
    const [theme, setTheme] = useState(() =>
        localStorage.getItem('theme') || 'light'
    );

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
    };

    return (
        <button onClick={toggleTheme} style={buttonStyle}>
            {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
        </button>
    );
};

const buttonStyle = {
    position: 'fixed',
    top: '1rem',
    right: '1rem',
    padding: '10px 16px',
    border: 'none',
    borderRadius: '6px',
    backgroundColor: '#ff6347',
    color: 'white',
    fontWeight: 'bold',
    cursor: 'pointer',
    zIndex: 1000,
};

export default ThemeToggle;
