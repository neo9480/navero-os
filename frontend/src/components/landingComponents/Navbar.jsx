import { motion as Motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const navItems = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about-us" },
    { label: "Features", path: "/features" },
    { label: "Pricing", path: "/pricing" },
    { label: "Get Started", path: "/sign-in" },
  ];
  const [hoveredIndex, setHoveredIndex] = useState(null);
  return (
    <div className="navbar fixed text-platinum-500 h-[12vh] w-full flex items-center justify-center z-998 backdrop-blur-xs">
      <div className="flex items-center justify-between w-full">
        <img
          className="pl-[6.6vw] h-[4vh]"
          src="imgs/dark-navero-removebg.png"
          alt="logo"
        />
        <Motion.div className={`flex gap-[4vw] pr-[4vw] font-extralight  font-neue_montreal`}>
          {navItems.map((item, index) => {
            return (
              <Link
                className={`relative ${index === 3 && "mr-[10vw]"}`}
                to={item.path}
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}>
                {item.label.split("").map((char, i) => (
                  <Motion.span key={i} className="inline-block">
                    {char}
                  </Motion.span>
                ))}
                <Motion.div
                  className="absolute left-0 bottom-0 h-[0.2vh] w-full bg-platinum-500 origin-left"
                  initial={{ scaleX: 0 }}
                  animate={{
                    scaleX: hoveredIndex === index ? 1 : 0,
                    transformOrigin: hoveredIndex === index ? "left" : "right",
                  }}
                  transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
                />
              </Link>
            );
          })}
        </Motion.div>
      </div>
    </div>
  );
}

export default Navbar;
