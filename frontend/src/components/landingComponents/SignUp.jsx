import { useEffect, useState } from "react";
import ABgLight from "../commonComponents/ABgLight";
import Stepper, { Step } from "../shadcnComponents/Stepper";
import { ChevronDown, Ship } from "lucide-react";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";

// const validators = {
//   Required: (value) =>
//     value === undefined || value === null || value === "" ? "Required" : "",

//   Email: (value) => (/\S+@\S+\.\S+/.test(value) ? "" : "Invalid email"),

//   Password: (len) => (value) =>
//     value && value.length >= len ?
//       ""
//     : `Password must be atleast ${len} characters long`,
// };

const SignUp = () => {
  // const [data, setData] = useState(
  //   () => JSON.parse(localStorage.getItem("msf-data")) || "{}",
  // );
  // const [errors, setErrors] = useState({});
  // const [submitting, setSubmitting] = useState(false);
  const [role, setRole] = useState(null);
  const [companyName, setCompanyName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // useEffect(() => {
  //   localStorage.setItem("msf-data", JSON.stringify(data));
  // }, [data]);

  
  // const validateStep = (s = currentStep) => {};

  return (
    <div className="h-screen w-screen flex justify-center items-center bg-platinum-600 font-neue_montreal text-platinum-500">
      <ABgLight />

      <div className="flex justify-center items-center h-[90vh] w-[95vw] rounded-4xl border-[1vh] z-10 border-space_indigo-200 backdrop-blur-xl ">
        <div className="h-[80vh] w-[80vw] flex flex-col justify-between items-center p-[1vw] bg-space_indigo-200 rounded-4xl">
          <div className="flex justify-center items-center gap-[1vw] w-[12vw]">
            <Ship />
            <img src="./imgs/dark-navero-removebg.png" className="w-[7vw]" />
          </div>
          <div className="flex flex-col justify-between items-center">
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-4xl font-extrabold">WELCOME</h1>
              <p>Fill out the details to create an account</p>
            </div>
            <div className="h-[55vh]">
              <Stepper
                initialStep={1}>
                <Step>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-lavender_grey-500">
                      Select your role
                    </label>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="outline"
                          className="flex bg-space_indigo-100 rounded-full items-center justify-center gap-2">
                          {role ?? "Choose a role"}
                          <ChevronDown className="size-4 opacity-60" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="bg-space_indigo-100 text-platinum-600">
                        <DropdownMenuGroup>
                          <DropdownMenuLabel>Role</DropdownMenuLabel>
                          <DropdownMenuRadioGroup
                            value={role}
                            onValueChange={setRole}>
                            <DropdownMenuRadioItem value="IMPORTER">
                              Importer
                            </DropdownMenuRadioItem>
                            <DropdownMenuRadioItem value="EXPORTER">
                              Exporter
                            </DropdownMenuRadioItem>
                            <DropdownMenuRadioItem value="BANK">
                              Bank
                            </DropdownMenuRadioItem>
                            <DropdownMenuRadioItem value="BROKER">
                              Broker
                            </DropdownMenuRadioItem>
                            <DropdownMenuRadioItem value="CUSTOMS">
                              Customs
                            </DropdownMenuRadioItem>
                          </DropdownMenuRadioGroup>
                        </DropdownMenuGroup>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </Step>
                <Step>
                  <label className="text-sm font-medium text-lavender_grey-500">
                    Business/Company info...
                  </label>
                  <div>
                    <form>
                      <div className="">
                        <p>Business Name</p>
                        <input
                          type="text"
                          name="companyName"
                          placeholder="Enter company name..."
                          value={companyName}
                          onChange={(e) => setCompanyName(e.target.value)}
                          required
                          className="w-full h-[5vh] p-[1vw] bg-lavender_grey-200 rounded-full"
                        />
                      </div>
                      <div className="">
                        <p>Business Phone</p>
                        <input
                          type="tel"
                          name="phone"
                          placeholder="Enter contact number..."
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          required
                          className="w-full h-[5vh] p-[1vw] bg-lavender_grey-200 rounded-full"
                        />
                      </div>
                      <div className="">
                        <p>Business Address</p>
                        <textarea
                          name="address"
                          placeholder="Enter your Business's/Company's address..."
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                          required
                          className="w-full h-[8vh] p-[1vw] bg-lavender_grey-200 rounded-full"></textarea>
                      </div>
                    </form>
                  </div>
                </Step>
                <Step>
                  <form action="">
                    <div className="">
                      <p>Business Email</p>
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter your Business's/Company's email..."
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full h-[5vh] p-[1vw] bg-lavender_grey-200 rounded-full"
                      />
                    </div>
                    <div className="">
                      <p>Password</p>
                      <input
                        type="password"
                        placeholder="Enter a password..."
                        required
                        className="w-full h-[5vh] p-[1vw] bg-lavender_grey-200 rounded-full"
                      />
                    </div>
                    <div className="">
                      <p>Confirm Password</p>
                      <input
                        type="password"
                        name="password"
                        placeholder="confirm your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="w-full h-[5vh] p-[1vw] bg-lavender_grey-200 rounded-full"
                      />
                    </div>
                  </form>
                </Step>
                <Step>

                </Step>
                <Step></Step>
              </Stepper>
            </div>
          </div>
          <div>
            <p className="text-lavender_grey-600">
              Already have an account?&nbsp;
              <Link
                to={"/sign-in"}
                className="text-platinum-900 font-extrabold">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

