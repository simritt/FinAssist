import { motion } from "framer-motion";
import Logo from "../ui/Logo";

export default function LoadingScreen() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-surface-subtle dark:bg-surface-dark">
      <motion.div
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
      >
        <Logo size="lg" showText={false} />
      </motion.div>
    </div>
  );
}
