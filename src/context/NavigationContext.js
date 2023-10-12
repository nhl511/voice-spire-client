// NavigationContext.js
import React, { createContext, useContext, useState } from "react";

const NavigationContext = createContext();

export const useNavigationContext = () => useContext(NavigationContext);

export const NavigationProvider = ({ children }) => {
  const [navigationFlag, setNavigationFlag] = useState(0);

  const updateNavigationFlag = () => {
    setNavigationFlag((flag) => flag + 1);
  };

  return (
    <NavigationContext.Provider
      value={{ navigationFlag, updateNavigationFlag }}
    >
      {children}
    </NavigationContext.Provider>
  );
};
