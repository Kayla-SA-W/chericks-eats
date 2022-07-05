import React, { createContext, Dispatch, PropsWithChildren, SetStateAction } from 'react';
import { useSessionStorage } from '../hooks/use-session-storage';
import { initialCartState } from './initial-cart';

export type Cart = Record<string, {price: number, quantity: number}>

type CartContextType = {
    cart: Cart;
    setCart: Dispatch<SetStateAction<Cart>>;
};

export const CartContext = createContext<CartContextType>({
    cart: initialCartState,
    setCart: () => undefined
});

export const CartProvider = ({ children }: PropsWithChildren<{}>) => {
    const [cart, setCart] = useSessionStorage('cart', initialCartState);

    return (
        <CartContext.Provider
            value={{
                cart,
                setCart
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

