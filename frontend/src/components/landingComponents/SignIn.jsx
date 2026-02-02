import { Ship } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, Toaster } from "sonner";
import ABgDark from "../commonComponents/ABgDark";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:3000/api/auth/login",
        {
          email,
          password,
        },
        {
          withCredentials: true,
        },
      );
      const { accessToken, user } = res.data;

      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("user", JSON.stringify(user));
      toast.success("Login Successfull", { position: "top-center" });

      setTimeout(() => {
        navigate("/dashboard");
      }, 1000);
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

  const quotes = [
    {
      heading: "MOVE OR DISAPPEAR",
      quote:
        "Global trade doesn’t reward patience or nostalgia. It rewards momentum. If goods aren’t moving, neither is the business.",
    },
    {
      heading: "BORDERS ARE DETAILS",
      quote:
        "Distance, language, regulations, currencies. All solvable. The only real barrier is hesitation.",
    },
    {
      heading: "FLOW IS POWER",
      quote:
        "When information, capital, and cargo flow without friction, scale becomes inevitable.",
    },
    {
      heading: "SPEED IS TRUST",
      quote:
        "Fast execution builds confidence. Confidence builds partnerships. Partnerships build empires.",
    },
    {
      heading: "PAPER KILLS PROGRESS",
      quote:
        "Every unnecessary document is a delay pretending to be compliance.",
    },
    {
      heading: "CHAOS NEEDS SYSTEMS",
      quote:
        "Global trade isn’t broken. It’s unmanaged. Structure turns noise into opportunity.",
    },
    {
      heading: "CONTROL THE PIPELINE",
      quote:
        "Whoever controls visibility controls outcomes. Blind supply chains bleed money.",
    },
    {
      heading: "SCALE HAS NO PATIENCE",
      quote: "If your process can’t grow, your ambition doesn’t matter.",
    },
    {
      heading: "RISK IS THE PRICE",
      quote:
        "Trade exists because someone is willing to move first, fund first, ship first.",
    },
    {
      heading: "TRUST MOVES FREIGHT",
      quote: "Ships move goods. Trust moves deals.",
    },
    {
      heading: "FRICTION IS OPTIONAL",
      quote:
        "Most delays exist because ‘that’s how it’s done.’ That’s not a reason. That’s laziness.",
    },
    {
      heading: "TIME IS INVENTORY",
      quote: "Every idle hour is capital locked in a box.",
    },
    {
      heading: "GLOBAL IS DEFAULT",
      quote: "Local is a choice. Global is the playing field.",
    },
    {
      heading: "VISIBILITY WINS DEALS",
      quote:
        "If you can’t see it, you can’t price it. If you can’t price it, you can’t win.",
    },
    {
      heading: "PRECISION BEATS VOLUME",
      quote: "Moving more means nothing if margins leak at every handoff.",
    },
    {
      heading: "COMPLEXITY IS PROFITABLE",
      quote: "The hard parts scare competitors away. That’s where money hides.",
    },
    {
      heading: "SYSTEMS OUTLIVE PEOPLE",
      quote: "Individuals close deals. Systems build legacies.",
    },
    {
      heading: "NO SILOS, ONLY FLOWS",
      quote:
        "Trade collapses when stakeholders act alone. It explodes when they connect.",
    },
    {
      heading: "MONEY FOLLOWS MOVEMENT",
      quote: "Capital chases velocity, not promises.",
    },
    {
      heading: "DATA IS THE NEW PORT",
      quote: "Whoever owns the data controls the trade lanes.",
    },
    {
      heading: "DELAYS ARE DECISIONS",
      quote: "Every delay is a choice someone made or avoided.",
    },
    {
      heading: "COMPLIANCE IS STRATEGY",
      quote:
        "Rules aren’t obstacles. They’re leverage for those who understand them.",
    },
    {
      heading: "SCALE DEMANDS CLARITY",
      quote: "Ambiguity works small. At scale, it destroys everything.",
    },
    {
      heading: "GLOBAL TRADE NEVER SLEEPS",
      quote: "While you wait for Monday, someone else ships on Sunday.",
    },
    {
      heading: "LOGISTICS IS LEADERSHIP",
      quote:
        "Moving goods is easy. Coordinating people, systems, and trust is mastery.",
    },
    {
      heading: "CASH FLOW IS CARGO",
      quote: "If money doesn’t move, nothing else does.",
    },
    {
      heading: "INTEGRATION WINS WARS",
      quote: "Disconnected players compete. Connected ecosystems dominate.",
    },
    {
      heading: "VISIBILITY IS INSURANCE",
      quote: "What you can see, you can protect.",
    },
    {
      heading: "SPEED CREATES MOATS",
      quote: "Fast networks are hard to copy.",
    },
    {
      heading: "EXECUTION IS THE DIFFERENCE",
      quote: "Everyone has access to markets. Few can actually deliver.",
    },
    {
      heading: "TRADE REWARDS THE BOLD",
      quote: "Safe choices maintain. Bold moves expand.",
    },
    {
      heading: "PIPELINES BEAT PIPE DREAMS",
      quote: "Ideas don’t scale. Infrastructure does.",
    },
    {
      heading: "GLOBAL TRADE IS A GAME",
      quote: "The rules are public. Mastery is rare.",
    },
    {
      heading: "COMPLEXITY IS NOT CONFUSION",
      quote: "Handled right, complexity becomes competitive advantage.",
    },
    {
      heading: "CONNECTION IS CURRENCY",
      quote: "Who you connect defines how far you scale.",
    },
    {
      heading: "SILENCE COSTS MONEY",
      quote: "Lack of communication is the most expensive failure mode.",
    },
    {
      heading: "TRADE IS TIMING",
      quote: "One day early beats one percent cheaper.",
    },
    {
      heading: "NETWORKS BEAT NEGOTIATIONS",
      quote: "Strong ecosystems reduce the need to fight over margins.",
    },
    {
      heading: "MOMENTUM CREATES GRAVITY",
      quote: "Success attracts partners. Partners accelerate success.",
    },
    {
      heading: "GLOBAL TRADE IS BUILT",
      quote: "Not promised. Not imagined. Built.",
    },
  ];

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
          <div className="flex justify-center items-center gap-[1vw]">
            <div className="">
              <Ship height={"5vh"} width={"5vh"} />
            </div>
            <div className="w-[18vh] flex justify-between items-center">
              <img src="../../../imgs/light-navero-removebg.png"></img>
            </div>
          </div>
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
                  <input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full h-[5vh] p-[1vw] bg-lavender_grey-800 rounded-full"
                  />
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
