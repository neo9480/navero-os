import { motion as Motion } from "framer-motion";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const navItems = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about-us" },
    { label: "Features", path: "/features" },
    { label: "Pricing", path: "/pricing" },
    { label: "Sign-In", path: "/sign-in" },
    { label: "Sign-Up", path: "/sign-up" },
  ];
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const location = useLocation();
  return (
    <div className="navbar mt-2 ml-2 fixed text-platinum-500 h-[12vh] rounded-2xl w-[98.5vw] flex items-center justify-center z-998 backdrop-blur-xs">
      <div className="flex items-center justify-between w-full">
        <img
          className="pl-[6.6vw] h-[4vh]"
          src="imgs/dark-navero-removebg.png"
          alt="logo"
        />
        <Motion.div
          className={`flex gap-[4vw] pr-[4vw] font-extralight  font-neue_montreal`}>
          {navItems.map((item, index) => {
            const isActive = location.pathname === item.path;

            return (
              <Link
                className={`relative ${index === 3 && "mr-[10vw]"} ${index === 4 && "-mr-[2vw]"} ${index === 5 && "inline-flex items-center justify-center border cursor-pointer bg-platinum-600 text-space_indigo-100 leading-none font-normal select-none rounded-full overflow-hidden hover:bg-space_indigo-100 hover:text-platinum-600 transition py-[0.5vh] px-[0.5vw] hover:border hover:border-platinum-600 "}`}
                to={item.path}
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}>
                {index !== 5 ? (
                  <>
                    {item.label.split().map((char, i) => (
                      <Motion.span key={i} className="inline-block">
                        {char}
                      </Motion.span>
                    ))}

                    <Motion.div
                      className="absolute left-0 bottom-0 h-[0.2vh] w-full bg-platinum-500 origin-left"
                      initial={{ scaleX: isActive ? 1 : 0 }}
                      animate={{
                        scaleX: isActive || hoveredIndex === index ? 1 : 0,
                        transformOrigin:
                          isActive || hoveredIndex === index ? "left" : "right",
                      }}
                      transition={isActive ? { duration: 0 } : { duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
                    />
                  </>
                ) : (
                  <>
                    <span>{item.label}</span>
                  </>
                )}
              </Link>
            );
          })}
        </Motion.div>
      </div>
    </div>
  );
}

export default Navbar;
