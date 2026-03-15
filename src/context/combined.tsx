import React, { PropsWithChildren } from 'react';
import { MealPrepCartProvider } from './meal-prep-cart';

export const ContextProviders = ({ children }: PropsWithChildren<{}>) => (
  <MealPrepCartProvider>
    <>{children}</>
  </MealPrepCartProvider>
);
