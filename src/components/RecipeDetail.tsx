import React from 'react';
import { ArrowLeft, ChefHat, ListChecks } from 'lucide-react';
import type { Recipe } from '../data/recipeData';

interface Props {
  recipe: Recipe;
  onBack: () => void;
}

const RecipeDetail: React.FC<Props> = ({ recipe, onBack }) => {
  const handleBack = () => {
    onBack();
    setTimeout(() => {
      document.getElementById('choices')?.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  };

  return (
    <section id="recipe-detail" className="py-5" style={{ minHeight: '80vh' }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            <button
              onClick={handleBack}
              className="btn-back mb-4 d-inline-flex align-items-center gap-2"
            >
              <ArrowLeft size={18} />
              Back to Healthier Choices
            </button>

            <div className="card-themed p-4 p-md-5">
              {/* Header */}
              <div className="d-flex align-items-center gap-3 mb-4">
                <div
                  className="d-flex align-items-center justify-content-center rounded-circle flex-shrink-0"
                  style={{
                    width: 56,
                    height: 56,
                    backgroundColor: 'hsl(var(--primary) / 0.12)',
                  }}
                >
                  <recipe.icon size={28} className="text-primary-themed" />
                </div>
                <h2 className="fw-bold text-themed mb-0">{recipe.title}</h2>
              </div>

              {/* Image */}
              <div className="mb-4 rounded-3 overflow-hidden" style={{ maxHeight: 300 }}>
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-100"
                  style={{ objectFit: 'cover', height: 300 }}
                  loading="lazy"
                />
              </div>

              <p className="text-muted-themed mb-4" style={{ fontSize: '1.05rem' }}>
                {recipe.longDesc}
              </p>

              <div className="row g-4">
                {/* Ingredients */}
                <div className="col-12 col-md-5">
                  <div className="d-flex align-items-center gap-2 mb-3">
                    <ListChecks size={20} className="text-primary-themed" />
                    <h5 className="fw-bold text-themed mb-0">Ingredients</h5>
                  </div>
                  <ul className="recipe-list">
                    {recipe.ingredients.map((ing, i) => (
                      <li key={i} className="text-muted-themed">
                        {ing}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Steps */}
                <div className="col-12 col-md-7">
                  <div className="d-flex align-items-center gap-2 mb-3">
                    <ChefHat size={20} className="text-primary-themed" />
                    <h5 className="fw-bold text-themed mb-0">Preparation</h5>
                  </div>
                  <ol className="recipe-list">
                    {recipe.steps.map((step, i) => (
                      <li key={i} className="text-muted-themed">
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecipeDetail;
