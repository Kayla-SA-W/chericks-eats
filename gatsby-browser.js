import React from 'react';
import { ContextProviders } from './src/context/combined';

export const wrapRootElement = ({ element }) => (
  <ContextProviders>{element}</ContextProviders>
);
