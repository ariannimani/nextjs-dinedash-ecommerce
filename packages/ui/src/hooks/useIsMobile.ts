import { useEffect, useState } from "react";
import { detectSSR } from "../helpers";
import { breakpoints } from "../style";

const { isServer } = detectSSR();

export function useIsMobile() {
  const isInitialMobile = isServer
    ? false
    : window?.innerWidth <= breakpoints.largeMobile.max;
  const [isMobile, setIsMobile] = useState(isInitialMobile);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= breakpoints.largeMobile.max) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
}
