import { useHamburger } from "../context/hamburger";

/**
 * Custom hook for closing the sidebar if open
 */
const useCloseSidebar = () => {
  const { hamburgerOpen, toggleHamburger } = useHamburger();

  return () => {
    if (hamburgerOpen) {
      toggleHamburger();
    }
  };
};

export default useCloseSidebar;
