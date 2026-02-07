import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Sun, Moon, Menu, X } from 'lucide-react';

const sections = [
  { id: 'welcome', label: 'Welcome' },
  { id: 'analyze', label: 'Analyze Meal' },
  { id: 'choices', label: 'Healthier Choices' },
];

const AppNavbar: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav className="navbar-themed fixed-top py-3 px-4" style={{ zIndex: 1030 }}>
      <div className="container d-flex justify-content-between align-items-center">
        {/* Brand */}
        <span className="fw-bold fs-5 text-primary-themed d-flex align-items-center gap-2">
          <span style={{ fontSize: '1.4rem' }}>🥗</span>
          Meal Analyzer
        </span>

        {/* Right controls */}
        <div className="d-flex align-items-center gap-3">
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="d-flex align-items-center gap-2 border-0 bg-transparent text-themed"
            style={{ cursor: 'pointer' }}
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={18} strokeWidth={2.5} /> : <Moon size={18} strokeWidth={2.5} />}
            <div className={`toggle-track ${isDark ? 'active' : ''}`}>
              <div className="toggle-knob" />
            </div>
          </button>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen((p) => !p)}
            className="border-0 bg-transparent text-themed d-flex align-items-center"
            style={{ cursor: 'pointer' }}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Dropdown menu */}
      {menuOpen && (
        <div className="nav-dropdown">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => scrollTo(s.id)}
              className="nav-dropdown-item"
            >
              {s.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default AppNavbar;
