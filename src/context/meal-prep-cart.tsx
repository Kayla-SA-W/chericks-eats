import React, { createContext, Dispatch, PropsWithChildren, SetStateAction } from 'react';
import { useSessionStorage } from '../hooks/use-session-storage';
import { MealPrepSelections, calculateStandardTotal } from '../data/meal-prep';

export interface MealPrepOrder {
  id: string;
  selections: MealPrepSelections;
  total: number;
  description: string;
}

type MealPrepCartContextType = {
  orders: MealPrepOrder[];
  setOrders: Dispatch<SetStateAction<MealPrepOrder[]>>;
  addOrder: (selections: MealPrepSelections) => void;
  removeOrder: (id: string) => void;
  clearCart: () => void;
};

export const MealPrepCartContext = createContext<MealPrepCartContextType>({
  orders: [],
  setOrders: () => undefined,
  addOrder: () => undefined,
  removeOrder: () => undefined,
  clearCart: () => undefined,
});

function buildDescription(s: MealPrepSelections): string {
  const parts = [`${s.days} days`];
  if (s.plateType === 'protein') {
    parts.push(s.protein ?? '');
  } else {
    parts.push(s.pasta ?? '');
    if (s.pastaProtein && s.pastaProtein !== 'none') {
      parts.push(`+ ${s.pastaProtein}`);
    }
  }
  parts.push(s.base ?? '', s.veggie ?? '', s.sauce ?? '');
  return parts.filter(Boolean).join(' · ');
}

export const MealPrepCartProvider = ({ children }: PropsWithChildren<{}>) => {
  const [orders, setOrders] = useSessionStorage<MealPrepOrder[]>('mealPrepCart', []);

  const addOrder = (selections: MealPrepSelections) => {
    const newOrder: MealPrepOrder = {
      id: `mp-${Date.now()}`,
      selections,
      total: calculateStandardTotal(selections),
      description: buildDescription(selections),
    };
    setOrders((prev) => [...prev, newOrder]);
  };

  const removeOrder = (id: string) => {
    setOrders((prev) => prev.filter((o) => o.id !== id));
  };

  const clearCart = () => {
    setOrders([]);
  };

  return (
    <MealPrepCartContext.Provider value={{ orders, setOrders, addOrder, removeOrder, clearCart }}>
      {children}
    </MealPrepCartContext.Provider>
  );
};
