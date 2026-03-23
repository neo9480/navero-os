import {
  animate,
  motion as Motion,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const EASE = [0.76, 0, 0.24, 1];
const DURATION = 0.55;

const AnimBtn = ({
  ctaText,
  font,
  fontWeight,
  to,
  bgColor,
  hoverColor,
  textColor,
  className,
  showArrow,
  onClick,
}) => {
  // ── Two independent Y positions ──────────────────────────────
  const darkY = useMotionValue("100%"); // dark layer  (enters bottom → exits top)
  const lightY = useMotionValue("100%"); // light layer (rises bottom on leave to restore bg)

  // ── Icon driven off a separate 0→1 value ─────────────────────
  const hovered = useMotionValue(0);
  const iconScale = useTransform(hovered, [0, 1], [0.2, 1]);
  const iconOpacity = useTransform(hovered, [0, 1], [0, 1]);
  const dotScale = useTransform(hovered, [0, 1], [0.2, 1]);

  // ── Enter: dark rises from bottom, light resets below ────────
  function onEnter() {
    animate(darkY, "0%", { duration: DURATION, ease: EASE });
    animate(lightY, "100%", { duration: 0 }); // instant reset so it's ready for leave
    animate(hovered, 1, { duration: DURATION, ease: EASE });
  }

  // ── Leave: dark exits from top, light rises from bottom ──────
  function onLeave() {
    animate(darkY, "-100%", { duration: DURATION, ease: EASE }).then(() => {
      darkY.set("100%"); // silently reset below for next hover
    });
    animate(lightY, "0%", { duration: DURATION, ease: EASE }).then(() => {
      lightY.set("100%"); // once light covers fully, reset it (bg shows through)
    });
    animate(hovered, 0, { duration: DURATION, ease: EASE });
  }

  return (
    <button onClick={onClick}>
      <Link to={to}>
        <Motion.div
          onMouseEnter={onEnter}
          onMouseLeave={onLeave}
          className={`relative inline-flex items-center gap-[2vw] px-[1.5vw] py-3 rounded-full ${bgColor}  ${textColor} ${font} font-medium overflow-hidden ${className}`}>
          {/* ── 1. Dark wipe — enters bottom, exits top ── */}
          <Motion.div
            aria-hidden
            className={`absolute bottom-0 -left-[20%] w-[140%] h-[140%] ${hoverColor} -mb-3 origin-center pointer-events-none`}
            style={{
              borderRadius: "50%",
              y: darkY,
            }}
          />

          {/* ── 2. Light wipe — rises bottom on leave to restore bg ── */}
          <Motion.div
            aria-hidden
            className="absolute bottom-0 -left-[20%] w-[140%] h-[140%] bg-transparent pointer-events-none"
            style={{
              y: lightY,
              zIndex: 1,
            }}
          />

          {/* ── Text ── */}
          <span className={`relative z-10 ${fontWeight}`}>{ctaText}</span>

          {/* ── Circle with arrow ── */}
          {showArrow && (
            <Motion.div
              style={{ scale: dotScale }}
              className="relative z-10 bg-platinum-500 w-[2.5vw] h-[2.5vw] rounded-full flex items-center justify-center origin-center">
              <Motion.div style={{ opacity: iconOpacity, scale: iconScale }}>
                <ArrowUpRight size={20} className="text-space_indigo-100" />
              </Motion.div>
            </Motion.div>
          )}
        </Motion.div>
      </Link>
    </button>
  );
};

export default AnimBtn;
