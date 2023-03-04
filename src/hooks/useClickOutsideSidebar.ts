import { useEffect } from "react";
import { useHamburger } from "../context/hamburger";

import useCloseSidebar from "./useCloseSidebar";

/**
 * Closes the sidebar when clicking outside of it
 *
 */
const useClickOutsideSidebar = () => {
  const { hamburgerOpen } = useHamburger();
  const closeSidebar = useCloseSidebar();

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const sidebar = document.getElementById("header-background");

      if (!sidebar) {
        throw new Error("header-background not found");
      }

      if (event.target instanceof Element && !sidebar.contains(event.target)) {
        closeSidebar();
      }
    };

    const controller = new AbortController();
    const signal = controller.signal;

    if (hamburgerOpen) {
      document.addEventListener("click", handleClick, { signal });
    }

    return () => controller.abort();
  }, [hamburgerOpen, closeSidebar]);
};

export default useClickOutsideSidebar;
