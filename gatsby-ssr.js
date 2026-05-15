import React from 'react';
import { MealPrepCartProvider } from './src/context/meal-prep-cart';

export const wrapRootElement = ({ element }) => (
  <MealPrepCartProvider>{element}</MealPrepCartProvider>
);
