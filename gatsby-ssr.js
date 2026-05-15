import React from 'react';
import { MealPrepCartProvider } from './src/context/meal-prep-cart';

export const wrapRootElement = ({ element }) => (
  <MealPrepCartProvider>{element}</MealPrepCartProvider>
);

export const onRenderBody = ({ setBodyAttributes, setHtmlAttributes }) => {
  setHtmlAttributes({ style: { backgroundColor: '#1a0e07' } });
  setBodyAttributes({ style: { backgroundColor: '#1a0e07', margin: 0 } });
};
