import React, { createContext, Dispatch, PropsWithChildren, SetStateAction } from 'react';
import { useSessionStorage } from '../hooks/use-session-storage';

export type CheckoutCart = string[];
export type Quantities = {
    cartWithQuantities: JSX.Element[];
    total: string;
    selectedShipping: string;
    details: string;
    customerInformation: {
        firstName: string;
        surname: string;
        emailAddress: string;
        address: string;
    }
};

export const initalQuantites = {
    cartWithQuantities: [<></>],
    total: '',
    selectedShipping: '',
    details: '',
    customerInformation: {
        firstName: '',
        surname: '',
        emailAddress: '',
        address: ''
    }
}

type CheckoutContextType = {
    checkoutCart: CheckoutCart;
    setCheckoutCart: Dispatch<SetStateAction<CheckoutCart>>;
    quantities: Quantities;
    setCartWithQuantities: Dispatch<SetStateAction<Quantities>>;
};

export const CheckoutContext = createContext<CheckoutContextType>({
    checkoutCart: [],
    setCheckoutCart: () => undefined,
    quantities: initalQuantites,
    setCartWithQuantities: () => undefined
});

export const CheckoutCartProvider = ({ children }: PropsWithChildren<{}>) => {
    const [checkoutCart, setCheckoutCart] = useSessionStorage('checkoutCart', ['']);
    const [quantities, setCartWithQuantities] = useSessionStorage('checkoutCart', initalQuantites);

    return (
        <CheckoutContext.Provider
            value={{
                checkoutCart,
                setCheckoutCart,
                quantities,
                setCartWithQuantities
            }}
        >
            {children}
        </CheckoutContext.Provider>
    );
};
