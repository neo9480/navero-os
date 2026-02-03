import { useEffect, useState } from "react";
import ABgLight from "../commonComponents/ABgLight";
import Stepper, { Step } from "../shadcnComponents/Stepper";
import { Ship } from "lucide-react";
import { Link } from "react-router-dom";

const validators = {
  Required: (value) =>
    value === undefined || value === null || value === "" ? "Required" : "",

  Email: (value) => (/\S+@\S+\.\S+/.test(value) ? "" : "Invalid email"),

  Password: (len) => (value) =>
    value && value.length >= len ?
      ""
    : `Password must be atleast ${len} characters long`,
};

const SignUp = () => {
  const [data, setData] = useState(
    () => JSON.parse(localStorage.getItem("msf-data")) || "{}",
  );
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    localStorage.setItem("msf-data", JSON.stringify(data));
  }, [data]);

  const validateStep = (s = currentStep) => {};

  return (
    <div className="h-screen w-screen flex justify-center items-center bg-platinum-600 font-neue_montreal text-platinum-500">
      <ABgLight />

      <div className="flex justify-center items-center h-[90vh] w-[95vw] rounded-4xl border-[1vh] z-10 border-space_indigo-200 backdrop-blur-xl ">
        <div className="h-[80vh] w-[80vw] flex flex-col justify-between items-center p-[1vw] bg-space_indigo-200 rounded-4xl">
          <div className="flex justify-center items-center gap-[1vw] w-[12vw]">
            <Ship />
            <img src="./imgs/dark-navero-removebg.png" className="w-[7vw]" />
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-4xl font-extrabold">WELCOME</h1>
              <p>Fill out the details to create an account</p>
            </div>
            <div className="h-[30vh]">
              <Stepper initialStep={1}>
                <Step>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-platinum-500">
                      Select your role
                    </label>
                    <select
                      value={data.role || ""}
                      onChange={(e) =>
                        setData((prev) => ({ ...prev, role: e.target.value }))
                      }
                      className="w-full rounded-full bg-space_indigo-100 border border-neutral-700 p-3 text-white focus:outline-none focus:ring-2 focus:ring-platinum-500">
                      <option value="" disabled>
                        Choose a role
                      </option>
                      <option value="IMPORTER">IMPORTER</option>
                      <option value="EXPORTER">EXPORTER</option>
                      <option value="BANK">BANK</option>
                      <option value="BROKER">BROKER</option>
                      <option value="CUSTOMS">CUSTOMS</option>
                    </select>
                    {errors.role && (
                      <p className="text-xs text-red-400">{errors.role}</p>
                    )}
                  </div>
                </Step>

                <Step></Step>
                <Step></Step>
                <Step></Step>
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
