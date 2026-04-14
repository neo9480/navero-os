import InputOTPOutlined from "@/components/shadcn-studio/input/InputOtpOutlined";
import { useEffect, useState } from "react";
import AnimBtn from "@/components/commonComponents/AnimBtn";
import InputReadOnly from "@/components/shadcn-studio/input/InputReadOnly";
import ABgDark from "@/components/commonComponents/ABgDark";
import { useLocation, useNavigate } from "react-router-dom";
import InputStartIcon from "../shadcn-studio/input/InputStartIcon";
import { Mail } from "lucide-react";
import useAuthStore from "@/store/useAuthStore";
import { toast, Toaster } from "sonner";

const VerifyEmail = () => {
  const [timeLeft, setTimeLeft] = useState(30);
  const [manualOtpSent, setManualOtpSent] = useState(false);
  const [manualEmail, setManualEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [OTP, setOTP] = useState(null);
  const { verifyEmail, sendCode, login } = useAuthStore();
  const navigate = useNavigate();

  const location = useLocation();
  const email = location.state?.email ?? null;
  const password = location.state?.password ?? null;

  const isEmailProvided = email !== null;

  const otpSent = isEmailProvided || manualOtpSent;

  useEffect(() => {
    if (timeLeft > 0 && otpSent) {
      const timer = setTimeout(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [timeLeft, otpSent]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;

    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const handleResend = async () => {
    try {
      await sendCode(email ?? manualEmail);
      setTimeLeft(60);
      toast.success("A new OTP was sent to your email", {
        position: "top-center",
      });
    } catch (err) {
      toast.error(err.response?.data?.error ?? "Failed to resend OTP.", {
        position: "top-center",
      });
    }
  };

  const handleSendCode = async () => {
    if (!manualEmail.trim()) return;
    setLoading(true);
    try {
      await sendCode(manualEmail);
      setManualOtpSent(true);
      setTimeLeft(30);
    } catch (err) {
      toast.error(err.response?.data?.error ?? "Failed to send OTP.", {
        position: "top-center",
      });
    } finally {
      setLoading(false);
    }
    // Call send-code API
  };

  const handleVerify = async () => {
    setLoading(true);
    try {
      await verifyEmail(email ?? manualEmail, OTP);
      toast.success(
        "Verification complete. You will be shortly redirected to your dashbaord.",
        { position: "top-center" },
      );
      await login(email, password);
      navigate("/dashboard");
    } catch (err) {
      console.error("verification error:", err);
      if (err.response?.data?.error) {
        toast.error(err.response.data.error, { position: "top-center" });
      } else {
        toast.error("Server error during verification", {
          position: "top-center",
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="text-platinum-600 h-screen w-full flex justify-center items-center font-host_grotesk ">
      <ABgDark />
      <Toaster />
      <div className="backdrop-blur-2xl rounded-2xl py-[2vw]  w-[25vw] flex flex-col justify-center items-center gap-[1vw] z-10  shadow-inner border border-lavender_grey-100">
        <p className=" font-bold text-2xl">Verify Your Email</p>
        {isEmailProvided ?
          <InputReadOnly
            defaultValue={email}
            className={"read-only:bg-space_indigo-100/50"}
          />
        : <InputStartIcon
            icon={Mail}
            type={"email"}
            placeholder={"Enter your email"}
            value={manualEmail}
            onChange={(e) => setManualEmail(e.target.value)}
            disabled={otpSent}
          />
        }

        {!isEmailProvided && !otpSent && (
          <AnimBtn
            ctaText={loading ? "Sending OTP..." : "Send OTP"}
            hoverColor={"bg-space_indigo-100/50"}
            onClick={handleSendCode}
            className={" w-[20vw] justify-center items-center border  "}
            font={"font-host_grotesk"}
            fontWeight={"font-extrabold"}
          />
        )}

        {otpSent && (
          <>
            <InputOTPOutlined
              value={OTP}
              onChange={(value) => {
                setOTP(value);
              }}
              disabled={loading}
            />
            <p className="text-lavender_grey-500 text-xs cursor-default">
              {timeLeft > 0 ?
                `Sent OTP on email, resend available in ${formatTime(timeLeft)}`
              : <a
                  onClick={(e) => {
                    e.preventDefault();
                    handleResend();
                  }}
                  className="hover:text-platinum-600 underline cursor-pointer">
                  Resend code
                </a>
              }
            </p>
            <AnimBtn
              ctaText={loading ? "Verifying..." : "Verify"}
              hoverColor={"bg-space_indigo-100/50"}
              onClick={handleVerify}
              className={" w-[20vw] justify-center items-center border  "}
              font={"font-host_grotesk"}
              fontWeight={"font-extrabold"}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default VerifyEmail;
