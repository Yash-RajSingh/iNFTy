import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const containerVariant = {
  visible: { opacity: 1, x: "0%", transition: { duration: 1 } },
  hidden: { opacity: 0, x: "-100%" },
};

const Container = ({ componentToPassDown }) => {
  const control = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);
  return (
    <motion.div
      className="container"
      ref={ref}
      variants={containerVariant}
      initial="hidden"
      animate={control}
    >
      {componentToPassDown}
    </motion.div>
  );
};

export default Container;
