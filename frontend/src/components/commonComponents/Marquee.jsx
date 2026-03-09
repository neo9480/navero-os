const Marquee = (props) => {
  const marqueeText = [];

  function toArray(e, times) {
    marqueeText.push(...Array(times).fill(e));
  }
  toArray(`${props.text}`, 3);

  return (
    <div
      className={`marquee h-[17vh] bg-flag_red-500 flex overflow-hidden ${props.css} cursor-default`}>
      <div className="flex h-full w-full flex-col justify-between py-[2vh]">
        <div className="h-[0.2vh] w-full bg-platinum-500 pt-1"></div>
        <div className="flex w-full">
          <div className="marquee-scroll font-host_grotesk font-extrabold text-[4vw] flex flex-row items-center justify-center">
            {marqueeText.map((item, index) => (
              <div
                className="w-[50vw] h-full flex items-center text-platinum-500 gap-[3vw] leading-0 shrink-0"
                key={index}>
                {item}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#edf2f4"
                  stroke="#edf2f4"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-sparkle-icon lucide-sparkle shrink-0">
                  <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z" />
                </svg>
              </div>
            ))}
          </div>
          <div className="marquee-scroll font-host_grotesk font-extrabold text-[4vw] flex flex-row items-center justify-center">
            {marqueeText.map((item, index) => (
              <div
                className="w-[50vw] h-full flex items-center text-platinum-500 gap-[3vw] leading-0 shrink-0"
                key={index}>
                {item}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#edf2f4"
                  stroke="#edf2f4"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-sparkle-icon lucide-sparkle shrink-0">
                  <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z" />
                </svg>
              </div>
            ))}
          </div>
        </div>
        <div className="h-[0.2vh] w-full bg-platinum-500 pt-1"></div>
      </div>
    </div>
  );
};

export default Marquee;
