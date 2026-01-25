import React from "react";
import Marquee from "../commonComponents/Marquee";

function Home() {

  return (
    <div
      className={`bg-space_indigo-100 bg-[url(/imgs/image.svg)] bg-no-repeat bg-cover bg-center w-full h-screen text-platinum-500 p-[2vw] z-9 flex`}>
      <div className="flex flex-col justify-between h-full ">
        <div className=" flex flex-col item-center justify-center pl-[4.6vw] w-full h-full cursor-default">
          <h1 className="text-[17vh] leading-none font-extrabold font-host_grotesk ">
            TRADE <br />
            WITHOUT <br />
            FRICTION
          </h1>
        </div>

        <hr className="bg-platinum-500 h-[0.1vh] w-full" />
      </div>
      <div>
        <Marquee />
      </div>
    </div>
  );
}

export default Home;
