import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { useLocation } from "react-router-dom";

function PageTransition() {
  const stairParentRef = useRef(null);
  const prevPathRef = useRef(null);
  const { pathname } = useLocation();

  useGSAP(
    () => {
      if (prevPathRef.current === null) {
        prevPathRef.current = pathname;
        return;
      }
      if (prevPathRef.current === pathname) return;

      prevPathRef.current = pathname;

      const tl = gsap.timeline();

      tl.set(stairParentRef.current, {
        display: "block",
      });
      tl.from(".PageTransition", {
        height: 0,
        stagger: {
          amount: -0.3,
        },
      });
      tl.to(".PageTransition", {
        y: "100%",
        stagger: {
          amount: -0.3,
        },
      });
      tl.to(stairParentRef.current, {
        display: "none",
      });
      tl.to(".PageTransition", {
        y: "0%",
      });
    },
    { dependencies: [pathname] },
  );

  return (
    <div
      ref={stairParentRef}
      className="h-screen w-full fixed z-999999 top-0 hidden">
      <div className=" h-full w-full flex">
        <div className="PageTransition h-full w-1/5 bg-black"></div>
        <div className="PageTransition h-full w-1/5 bg-black"></div>
        <div className="PageTransition h-full w-1/5 bg-black"></div>
        <div className="PageTransition h-full w-1/5 bg-black"></div>
        <div className="PageTransition h-full w-1/5 bg-black"></div>
      </div>
    </div>
  );
}

export default PageTransition;
