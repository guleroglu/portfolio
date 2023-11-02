import { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isToggle, setIsToggle] = useState(true);
  const [selectedOption, setSelectedOption] = useState(true);

  const value = {
    isHovered,
    setIsHovered,
    isToggle,
    setIsToggle,
    selectedOption,
    setSelectedOption,
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};
