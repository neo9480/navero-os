import logo from "../assets/light-navero-removebg.png";

const Navbar = () => {
  return (
    <div className="flex flex-row items-center justify-between p-4 border-b border-[#4c4c4c]  max-h-40 text-[#0d192d]">
      <div className="max-w-36 -mt-1">
        <img src={logo} alt="Navero Logo" />
      </div>
      <div>
        <ul className="flex flex-row items-center justify-center gap-12">
          <li className="border-2 border-[#0d192d] rounded-full px-2 text-xl font-semibold cursor-pointer hover:bg-[#0d192d] hover:text-white -py-2">
            HOME
          </li>
          <li className="border-2 border-[#0d192d] rounded-full px-2 text-xl font-semibold cursor-pointer hover:bg-[#0d192d] hover:text-white -py-2">
            ABOUT US
          </li>
          <li className="border-2 border-[#0d192d] rounded-full px-2 text-xl font-semibold cursor-pointer hover:bg-[#0d192d] hover:text-white -py-2">
            FEATURES
          </li>
          <li className="border-2 border-[#0d192d] rounded-full px-2 text-xl font-semibold cursor-pointer hover:bg-[#0d192d] hover:text-white -py-2">
            PRICING
          </li>
        </ul>
      </div>
      <div className="flex flex-row gap-1">
        <button className="text-xl text-[#0d192d] p-1 border-2 border-white hover:border-b-[#0d192d] cursor-pointer">
          login
        </button>
        <p className="text-xl text-[#0d192d] p-1 cursor-default">/</p>
        <button className="text-xl text-[#0d192d] p-1 border-2 border-white hover:border-b-[#0d192d] cursor-pointer">
          sign up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
