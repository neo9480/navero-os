import { useState } from "react";
import ABgLight from "@/components/commonComponents/ABgLight";
import { toast, Toaster } from "sonner";
import Stepper, { Step } from "@/components/shadcnComponents/Stepper";
import { Eye, EyeClosed, LockKeyhole, LockKeyholeOpen, Mail, Ship, User } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import useAuthStore from "@/store/authStore.js";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { InputPhone } from "@/components/shadcn-studio/input/InputPhone";
import InputStartIcon from "@/components/shadcn-studio/input/InputStartIcon";
import InputOverlappingLabel from "@/components/shadcn-studio/input/InputOverlapLabel";
import AnimBtn from "../commonComponents/AnimBtn";

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
    role: location.state?.formData?.role ?? location.state?.role ?? undefined,
    companyName:
      location.state?.formData?.companyName ??
      location.state?.companyName ??
      undefined,
    phone:
      location.state?.formData?.phone ?? location.state?.phone ?? undefined,
    addressLine:
      location.state?.formData?.addressLine ??
      location.state?.addressLine ??
      undefined,
    city: location.state?.formData?.city ?? location.state?.city ?? undefined,
    State:
      location.state?.formData?.State ?? location.state?.State ?? undefined,
    country:
      location.state?.formData?.country ?? location.state?.country ?? undefined,
    email:
      location.state?.formData?.email ?? location.state?.email ?? undefined,
    password:
      location.state?.formData?.password ??
      location.state?.password ??
      undefined,
    confirmPassword:
      location.state?.formData?.confirmPassword ??
      location.state?.confirmPassword ??
      undefined,
    plan: initialPlan,
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { signUp } = useAuthStore();

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
      case "addressLine":
        return value ? "" : "Office / street / area is required.";
      case "city":
        return value ? "" : "City is required.";
      case "state":
        return value ? "" : "State is required.";
      case "country":
        return value ? "" : "Country is required.";
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
      [
        "companyName",
        "phone",
        "addressLine",
        "city",
        "State",
        "country",
      ].forEach((f) => {
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

  const buildAddress = ({ addressLine, city, State, country }) =>
    [addressLine, city, State, country].join(", ");

  const address = buildAddress(formData);

  const handleSignUp = async (e) => {
    e?.preventDefault?.();
    const missingFields = ["addressLine", "city", "State", "country"].filter(
      (f) => !formData[f],
    );

    if (missingFields.length > 0) {
      toast.error(`Missing address fields: ${missingFields.join(", ")}`, {
        position: "top-center",
      });
      return;
    }
    try {
      // Register the new user. Note: `paymentStatus` is NOT sent because the
      // backend ignores it and always enforces TRIALING server-side.
      await signUp(
        formData.email,
        formData.password,
        formData.role,
        formData.companyName,
        formData.phone,
        address,
        formData.country,
        formData.plan,
      );
      toast.success("OTP is sent to your email", {
        position: "top-center",
      });
      setTimeout(
        () => navigate("/sign-up/verify-email", { state: { email: formData.email, password: formData.confirmPassword },  }),
        800,
      );
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
    <div className="h-screen w-screen flex justify-center items-center bg-platinum-600 font-neue_montreal ">
      <ABgLight />
      <Toaster theme="dark" />

      <div className="h-[95vh] border border-platinum-200 z-10  w-[80vw] flex flex-col justify-between items-center p-[1vw] shadow-inner backdrop-blur-3xl rounded-4xl ">
        {/* Logo */}
        <Link to={"/"}>
          <div className="flex justify-center items-center gap-[1vw] w-[12vw]">
            <Ship />
            <img
              src="./imgs/light-navero-removebg.png"
              alt="Navero"
              className="w-[7vw]"
            />
          </div>
        </Link>

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
            onFinalStepCompleted={handleSignUp}
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
                <label className="text-sm font-medium text-space_indigo-300">
                  Select your role
                </label>

                <Select
                  value={formData.role}
                  onValueChange={( val ) => updateField( "role", val )}
                  >
                  <SelectTrigger className="w-full max-w-48">
                    <SelectValue placeholder="Select Your Role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Roles</SelectLabel>
                      <SelectItem value="IMPORTER">Importer</SelectItem>
                      <SelectItem value="EXPORTER">Exporter</SelectItem>
                      <SelectItem value="LOGISTICS_PROVIDER">
                        Logistics
                      </SelectItem>
                      <SelectItem value="BANK">Bank</SelectItem>
                      <SelectItem value="BROKER">Broker</SelectItem>
                      <SelectItem value="CUSTOMS">Customs</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>

                {errors.role && (
                  <p className="text-red-500 text-sm mt-1">{errors.role}</p>
                )}
              </div>
            </Step>

            {/* -------- STEP 2 — COMPANY DETAILS -------- */}
            <Step>
              <form>
                <p>Business Name</p>
                <InputStartIcon
                  icon={User}
                  value={formData.companyName}
                  onChange={(e) => updateField("companyName", e.target.value)}
                  type={"text"}
                  placeholder={"Enter your company name"}
                  onBlur={() => {
                    const msg = validateField(
                      "companyName",
                      formData.companyName,
                    );
                    setErrors((p) => ({ ...p, companyName: msg }));
                  }}
                />
                {errors.companyName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.companyName}
                  </p>
                )}

                <p>Business Phone</p>
                <InputPhone
                  value={formData.phone}
                  onChange={(value) => updateField("phone", value)}
                  onBlur={() => {
                    const msg = validateField("phone", formData.phone);
                    setErrors((p) => ({ ...p, phone: msg }));
                  }}
                  placeholder="Enter your phone number"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                )}
                <p>Business Address</p>
                <div className="flex flex-col justify-center items-center gap-[1vw] mt-2">
                  <InputOverlappingLabel
                    label={"Ofice, Street Name, Area"}
                    value={formData.addressLine}
                    onChange={(e) => updateField("addressLine", e.target.value)}
                    onBlur={() =>
                      setErrors((p) => ({
                        ...p,
                        addressLine: validateField(
                          "addressLine",
                          formData.addressLine,
                        ),
                      }))
                    }
                  />
                  <div className="flex justify-center items-center gap-[0.5vw]">
                    <InputOverlappingLabel
                      label={"City"}
                      value={formData.city}
                      onChange={(e) => updateField("city", e.target.value)}
                      onBlur={() =>
                        setErrors((p) => ({
                          ...p,
                          addressLine: validateField("city", formData.city),
                        }))
                      }
                    />
                    <InputOverlappingLabel
                      label={"State"}
                      value={formData.State}
                      onChange={(e) => updateField("State", e.target.value)}
                      onBlur={() =>
                        setErrors((p) => ({
                          ...p,
                          addressLine: validateField("State", formData.State),
                        }))
                      }
                    />
                  </div>
                  <InputOverlappingLabel
                    label={"Country"}
                    value={formData.country}
                    onChange={(e) => updateField("country", e.target.value)}
                    onBlur={() =>
                      setErrors((p) => ({
                        ...p,
                        addressLine: validateField("country", formData.country),
                      }))
                    }
                  />
                </div>

                {errors.addressLine ||
                  errors.city ||
                  errors.State ||
                  (errors.country && (
                    <p className="text-red-500 text-sm mt-1">
                      All the fields for address are required.
                    </p>
                  ))}
              </form>
            </Step>

            {/* -------- STEP 3 — AUTH CREDENTIALS -------- */}
            <Step>
              <form>
                <p>Business Email</p>
                <InputStartIcon
                  icon={Mail}
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
                <div className="relative w-full">
                  <InputStartIcon
                    icon={showPassword ? LockKeyholeOpen : LockKeyhole}
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={(e) => updateField("password", e.target.value)}
                    onBlur={() => {
                      const msg = validateField("password", formData.password);
                      setErrors((p) => ({ ...p, password: msg }));
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute right-[1vw] top-1/2 -translate-y-1/2 text-lavender_grey-500 hover:text-platinum-600 transition">
                    {showPassword ?
                      <Eye className="size-4" />
                    : <EyeClosed className="size-4" />}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                )}

                <p>Confirm Password</p>
                <div className="relative w-full">
                  <InputStartIcon
                    icon={showConfirmPassword ? LockKeyholeOpen : LockKeyhole}
                    type={showConfirmPassword ? "text" : "password"}
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
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword((prev) => !prev)}
                    className="absolute right-[1vw] top-1/2 -translate-y-1/2 text-lavender_grey-500 hover:text-platinum-600 transition">
                    {showConfirmPassword ?
                      <Eye className="size-4" />
                    : <EyeClosed className="size-4" />}
                  </button>
                </div>
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
              <AnimBtn
                ctaText={"Choose your plan"}
                hoverColor={"bg-space_indigo-100"}
                onClick={() =>
                  navigate("/sign-up/plans", {
                    state: { formData },
                  })
                }
                className="rounded-full p-[1.5vh] cursor-pointer text-space_indigo-100 hover:bg-space_indigo-100 hover:text-platinum-500 shadow border border-lavender_grey-700 transform"
              />
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
                  <strong>Email:</strong> {formData.email}
                </p>
                <p>
                  <strong>Phone no.:</strong> {formData.phone}
                </p>
                <p>
                  <strong>Address:</strong> {address}
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
          <p className="text-space_indigo-500">
            Already have an account?{" "}
            <Link
              to={"/sign-in"}
              className="text-lavender_grey-200 font-extrabold">
              Sign In
            </Link>
          </p>
        </div>
      </div>
      {console.log(formData.State)}
    </div>
  );
};

export default SignUp;
