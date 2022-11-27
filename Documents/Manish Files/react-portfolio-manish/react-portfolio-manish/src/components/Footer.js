import React from "react";
import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <motion.footer
      className="footer text-white p-3 text-center mt-3"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 2 }}
    >
      Design and Built by Manish Khadgi Copyright &copy; 2022
    </motion.footer>
  );
};
