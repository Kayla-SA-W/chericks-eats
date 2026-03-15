import React, { createContext, Dispatch, PropsWithChildren, SetStateAction } from 'react';
import { useSessionStorage } from '../hooks/use-session-storage';
import { MealPrepSelections, calculateStandardTotal, getCrewPackPrice } from '../data/meal-prep';

export interface MealPrepOrder {
  id: string;
  selections: MealPrepSelections;
  total: number;
  description: string;
}

export interface CookbookItem {
  id: string;
  title: string;
  price: number;
  downloadPath: string;
}

export interface CrewPackOrder {
  id: string;
  packName: string;
  description: string;
  total: number;
}

type MealPrepCartContextType = {
  orders: MealPrepOrder[];
  setOrders: Dispatch<SetStateAction<MealPrepOrder[]>>;
  addOrder: (selections: MealPrepSelections) => void;
  removeOrder: (id: string) => void;
  crewPacks: CrewPackOrder[];
  setCrewPacks: Dispatch<SetStateAction<CrewPackOrder[]>>;
  addCrewPack: (selections: MealPrepSelections) => void;
  removeCrewPack: (id: string) => void;
  cookbooks: CookbookItem[];
  setCookbooks: Dispatch<SetStateAction<CookbookItem[]>>;
  addCookbook: (cookbook: CookbookItem) => void;
  removeCookbook: (id: string) => void;
  clearCart: () => void;
};

export const MealPrepCartContext = createContext<MealPrepCartContextType>({
  orders: [],
  setOrders: () => undefined,
  addOrder: () => undefined,
  removeOrder: () => undefined,
  crewPacks: [],
  setCrewPacks: () => undefined,
  addCrewPack: () => undefined,
  removeCrewPack: () => undefined,
  cookbooks: [],
  setCookbooks: () => undefined,
  addCookbook: () => undefined,
  removeCookbook: () => undefined,
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
  const [crewPacks, setCrewPacks] = useSessionStorage<CrewPackOrder[]>('crewPackCart', []);
  const [cookbooks, setCookbooks] = useSessionStorage<CookbookItem[]>('cookbookCart', []);

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

  const addCrewPack = (selections: MealPrepSelections) => {
    const packName = selections.crewPack ?? '';
    const price = getCrewPackPrice(packName);
    const pack: CrewPackOrder = {
      id: `cp-${Date.now()}`,
      packName,
      description: packName,
      total: price,
    };
    setCrewPacks((prev) => [...prev, pack]);
  };

  const removeCrewPack = (id: string) => {
    setCrewPacks((prev) => prev.filter((p) => p.id !== id));
  };

  const addCookbook = (cookbook: CookbookItem) => {
    setCookbooks((prev) => {
      if (prev.some((c) => c.id === cookbook.id)) return prev;
      return [...prev, cookbook];
    });
  };

  const removeCookbook = (id: string) => {
    setCookbooks((prev) => prev.filter((c) => c.id !== id));
  };

  const clearCart = () => {
    setOrders([]);
    setCrewPacks([]);
    setCookbooks([]);
  };

  return (
    <MealPrepCartContext.Provider value={{
      orders, setOrders, addOrder, removeOrder,
      crewPacks, setCrewPacks, addCrewPack, removeCrewPack,
      cookbooks, setCookbooks, addCookbook, removeCookbook,
      clearCart,
    }}>
      {children}
    </MealPrepCartContext.Provider>
  );
};
