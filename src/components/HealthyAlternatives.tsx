import React from 'react';
import { Leaf, Apple, Carrot, Salad, Heart } from 'lucide-react';

const alternatives = [
  {
    icon: Salad,
    title: 'Fresh Garden Salad',
    desc: 'Packed with fiber, vitamins, and antioxidants.',
  },
  {
    icon: Apple,
    title: 'Seasonal Fruit Bowl',
    desc: 'Natural sugars and essential micronutrients.',
  },
  {
    icon: Carrot,
    title: 'Roasted Veggie Mix',
    desc: 'Low calorie, high flavor, nutrient-dense.',
  },
  {
    icon: Leaf,
    title: 'Quinoa Power Bowl',
    desc: 'Complete protein with whole grain goodness.',
  },
];

const HealthyAlternatives: React.FC = () => {
  return (
    <div>
      <div className="d-flex align-items-center gap-2 mb-3">
        <Heart size={20} className="text-primary-themed" />
        <h5 className="fw-bold text-themed mb-0">Healthier Choices</h5>
      </div>
      <p className="text-muted-themed small mb-3">
        Small swaps lead to big changes. Try one of these today!
      </p>
      {alternatives.map((alt, i) => (
        <div key={i} className="healthy-card d-flex align-items-start gap-3">
          <div
            className="d-flex align-items-center justify-content-center rounded-circle flex-shrink-0"
            style={{
              width: 40,
              height: 40,
              backgroundColor: 'hsl(var(--primary) / 0.12)',
            }}
          >
            <alt.icon size={20} className="text-primary-themed" />
          </div>
          <div>
            <h6 className="fw-semibold text-themed mb-1" style={{ fontSize: '0.95rem' }}>
              {alt.title}
            </h6>
            <p className="text-muted-themed mb-0" style={{ fontSize: '0.85rem' }}>
              {alt.desc}
            </p>
          </div>
        </div>
      ))}
      <div className="mt-3 p-3 rounded-3" style={{ backgroundColor: 'hsl(var(--primary) / 0.08)' }}>
        <p className="text-primary-themed fw-medium mb-1" style={{ fontSize: '0.9rem' }}>
          💡 Did you know?
        </p>
        <p className="text-muted-themed mb-0" style={{ fontSize: '0.83rem' }}>
          Replacing one processed meal per day with whole foods can reduce your risk of heart disease by up to 30%.
        </p>
      </div>
    </div>
  );
};

export default HealthyAlternatives;
