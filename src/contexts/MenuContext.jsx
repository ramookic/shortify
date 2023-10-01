import { createContext, useContext, useState } from "react";

const MenuContext = createContext();

function MenuProvider({ children }) {
  const [showMenu, setShowMenu] = useState(false);

  function toggleShowMenu() {
    setShowMenu(!showMenu);
  }

  return (
    <MenuContext.Provider value={{ showMenu, toggleShowMenu }}>
      {children}
    </MenuContext.Provider>
  );
}

function useMenu() {
  const context = useContext(MenuContext);
  if (context === undefined) {
    throw new Error("MenuContext was used outsied of MenuProvider");
  }
  return context;
}

export { MenuProvider, useMenu };
