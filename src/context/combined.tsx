import React, { PropsWithChildren } from 'react';
import {
  CartProvider,
  CheckoutCartProvider
} from '.';

export const ContextProviders = ({ children }: PropsWithChildren<{}>) => (
  <CartProvider>
    <CheckoutCartProvider>
      <>{children}</>
    </CheckoutCartProvider>
  </CartProvider>
);
