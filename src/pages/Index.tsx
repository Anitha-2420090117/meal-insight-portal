import React, { useState } from 'react';
import { ThemeProvider } from '../contexts/ThemeContext';
import AppNavbar from '../components/AppNavbar';
import WelcomeSection from '../components/WelcomeSection';
import MealAnalyzeSection from '../components/MealAnalyzeSection';
import HealthyChoicesSection from '../components/HealthyChoicesSection';
import RecipeDetail from '../components/RecipeDetail';
import type { Recipe } from '../data/recipeData';

const Index: React.FC = () => {
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

  return (
    <ThemeProvider>
      <div className="bg-body">
        <AppNavbar />
        <WelcomeSection />
        <MealAnalyzeSection />
        <HealthyChoicesSection onSelectRecipe={setSelectedRecipe} />
        {selectedRecipe && (
          <RecipeDetail
            recipe={selectedRecipe}
            onBack={() => setSelectedRecipe(null)}
          />
        )}
      </div>
    </ThemeProvider>
  );
};

export default Index;
