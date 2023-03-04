import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

/**
 * Automatic scroll reset when navigating to different
 * routes than the previous one.
 *
 */
const useScrollReset = () => {
  const location = useLocation();
  const previousPath = useRef(location.pathname);

  useEffect(() => {
    if (location.pathname !== previousPath.current) {
      window.scroll({ top: 0, left: 0, behavior: "smooth" });

      previousPath.current = location.pathname;
    }
  }, [location]);
};

export default useScrollReset;
