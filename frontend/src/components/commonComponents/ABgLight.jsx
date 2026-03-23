import ColorBends from "@/components/shadcnComponents/ColorBends";

const ABgLight = () => {
  return (
    <div className="absolute">
      <div style={{ width: "100vw", height: "100vh", position: "relative" }}>
        <ColorBends
          rotation={45}
          speed={0.2}
          colors={["#210052", "#70a7ff", "#2d17d9", "#b602f7", "#008bf5"]}
          transparent
          autoRotate={1}
          scale={0.5}
          frequency={2.5}
          warpStrength={1}
          mouseInfluence={1.3}
          parallax={1.4}
          noise={0.5}
        />
      </div>
    </div>
  );
};

export default ABgLight;
