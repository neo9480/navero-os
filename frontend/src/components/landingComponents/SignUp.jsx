import { useState } from "react";
import ABgLight from "../commonComponents/ABgLight";
import Stepper, { Step } from "../shadcnComponents/Stepper";
import { ChevronDown, Ship } from "lucide-react";
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
import Plans from "./Plans";

const SignUp = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const [formData, setFormData] = useState({
    role: "",
    companyName: "",
    phone: "",
    address: "",
    email: "",
    password: "",
    confirmPassword: "",
    plan: null,
    paymentStatus: "UNPAID",
  });

  const updateField = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  /* ---------------- VALIDATION ---------------- */

  const validateStep = (step) => {
    switch (step) {
      case 1:
        return !!formData.role;

      case 2:
        return formData.companyName && formData.phone && formData.address;

      case 3:
        return (
          formData.email &&
          formData.password &&
          formData.password === formData.confirmPassword
        );

      default:
        return true;
    }
  };

  const handleStepChange = (nextStep) => {
    if (nextStep > currentStep) {
      if (!validateStep(currentStep)) return;
    }
    setCurrentStep(nextStep);
  };

  const handleFinalSubmit = () => {
    console.log("FINAL SIGNUP DATA:", formData);
  };

  /* ---------------- UI ---------------- */

  return (
    <div className="h-screen w-screen flex justify-center items-center bg-platinum-600">
      <ABgLight />

      <div className="flex justify-center items-center h-[90vh] w-[95vw] rounded-4xl border-[1vh] border-space_indigo-200 backdrop-blur-xl z-10">
        <div className="h-[95vh] w-[80vw] flex flex-col justify-between items-center p-[1vw] bg-space_indigo-200 rounded-4xl">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Ship />
            <img src="./imgs/dark-navero-removebg.png" className="w-[7vw]" />
          </div>

          <div className="text-center">
            <h1 className="text-4xl font-extrabold">WELCOME</h1>
            <p>Create your account</p>
          </div>

          <div className="h-[55vh] w-full">
            <Stepper
              currentStep={currentStep}
              onStepChange={handleStepChange}
              onFinalStepCompleted={handleFinalSubmit}>
              {/* STEP 1 ROLE */}
              <Step>
                <label>Select your role</label>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="rounded-full">
                      {formData.role || "Choose a role"}
                      <ChevronDown className="ml-2 size-4" />
                    </Button>
                  </DropdownMenuTrigger>

                  <DropdownMenuContent>
                    <DropdownMenuGroup>
                      <DropdownMenuLabel>Role</DropdownMenuLabel>
                      <DropdownMenuRadioGroup
                        value={formData.role}
                        onValueChange={(v) => updateField("role", v)}>
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
              </Step>

              {/* STEP 2 COMPANY */}
              <Step>
                <input
                  placeholder="Company Name"
                  value={formData.companyName}
                  onChange={(e) => updateField("companyName", e.target.value)}
                />
                <input
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={(e) => updateField("phone", e.target.value)}
                />
                <textarea
                  placeholder="Address"
                  value={formData.address}
                  onChange={(e) => updateField("address", e.target.value)}
                />
              </Step>

              {/* STEP 3 AUTH */}
              <Step>
                <input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => updateField("email", e.target.value)}
                />
                <input
                  type="password"
                  placeholder="Password"
                  onChange={(e) => updateField("password", e.target.value)}
                />
                <input
                  type="password"
                  placeholder="Confirm Password"
                  onChange={(e) =>
                    updateField("confirmPassword", e.target.value)
                  }
                />
              </Step>

              {/* STEP 4 PLANS */}
              <Step>
                <Plans
                  role={formData.role}
                  onPlanSelected={({ planId }) => {
                    updateField("plan", planId);
                    updateField("paymentStatus", "PAID");
                    setCurrentStep(5);
                  }}
                />
              </Step>

              {/* STEP 5 SUMMARY */}
              <Step>
                <div className="space-y-2">
                  <h2 className="text-xl font-bold">Summary</h2>

                  <p>Role: {formData.role}</p>
                  <p>Company: {formData.companyName}</p>
                  <p>Email: {formData.email}</p>
                  <p>Plan: {formData.plan}</p>

                  <p
                    className={
                      formData.paymentStatus === "PAID" ?
                        "text-green-500 font-bold"
                      : "text-red-500"
                    }>
                    {formData.paymentStatus}
                  </p>
                </div>
              </Step>
            </Stepper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

// need to fix ui
