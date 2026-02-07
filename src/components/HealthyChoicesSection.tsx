import React from 'react';
import { Heart } from 'lucide-react';
import { recipes, type Recipe } from '../data/recipeData';

interface Props {
  onSelectRecipe: (recipe: Recipe) => void;
}

const HealthyChoicesSection: React.FC<Props> = ({ onSelectRecipe }) => {
  const handleClick = (recipe: Recipe) => {
    onSelectRecipe(recipe);
    // Scroll to recipe detail after a tick so the element exists
    setTimeout(() => {
      document.getElementById('recipe-detail')?.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  };

  return (
    <section id="choices" className="py-5" style={{ minHeight: '60vh' }}>
      <div className="container">
        <div className="text-center mb-5">
          <div className="d-flex align-items-center justify-content-center gap-2 mb-3">
            <Heart size={24} className="text-primary-themed" />
            <h2 className="fw-bold text-themed mb-0">Healthier Choices</h2>
          </div>
          <p className="text-muted-themed mx-auto" style={{ maxWidth: 520 }}>
            Small swaps lead to big changes. Click any card below to see the full recipe!
          </p>
        </div>

        <div className="row g-4 justify-content-center">
          {recipes.map((recipe) => (
            <div key={recipe.id} className="col-12 col-sm-6 col-lg-3">
              <div
                className="card-themed p-4 h-100 d-flex flex-column align-items-center text-center"
                style={{ cursor: 'pointer' }}
                onClick={() => handleClick(recipe)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && handleClick(recipe)}
              >
                <div
                  className="d-flex align-items-center justify-content-center rounded-circle mb-3 flex-shrink-0"
                  style={{
                    width: 56,
                    height: 56,
                    backgroundColor: 'hsl(var(--primary) / 0.12)',
                  }}
                >
                  <recipe.icon size={28} className="text-primary-themed" />
                </div>
                <h5 className="fw-semibold text-themed mb-2">{recipe.title}</h5>
                <p className="text-muted-themed small mb-0">{recipe.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HealthyChoicesSection;
