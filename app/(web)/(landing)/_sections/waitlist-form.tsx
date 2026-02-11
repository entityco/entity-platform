"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowRight, Loader2, CheckCircle2, Sparkles, Users, Zap } from "lucide-react";
import { toast } from "sonner";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      toast.error("Enter a valid email.");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error("");
      setDone(true);
      toast.success("You're on the list.");
    } catch {
      toast.error("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="waitlist" className="relative bg-nav-black py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-nav-black via-nav-black to-nav-cream/5" />

      <div className="relative mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-gradient-to-r from-nav-orange/20 via-nav-lime/20 to-nav-blue/20 rounded-3xl blur-xl" />

          <div className="relative bg-[#0a0a0a] rounded-2xl border border-white/10 p-8 md:p-12 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-nav-lime/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

            <div className="relative z-10 text-center mb-10">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 bg-nav-lime/10 border border-nav-lime/30 px-4 py-1.5 rounded-full mb-6"
              >
                <Sparkles className="w-4 h-4 text-nav-lime" />
                <span className="text-sm font-medium text-nav-lime">Early Access</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-6xl font-black text-white mb-4"
              >
                Join the <span className="text-nav-lime">Future</span>
              </motion.h2>

              <p className="text-lg text-neutral-400 max-w-xl mx-auto">
                Be among the first to experience AI-powered decision making for your startup.
              </p>
            </div>

            <AnimatePresence mode="wait">
              {done ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="flex flex-col items-center gap-4 py-8"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                    className="w-20 h-20 bg-nav-lime rounded-full flex items-center justify-center"
                  >
                    <CheckCircle2 className="w-10 h-10 text-black" />
                  </motion.div>
                  <p className="text-xl font-semibold text-white">You're on the list!</p>
                  <p className="text-neutral-500">We'll be in touch soon.</p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
                >
                  <div className="flex-1 relative">
                    <Input
                      type="email"
                      placeholder="you@startup.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="h-14 bg-white/5 border-white/10 rounded-xl text-white placeholder:text-neutral-500 focus:border-nav-lime focus:ring-nav-lime/20"
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={loading}
                    className="h-14 px-8 bg-nav-lime hover:bg-nav-lime/90 text-black font-bold rounded-xl transition-all hover:scale-105"
                  >
                    {loading ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      <>
                        Join
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </Button>
                </motion.form>
              )}
            </AnimatePresence>

            <div className="relative z-10 flex flex-wrap items-center justify-center gap-8 mt-10 pt-8">
              
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
