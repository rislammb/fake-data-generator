import { useEffect } from "react";

export const useInfiniteScroll = (callback: () => void) => {
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        callback();
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [callback]);
};
