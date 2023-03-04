import { useCallback } from "react";
import { useHamburger } from "../context/hamburger";

/**
 * Custom hook for closing the sidebar if open
 */
const useCloseSidebar = () => {
  const { hamburgerOpen, toggleHamburger } = useHamburger();

  return useCallback(() => {
    if (hamburgerOpen) {
      toggleHamburger();
    }
  }, [hamburgerOpen, toggleHamburger]);
};

export default useCloseSidebar;
