import { createContext, useCallback, useContext, useState } from "react";

interface TastyBurger {
  hamburgerOpen: boolean;
  toggleHamburger: () => void;
}

const HamburgerContext = createContext<TastyBurger | undefined>(undefined);

/**
 * Context provider for the hamburger button
 */
const HamburgerProvider = ({ children }: { children: React.ReactNode }) => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const value = {
    hamburgerOpen,
    toggleHamburger: useCallback(
      () => setHamburgerOpen((previous) => !previous),
      []
    ),
  };

  return (
    <HamburgerContext.Provider value={value}>
      {children}
    </HamburgerContext.Provider>
  );
};

/**
 * https://files.catbox.moe/kkotxk.png
 */
const useHamburger = () => {
  const context = useContext(HamburgerContext);

  if (!context) {
    throw new Error("useHamburger must be used within a HamburgerProvider 🍔");
  }

  return context;
};

export { HamburgerProvider, useHamburger };
