import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Sun, Moon } from 'lucide-react';

const AppNavbar: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <nav className="navbar-themed fixed-top py-3 px-4" style={{ zIndex: 1030 }}>
      <div className="container d-flex justify-content-between align-items-center">
        <span className="fw-bold fs-5 text-primary-themed d-flex align-items-center gap-2">
          <span style={{ fontSize: '1.4rem' }}>🥗</span>
          Meal Analyzer
        </span>
        <button
          onClick={toggleTheme}
          className="d-flex align-items-center gap-2 border-0 bg-transparent text-themed"
          style={{ cursor: 'pointer' }}
          aria-label="Toggle theme"
        >
          {isDark ? (
            <Sun size={18} strokeWidth={2.5} />
          ) : (
            <Moon size={18} strokeWidth={2.5} />
          )}
          <div className={`toggle-track ${isDark ? 'active' : ''}`}>
            <div className="toggle-knob" />
          </div>
        </button>
      </div>
    </nav>
  );
};

export default AppNavbar;
