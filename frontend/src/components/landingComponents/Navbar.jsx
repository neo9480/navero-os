import { motion as Motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

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
  return (
    <div className="navbar fixed text-platinum-500 h-[12vh] w-full flex items-center justify-center z-998 backdrop-blur-xs">
      <div className="flex items-center justify-between w-full">
        <img
          className="pl-[6.6vw] h-[4vh]"
          src="imgs/dark-navero-removebg.png"
          alt="logo"
        />
        <Motion.div
          className={`flex gap-[4vw] pr-[4vw] font-extralight  font-neue_montreal`}>
          {navItems.map((item, index) => {
            return (
              <Link
                className={`relative ${index === 3 && "mr-[10vw]"} ${index === 4 && "-mr-[2vw]"} ${index === 5 && "inline-flex items-center justify-center  cursor-pointer font-[NeueMontreal,Roboto,sans-serif] bg-platinum-600 text-space_indigo-100 leading-none font-normal select-none rounded-full overflow-hidden shadow-[inset_0_0_0_1px_transparent] duration-300 ease-[cubic-bezier(.215,.61,.355,1)]"}`}
                to={item.path}
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}>
                {index !== 5 ?
                  <>
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
                        transformOrigin:
                          hoveredIndex === index ? "left" : "right",
                      }}
                      transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
                    />
                  </>
                : <>
                    {/* label (visible) and expanding pill background */}
                    <span className="relative z-10 inline-block px-[0.5vw] py-[0.5vh] select-none ">
                      {item.label}
                    </span>
                    
                  </>
                }
              </Link>
            );
          })}
        </Motion.div>
      </div>
    </div>
  );
}

export default Navbar;
