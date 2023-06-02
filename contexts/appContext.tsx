"use client";

import React, { createContext, useEffect, useState } from 'react';
import { IAppContext, IAppState, IAppStateChange } from '../types';

const appState: IAppState = {
  isMenuOpen: false,
  isSearchOpen: false,
};

const AppContext = createContext<IAppContext | null>(null);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, setState] = useState({ ...appState });
  const updateState = (newState: IAppStateChange) => {
    setState(prevState => ({
      ...prevState,
      ...newState
    }));
  };

  return (
    <AppContext.Provider value={{ ...state, updateState: updateState }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
