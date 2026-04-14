import { Ship, Eye, EyeClosed } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, Toaster } from "sonner";
import ABgDark from "@/components/commonComponents/ABgDark";
import useAuthStore from "@/store/useAuthStore";
import { QUOTES } from "@/constants/quotes";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useAuthStore();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await login(email, password);
      toast.success("Login Successfull", { position: "top-center" });

      navigate("/dashboard");
    } catch (err) {
      console.error(err);

      if (err.response) {
        toast.error("Login Failed: Incorrect email or password", {
          position: "top-center",
        });
      } else {
        toast.error("Server Not Responding", { position: "top-center" });
      }
    }
  };

  const quotes = QUOTES;

  const [quote] = useState(() => {
    return quotes[Math.floor(Math.random() * quotes.length)];
  });

  if (!quote) return null;

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <Toaster theme="dark" />
      <ABgDark />
      <div className="h-[90vh] w-[95vw] flex rounded-4xl border-[1vh] border-platinum-600 backdrop-blur-xl">
        <div className="h-full w-1/2 bg-transparent p-[1vw] flex flex-col justify-between text-platinum-500">
          <div className="flex gap-[1vw] items-center">
            <p>A Wise Man Once Said</p>
            <hr className="w-[15vw] " />
          </div>
          <div className="w-[26.4vw] text">
            <h1 className="font-extrabold font-host_grotesk text-[5vw] leading-none">
              {quote.heading}
            </h1>
            <p className="text-[1vw] font-medium">{quote.quote}</p>
          </div>
        </div>
        <div className="h-full w-1/2 bg-platinum-600 rounded-l-4xl flex flex-col justify-between items-center p-[1vw] font-neue_montreal">
          <Link to={"/"}>
            <div className="flex justify-center items-center gap-[1vw]">
              <div className="">
                <Ship height={"5vh"} width={"5vh"} />
              </div>
              <div className="w-[18vh] flex justify-between items-center">
                <img src="../../../imgs/light-navero-removebg.png"></img>
              </div>
            </div>
          </Link>
          <div className=" flex flex-col justify-center items-center gap-[1vw]">
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-5xl ">Welcome Back</h1>
              <h2>Enter your email and and password to access your account</h2>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-[1vw]">
              <div className="flex flex-col justify-between items-start gap-[1vw]">
                <div className="w-[30vw]">
                  <p>Email</p>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full h-[5vh] p-[1vw] bg-lavender_grey-800 rounded-full"
                  />
                </div>
                <div className="w-[30vw]">
                  <p>Password</p>
                  <div className="relative w-full">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="w-full h-[5vh] p-[1vw] pr-[3vw] bg-lavender_grey-800 rounded-full"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((prev) => !prev)}
                      className="absolute right-[1vw] top-1/2 -translate-y-1/2  hover:text-space_indigo-200 cursor-pointer transition">
                      {showPassword ?
                        <Eye className="size-4" />
                      : <EyeClosed className="size-4" />}
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex gap-[0.5vw]">
                <input type="checkbox" />
                <p>Remember Me</p>
              </div>

              <button
                type="submit"
                className="bg-space_indigo-200 text-platinum-500 h-[5vh] rounded-full cursor-pointer">
                Sign In
              </button>

              {/* {message && <p>{message}</p>} */}
            </form>
          </div>
          <div>
            <p className="text-space_indigo-600">
              Don't have an account?&nbsp;
              <Link
                to={"/sign-up"}
                className="text-space_indigo-200 font-extrabold">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
