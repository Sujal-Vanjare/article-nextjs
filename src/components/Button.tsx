import { motion } from "framer-motion";

export default function Button({ isActive, setIsActive }: any) {
  return (
    <div
      onClick={() => {
        setIsActive(!isActive);
      }}
      className="absolute top-0 right-0 w-24 h-10 overflow-hidden rounded-md cursor-pointer"
    >
      <motion.div
        className="w-full h-full relative"
        animate={{ top: isActive ? "-100%" : "0" }}
        transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
      >
        {/* button start */}
        <div className="w-full h-full bg-[#c9fd74] flex items-center justify-center uppercase">
          <p>Menu</p>
        </div>

        <div className="absolute top-full w-full h-full bg-black text-white flex items-center justify-center uppercase">
          <p>Close</p>
        </div>
        {/* button end */}
      </motion.div>
    </div>
  );
}
