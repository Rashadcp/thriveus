"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function RouteTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div key={pathname} className="relative w-full">
        {/* Content fade without persistent CSS transform so position:sticky works reliably */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] as const }}
        >
          {children}
        </motion.div>

        {/* Deep navy transition curtain */}
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 1 }}
          transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] as const }}
          style={{ originY: 1 }}
          className="pointer-events-none fixed inset-0 z-[9990] bg-navy-950"
        />
        <motion.div
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 0 }}
          transition={{ duration: 0.45, ease: [0.76, 0, 0.24, 1] as const, delay: 0.1 }}
          style={{ originY: 0 }}
          className="pointer-events-none fixed inset-0 z-[9990] bg-navy-900"
        />
      </motion.div>
    </AnimatePresence>
  );
}
