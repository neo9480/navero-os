import InputOTPOutlined from "@/components/shadcn-studio/input/InputOtpOutlined";
import { useEffect, useState } from "react";
import AnimBtn from "@/components/commonComponents/AnimBtn";
import InputReadOnly from "@/components/shadcn-studio/input/InputReadOnly";
import ABgDark from "@/components/commonComponents/ABgDark";
import { useLocation } from "react-router-dom";
import InputStartIcon from "../shadcn-studio/input/InputStartIcon";
import { Mail } from "lucide-react";

const VerifyEmail = () => {
  const [ timeLeft, setTimeLeft ] = useState( 30 );
  const [ otpSent, setOtpSent ] = useState( false )
  const [manualEmail, setManualEmail] = useState("")

  const location = useLocation()
  const email = location.state?.email ?? null

  const isEmailProvided = email !== null

  useEffect( () => {
    if ( isEmailProvided ) {
      setOtpSent(true)
    }
  }, [isEmailProvided])

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

  const handleResend = () => {
    setTimeLeft(60);
  };

  const handleSendCode = () => {
    if ( !manualEmail.trim() ) return
    setOtpSent( true )
    setTimeLeft( 30 )
    // Call send-code API
  }

  const handleVerify = () => {
    
  }

  return (
    <div className="text-platinum-600 h-screen w-full flex justify-center items-center font-host_grotesk ">
      <ABgDark />
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
            ctaText={"Send OTP"}
            hoverColor={"bg-space_indigo-100/50"}
            onClick={handleSendCode}
            className={" w-[20vw] justify-center items-center border  "}
            font={"font-host_grotesk"}
            fontWeight={"font-extrabold"}
          />
        )}

        {otpSent && (
          <>
            <InputOTPOutlined />
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
              ctaText={"Verify"}
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
