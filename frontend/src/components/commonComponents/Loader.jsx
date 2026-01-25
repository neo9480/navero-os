import { motion as Motion } from "framer-motion";
import { useEffect, useState } from "react";

function Loader({onDone}) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const i = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(i);
          return 100;
        }
        return p + 2;
      });
    }, 40);

    return () => clearInterval(i);
  }, [] );
  
  useEffect(() => {
    if (progress === 100) {
      const t = setTimeout( () => {
        onDone();
      }, 1000);
      return () => clearTimeout(t);
    }
  }, [progress, onDone]);

  return (
    <div className="fixed h-screen w-full flex  justify-center items-center bg-zinc-900 ">
      <Motion.div
        initial={{ scale: 0.8, borderRadius: "1.5rem" }}
        animate={
          progress === 100 ? { scale: 1, borderRadius: "0rem" } : { scale: 0.8 }
        }
        transition={{ duration: 1, ease: "linear" }}
        className={`bg-space_indigo-100 w-full h-full absolute z-999 text-platinum-500 p-[2vw]`}>
        <div className=" relative flex flex-col justify-between h-full">
          <div className=" flex flex-col h-full w-full items-start justify-center ">
            <img
              className="pl-[4.6vw] h-[4vh]"
              src="imgs/dark-navero-removebg.png"
              alt=""
            />
            <div className="flex flex-col h-full items-center justify-center pl-[4.6vw] pt-[7.1vh]  ">
              <h1 className="text-[17vh] leading-none font-extrabold font-host_grotesk  ">
                TRADE <br />
                WITHOUT <br />
                FRICTION
              </h1>
            </div>
            <Motion.div
              className="relative flex w-full items-center px-[2vw] justify-between "
              initial={{ opacity: 1 }}
              animate={progress === 100 ? { opacity: 0 } : {opacity: 1}}
              transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }}>
              <div className="font-neue_montreal text-[5vh]">loading...</div>
              <div className="font-neue_montreal text-[7vh] font-extrabold">
                {progress}%
              </div>
            </Motion.div>
          </div>
        </div>
      </Motion.div>
      <Motion.div
        initial={{ scale: 0.7, x: -1300 }}
        animate={{ x: 100 }}
        transition={{ ease: [0.33, 1, 0.68, 1], duration: 1 }}
        className="bg-zinc-700 opacity-30 w-full h-full rounded-3xl absolute z-998"></Motion.div>
      <Motion.div
        initial={{ scale: 0.6, x: 2300 }}
        animate={{ x: 200 }}
        transition={{ ease: [0.33, 1, 0.68, 1], duration: 1 }}
        className="bg-zinc-700 opacity-30 w-full h-full rounded-3xl absolute z-997"></Motion.div>
    </div>
  );
}

export default Loader;
