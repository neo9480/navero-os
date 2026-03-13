import Marquee from "../commonComponents/Marquee";

function Home() {

  return (
    <div className="flex ">
      <div
        className={`bg-space_indigo-100 bg-[url(/imgs/image.svg)] bg-no-repeat bg-cover bg-center w-full h-screen text-platinum-500 p-[2vw] z-9 flex flex-col `}>
        <div className="flex justify-between h-full w-full ">
          <div className=" flex flex-col item-center justify-center pl-[4.6vw] w-full h-full cursor-default">
            <h1 className="text-[17vh] leading-none font-extrabold font-host_grotesk ">
              TRADE <br />
              WITHOUT <br />
              <span className="text-punch_red-500">FRICTION</span>
            </h1>
          </div>
          <div className="relative h-full w-full overflow-hidden">
            <div className="absolute h-full w-full -mt-130 -m-96 ">
              <Marquee
                text="WELCOME TO NAVÉRO"
                css="origin-left rotate-45 transition-transform w-[110vw]"
              />
              <Marquee
                text="WELCOME TO NAVÉRO"
                css="origin-right -rotate-45 transition-transform w-[100vw]"
              />
            </div>
          </div>
        </div>

        <hr className="bg-platinum-500 h-[0.1vh] w-full" />
      </div>
    </div>
  );
}

export default Home;
