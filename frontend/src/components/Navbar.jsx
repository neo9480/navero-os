import { useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/light-navero-removebg.png";

const Navbar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const base =
    "border-2 border-[#0d192d] rounded-full px-2 text-xl font-semibold cursor-pointer -py-2 transition-colors";
  const active = "bg-[#0d192d] text-white";
  const inactive = "hover:bg-[#0d192d] hover:text-white";

  return (
    <div className="flex flex-row items-center justify-between p-4 border-b border-[#4c4c4c] max-h-40 text-[#0d192d]">
      <div className="max-w-36 -mt-1">
        <img src={logo} alt="Navero Logo" />
      </div>

      <div>
        <ul className="flex flex-row items-center justify-center gap-12">
          <li
            className={`${base} ${pathname === "/" ? active : inactive}`}
            onClick={() => navigate("/")}>
            HOME
          </li>

          <li
            className={`${base} ${
              pathname === "/about-us" ? active : inactive
            }`}
            onClick={() => navigate("/about-us")}>
            ABOUT US
          </li>

          <li
            className={`${base} ${
              pathname === "/features" ? active : inactive
            }`}
            onClick={() => navigate("/features")}>
            FEATURES
          </li>

          <li
            className={`${base} ${pathname === "/pricing" ? active : inactive}`}
            onClick={() => navigate("/pricing")}>
            PRICING
          </li>
        </ul>
      </div>

      <div className="flex flex-row gap-1">
        <button
          className={`text-xl text-[#0d192d] p-1 border-2 border-white ${
            pathname === "/sign-in"
              ? "border-b-[#0d192d]"
              : "hover:border-b-[#0d192d]"
          }  cursor-pointer`}
          onClick={() => navigate("/sign-in")}>
          sign in
        </button>

        <p className="text-xl text-[#0d192d] p-1 cursor-default">/</p>

        <button
          className={`text-xl text-[#0d192d] p-1 border-2 border-white ${
            pathname === "/sign-up"
              ? "border-b-[#0d192d]"
              : "hover:border-b-[#0d192d]"
          }  cursor-pointer`}
          onClick={() => navigate("/sign-up")}>
          sign up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
