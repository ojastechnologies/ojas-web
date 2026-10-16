"use client";
import { motion } from "framer-motion";

// Re-mounts on every navigation, giving each route a soft fade-in.
// Opacity only: a transform or filter here would break the fixed navbar.
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.45, ease: "easeOut" }}>
      {children}
    </motion.div>
  );
}
