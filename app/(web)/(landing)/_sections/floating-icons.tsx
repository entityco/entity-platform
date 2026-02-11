"use client";

import { motion } from "framer-motion";
import { Brain, Target, Users, BarChart3 } from "lucide-react";
import { useEffect, useState } from "react";

const icons = [
  { id: "brain", icon: Brain, color: "bg-nav-blue", label: "AI Agents" },
  { id: "target", icon: Target, color: "bg-nav-orange", label: "Decisions" },
  { id: "users", icon: Users, color: "bg-nav-lime", label: "Team Sync" },
  { id: "chart", icon: BarChart3, color: "bg-nav-yellow", label: "Analytics" },
];

export default function FloatingIcons() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <motion.div
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-30"
      initial={{ y: 0, opacity: 1 }}
      animate={{ y: 100, opacity: 0 }}
      transition={{ duration: 0.8, delay: 5, ease: "easeIn" }}
    >
      <div className="flex gap-3 md:gap-5">
        {icons.map((item) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.id}
              className={`
                ${item.color}
                w-10 h-10 md:w-14 md:h-14
                flex items-center justify-center
                rounded-xl md:rounded-2xl
                shadow-lg
              `}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Icon size={20} strokeWidth={1.5} className="text-black md:hidden" />
              <Icon size={28} strokeWidth={1.5} className="text-black hidden md:block" />
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
