import GradientBlinds from "../shadcnComponents/GradientBlinds";

const GradBlindBg = () => {
  return (
    <div style={{ width: "100vw", height: "100vh", position: "relative" }}>
      <GradientBlinds
        gradientColors={["#5024ff", "#ff0000"]}
        angle={0}
        noise={0.3}
        blindCount={16}
        blindMinWidth={60}
        mouseDampening={0.15}
        mirrorGradient={false}
        spotlightRadius={0.2}
        spotlightSoftness={0.6}
        spotlightOpacity={0.2}
        distortAmount={0}
        shineDirection="left"
      />
    </div>
  );
};

export default GradBlindBg;
