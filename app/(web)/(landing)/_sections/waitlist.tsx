"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2, CheckCircle2, ArrowRight } from "lucide-react";
import { toast } from "sonner";

export default function Waitlist() {
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
      const res = await fetch("/api/waitlist", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email }) });
      if (!res.ok) throw new Error("");
      setDone(true);
      toast.success("You're on the list!");
    } catch {
      toast.error("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="waitlist" className="bg-nav-cream py-32">
      <div className="mx-auto max-w-2xl px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl bg-nav-black p-10 text-center md:p-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-black tracking-tight text-white md:text-5xl">
              JOIN THE WAITLIST
            </h2>
            <p className="mt-4 font-mono text-neutral-400">
              Be the first to experience Entity. Limited spots available.
            </p>
          </motion.div>

          {done ? (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="mt-10 flex items-center justify-center gap-3 text-xl text-nav-lime"
            >
              <CheckCircle2 className="size-8" />
              <span className="font-bold">You're on the list!</span>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Input
                type="email"
                placeholder="you@startup.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-14 flex-1 rounded-xl border-white/10 bg-white/5 px-5 font-mono text-white placeholder:text-neutral-600 focus:border-nav-lime focus:outline-none"
              />
              <Button
                type="submit"
                disabled={loading}
                className="h-14 rounded-xl bg-nav-lime px-8 font-bold text-black hover:bg-nav-lime/90 disabled:opacity-50"
              >
                {loading ? <Loader2 className="size-5 animate-spin" /> : (
                  <>
                    Request Access <ArrowRight className="ml-2 size-4" />
                  </>
                )}
              </Button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
