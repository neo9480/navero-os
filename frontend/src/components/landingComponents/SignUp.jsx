import { useState } from "react";
import ABgLight from "../commonComponents/ABgLight";
import axios from "axios";
import { toast, Toaster } from "sonner";
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
import { Link, useNavigate, useLocation } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const initialStep = location.state?.currentStep ?? 1;
  const initialPlan =
    location.state?.planId ?? location.state?.formData?.plan ?? null;

  // FIX: Removed `paymentStatus` from initialisation entirely.
  // The backend always sets status to TRIALING regardless of what the
  // frontend sends, so storing and displaying paymentStatus was misleading.
  // The summary step now shows the real server-controlled status instead.

  const [currentStep, setCurrentStep] = useState(initialStep);

  const [formData, setFormData] = useState({
    role: location.state?.formData?.role ?? location.state?.role ?? "",
    companyName:
      location.state?.formData?.companyName ??
      location.state?.companyName ??
      "",
    phone: location.state?.formData?.phone ?? location.state?.phone ?? "",
    address: location.state?.formData?.address ?? location.state?.address ?? "",
    email: location.state?.formData?.email ?? location.state?.email ?? "",
    password:
      location.state?.formData?.password ?? location.state?.password ?? "",
    confirmPassword:
      location.state?.formData?.confirmPassword ??
      location.state?.confirmPassword ??
      "",
    plan: initialPlan,
    // FIX: `paymentStatus` removed — it was sent to the backend but
    // intentionally ignored. Keeping it created a false UI indication that
    // the user's payment state was UNPAID/PAID when the DB always stores TRIALING.
  });

  const [errors, setErrors] = useState({});

  /* ------------------------------------------------------------------ */
  /* VALIDATION                                                           */
  /* ------------------------------------------------------------------ */

  const validateEmail = (email) => {
    if (!email) return "Email is required.";
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!re.test(email))
      return "Please enter a valid email (example: abcde@gmail.com).";
    return "";
  };

  const validatePassword = (pw) => {
    if (!pw) return "Password is required.";
    if (pw.length < 8) return "Password must be at least 8 characters.";
    if (!/[A-Z]/.test(pw)) return "Password must include an uppercase letter.";
    if (!/[a-z]/.test(pw)) return "Password must include a lowercase letter.";
    if (!/[0-9]/.test(pw)) return "Password must include a number.";
    if (!/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(pw))
      return "Password must include a special character.";
    return "";
  };

  const validateField = (field, value) => {
    switch (field) {
      case "role":
        return value ? "" : "Please select a role.";
      case "companyName":
        return value ? "" : "Business name is required.";
      case "phone":
        return value ? "" : "Business phone is required.";
      case "address":
        return value ? "" : "Business address is required.";
      case "email":
        return validateEmail(value);
      case "password":
        return validatePassword(value);
      case "confirmPassword":
        if (!value) return "Please confirm your password.";
        if (value !== formData.password) return "Passwords do not match.";
        return "";
      default:
        return "";
    }
  };

  const updateField = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear any previous error for this field as the user types.
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const validateStep = (step) => {
    const newErrors = {};

    if (step === 1) {
      const msg = validateField("role", formData.role);
      if (msg) newErrors.role = msg;
    }

    if (step === 2) {
      ["companyName", "phone", "address"].forEach((f) => {
        const msg = validateField(f, formData[f]);
        if (msg) newErrors[f] = msg;
      });
    }

    if (step === 3) {
      const emailErr = validateField("email", formData.email);
      const passErr = validateField("password", formData.password);
      const confirmErr = validateField(
        "confirmPassword",
        formData.confirmPassword,
      );
      if (emailErr) newErrors.email = emailErr;
      if (passErr) newErrors.password = passErr;
      if (confirmErr) newErrors.confirmPassword = confirmErr;
    }

    setErrors((prev) => ({ ...prev, ...newErrors }));
    return Object.keys(newErrors).length === 0;
  };

  const handleStepChange = (nextStep) => {
    // Only validate when moving forward; going back is always allowed.
    if (nextStep > currentStep) {
      if (!validateStep(currentStep)) return;
    }
    setCurrentStep(nextStep);
  };

  /* ------------------------------------------------------------------ */
  /* SUBMIT                                                               */
  /* ------------------------------------------------------------------ */

  const handleFinalSubmit = async (e) => {
    e?.preventDefault?.();
    try {
      // Register the new user. Note: `paymentStatus` is NOT sent because the
      // backend ignores it and always enforces TRIALING server-side.
      await axios.post(
        "http://localhost:3000/api/auth/register",
        {
          email: formData.email,
          password: formData.password,
          role: formData.role,
          companyName: formData.companyName,
          phone: formData.phone,
          address: formData.address,
          plan: formData.plan,
          // FIX: paymentStatus intentionally omitted — backend controls this.
        },
        { withCredentials: true },
      );

      // Immediately log in the new user to obtain tokens.
      const res = await axios.post(
        "http://localhost:3000/api/auth/login",
        {
          email: formData.email,
          password: formData.password,
        },
        { withCredentials: true },
      );

      const { accessToken, user } = res.data;
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("user", JSON.stringify(user));

      toast.success("Account created and logged in", {
        position: "top-center",
      });

      setTimeout(() => navigate("/dashboard"), 800);
    } catch (err) {
      console.error("signup error:", err);
      if (err.response?.data?.error) {
        toast.error(err.response.data.error, { position: "top-center" });
      } else {
        toast.error("Server error during signup", { position: "top-center" });
      }
    }
  };

  /* ------------------------------------------------------------------ */
  /* RENDER                                                               */
  /* ------------------------------------------------------------------ */

  return (
    <div className="h-screen w-screen flex justify-center items-center bg-platinum-600 font-neue_montreal text-platinum-500">
      <ABgLight />
      <Toaster theme="dark" />

      <div className="flex justify-center items-center h-[90vh] w-[95vw] rounded-4xl border-[1vh] z-10 border-space_indigo-200 backdrop-blur-xl">
        <div className="h-[95vh] w-[80vw] flex flex-col justify-between items-center p-[1vw] bg-space_indigo-200 rounded-4xl">
          {/* Logo */}
          <div className="flex justify-center items-center gap-[1vw] w-[12vw]">
            <Ship />
            <img
              src="./imgs/dark-navero-removebg.png"
              alt="Navero"
              className="w-[7vw]"
            />
          </div>

          {/* Header */}
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-4xl font-extrabold">WELCOME</h1>
            <p>Fill out the details to create an account</p>
          </div>

          {/* Stepper */}
          <div className="h-[55vh]">
            <Stepper
              currentStep={currentStep}
              onStepChange={handleStepChange}
              onFinalStepCompleted={handleFinalSubmit}
              onReset={() => {
                setFormData({
                  role: "",
                  companyName: "",
                  phone: "",
                  address: "",
                  email: "",
                  password: "",
                  confirmPassword: "",
                  plan: null,
                  // FIX: paymentStatus removed from reset state too.
                });
                setErrors({});
                setCurrentStep(1);
              }}>
              {/* -------- STEP 1 — ROLE -------- */}
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
                        {formData.role || "Choose a role"}
                        <ChevronDown className="size-4 opacity-60" />
                      </Button>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent className="bg-space_indigo-100 text-platinum-600">
                      <DropdownMenuGroup>
                        <DropdownMenuLabel>Role</DropdownMenuLabel>

                        <DropdownMenuRadioGroup
                          value={formData.role}
                          onValueChange={(val) => updateField("role", val)}>
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

                  {errors.role && (
                    <p className="text-red-500 text-sm mt-1">{errors.role}</p>
                  )}
                </div>
              </Step>

              {/* -------- STEP 2 — COMPANY DETAILS -------- */}
              <Step>
                <form>
                  <p>Business Name</p>
                  <input
                    type="text"
                    value={formData.companyName}
                    onChange={(e) => updateField("companyName", e.target.value)}
                    onBlur={() => {
                      const msg = validateField(
                        "companyName",
                        formData.companyName,
                      );
                      setErrors((p) => ({ ...p, companyName: msg }));
                    }}
                    className="w-full h-[5vh] p-[1vw] bg-lavender_grey-200 rounded-full"
                  />
                  {errors.companyName && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.companyName}
                    </p>
                  )}

                  <p>Business Phone</p>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => updateField("phone", e.target.value)}
                    onBlur={() => {
                      const msg = validateField("phone", formData.phone);
                      setErrors((p) => ({ ...p, phone: msg }));
                    }}
                    className="w-full h-[5vh] p-[1vw] bg-lavender_grey-200 rounded-full"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                  )}

                  <p>Business Address</p>
                  <textarea
                    value={formData.address}
                    onChange={(e) => updateField("address", e.target.value)}
                    onBlur={() => {
                      const msg = validateField("address", formData.address);
                      setErrors((p) => ({ ...p, address: msg }));
                    }}
                    className="w-full h-[8vh] p-[1vw] bg-lavender_grey-200 rounded-full"
                  />
                  {errors.address && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.address}
                    </p>
                  )}
                </form>
              </Step>

              {/* -------- STEP 3 — AUTH CREDENTIALS -------- */}
              <Step>
                <form>
                  <p>Business Email</p>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => updateField("email", e.target.value)}
                    onBlur={() => {
                      const msg = validateField("email", formData.email);
                      setErrors((p) => ({ ...p, email: msg }));
                    }}
                    className="w-full h-[5vh] p-[1vw] bg-lavender_grey-200 rounded-full"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}

                  <p>Password</p>
                  <input
                    type="password"
                    value={formData.password}
                    onChange={(e) => updateField("password", e.target.value)}
                    onBlur={() => {
                      const msg = validateField("password", formData.password);
                      setErrors((p) => ({ ...p, password: msg }));
                    }}
                    className="w-full h-[5vh] p-[1vw] bg-lavender_grey-200 rounded-full"
                  />
                  {errors.password && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.password}
                    </p>
                  )}

                  <p>Confirm Password</p>
                  <input
                    type="password"
                    value={formData.confirmPassword}
                    onChange={(e) =>
                      updateField("confirmPassword", e.target.value)
                    }
                    onBlur={() => {
                      const msg = validateField(
                        "confirmPassword",
                        formData.confirmPassword,
                      );
                      setErrors((p) => ({ ...p, confirmPassword: msg }));
                    }}
                    className="w-full h-[5vh] p-[1vw] bg-lavender_grey-200 rounded-full"
                  />
                  {errors.confirmPassword && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.confirmPassword}
                    </p>
                  )}
                </form>
              </Step>

              {/* -------- STEP 4 — PLANS -------- */}
              <Step>
                {/* FIX: Button label was "Choose Your Role" — corrected to "Choose Your Plan". */}
                <button
                  onClick={() =>
                    navigate("/sign-up/plans", {
                      state: { formData },
                    })
                  }
                  className="rounded-full p-[1.5vh] cursor-pointer bg-platinum-600 text-space_indigo-100 hover:bg-space_indigo-100 hover:text-platinum-600 transition">
                  Choose Your Plan
                </button>
              </Step>

              {/* -------- STEP 5 — SUMMARY -------- */}
              <Step>
                <div className="space-y-2">
                  <h2 className="text-xl font-bold">Summary</h2>

                  <p>
                    <strong>Role:</strong> {formData.role}
                  </p>
                  <p>
                    <strong>Company:</strong> {formData.companyName}
                  </p>
                  <p>
                    <strong>Phone no.:</strong> {formData.phone}
                  </p>
                  <p>
                    <strong>Address:</strong> {formData.address}
                  </p>
                  <p>
                    <strong>Email:</strong> {formData.email}
                  </p>
                  <p>
                    <strong>Plan:</strong> {formData.plan ?? "Free Trial"}
                  </p>

                  {/*
                    FIX: Previously showed `formData.paymentStatus` which was
                    always "UNPAID" — a frontend-only value the backend never
                    uses. The DB always stores "TRIALING" after registration.
                    Now we display the actual server-enforced status so users
                    have accurate expectations before submitting.
                  */}
                  <p className="font-bold text-yellow-400">
                    Subscription Status: TRIALING
                  </p>
                </div>
              </Step>
            </Stepper>
          </div>

          {/* Footer */}
          <div>
            <p className="text-lavender_grey-600">
              Already have an account?{" "}
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
