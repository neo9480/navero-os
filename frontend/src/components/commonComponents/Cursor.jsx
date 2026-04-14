import {motion as Motion} from "framer-motion"

function Cursor() {
  return (
    <Motion.div
      className="cursor h-5 w-5 fixed bg-violet-400 rounded-full mix-blend-difference z-999999999 transition duration-500 ease-in-out pointer-events-none origin-center"></Motion.div>
  );
}

export default Cursor