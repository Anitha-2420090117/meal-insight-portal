import { Salad, Apple, Carrot, Leaf } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface Recipe {
  id: string;
  icon: LucideIcon;
  title: string;
  desc: string;
  image: string;
  longDesc: string;
  ingredients: string[];
  steps: string[];
}

export const recipes: Recipe[] = [
  {
    id: 'garden-salad',
    icon: Salad,
    title: 'Fresh Garden Salad',
    desc: 'Packed with fiber, vitamins, and antioxidants.',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80',
    longDesc:
      'A vibrant mix of seasonal greens, cherry tomatoes, cucumbers, and a light lemon vinaigrette. Perfect as a starter or a light lunch.',
    ingredients: [
      '4 cups mixed greens (arugula, spinach, romaine)',
      '1 cup cherry tomatoes, halved',
      '1 cucumber, sliced',
      '½ red onion, thinly sliced',
      '¼ cup crumbled feta cheese',
      '2 tbsp extra-virgin olive oil',
      '1 tbsp fresh lemon juice',
      'Salt & pepper to taste',
    ],
    steps: [
      'Wash and dry all greens and vegetables.',
      'Combine greens, tomatoes, cucumber, and onion in a large bowl.',
      'Whisk olive oil, lemon juice, salt, and pepper in a small bowl.',
      'Drizzle the dressing over the salad and toss gently.',
      'Top with crumbled feta and serve immediately.',
    ],
  },
  {
    id: 'fruit-bowl',
    icon: Apple,
    title: 'Seasonal Fruit Bowl',
    desc: 'Natural sugars and essential micronutrients.',
    image: 'https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?w=600&q=80',
    longDesc:
      'A colorful assortment of seasonal fruits drizzled with honey and topped with granola. A refreshing, naturally sweet meal or snack.',
    ingredients: [
      '1 banana, sliced',
      '1 cup strawberries, quartered',
      '½ cup blueberries',
      '1 kiwi, peeled and sliced',
      '½ cup Greek yogurt',
      '2 tbsp granola',
      '1 tbsp honey',
      'Fresh mint leaves for garnish',
    ],
    steps: [
      'Wash all fruit thoroughly.',
      'Arrange Greek yogurt as the base in a bowl.',
      'Layer the sliced banana, strawberries, blueberries, and kiwi on top.',
      'Sprinkle granola over the fruit.',
      'Drizzle with honey and garnish with mint leaves.',
    ],
  },
  {
    id: 'veggie-mix',
    icon: Carrot,
    title: 'Roasted Veggie Mix',
    desc: 'Low calorie, high flavor, nutrient-dense.',
    image: 'https://images.unsplash.com/photo-1606923829579-0cb981a83e2e?w=600&q=80',
    longDesc:
      'Oven-roasted seasonal vegetables with herbs and a hint of balsamic glaze. A hearty, satisfying dish that pairs well with any protein.',
    ingredients: [
      '2 cups broccoli florets',
      '1 red bell pepper, chopped',
      '1 zucchini, sliced',
      '1 sweet potato, cubed',
      '2 tbsp olive oil',
      '1 tsp garlic powder',
      '1 tsp dried rosemary',
      '1 tbsp balsamic glaze',
      'Salt & pepper to taste',
    ],
    steps: [
      'Preheat oven to 220°C (425°F).',
      'Toss all vegetables with olive oil, garlic powder, rosemary, salt, and pepper.',
      'Spread evenly on a parchment-lined baking sheet.',
      'Roast for 25–30 minutes, flipping halfway through.',
      'Drizzle with balsamic glaze before serving.',
    ],
  },
  {
    id: 'quinoa-bowl',
    icon: Leaf,
    title: 'Quinoa Power Bowl',
    desc: 'Complete protein with whole grain goodness.',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80',
    longDesc:
      'A nutrient-packed bowl featuring fluffy quinoa, roasted chickpeas, avocado, and a tangy tahini dressing. The ultimate balanced meal.',
    ingredients: [
      '1 cup quinoa, cooked',
      '1 can chickpeas, drained and rinsed',
      '1 avocado, sliced',
      '1 cup baby spinach',
      '½ cup shredded carrots',
      '2 tbsp tahini',
      '1 tbsp lemon juice',
      '1 tbsp warm water',
      'Salt, pepper, paprika to taste',
    ],
    steps: [
      'Cook quinoa according to package directions and let cool slightly.',
      'Toss chickpeas with a drizzle of olive oil and paprika, then roast at 200°C for 20 minutes.',
      'Whisk tahini, lemon juice, warm water, salt, and pepper into a smooth dressing.',
      'Assemble bowls: quinoa base, topped with spinach, carrots, chickpeas, and avocado.',
      'Drizzle tahini dressing over the top and serve.',
    ],
  },
];
