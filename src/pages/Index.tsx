import React from 'react';
import { ThemeProvider } from '../contexts/ThemeContext';
import AppNavbar from '../components/AppNavbar';
import WelcomeSection from '../components/WelcomeSection';
import MealAnalyzeSection from '../components/MealAnalyzeSection';

const Index: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="bg-body">
        <AppNavbar />
        <WelcomeSection />
        <MealAnalyzeSection />
      </div>
    </ThemeProvider>
  );
};

export default Index;
