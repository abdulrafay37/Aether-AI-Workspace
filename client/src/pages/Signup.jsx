import { motion } from "framer-motion";
import { ArrowRight, Lock, Mail, Sparkles, User } from "lucide-react";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#070b13] text-white">
      <div className="relative mx-auto flex min-h-screen max-w-[1600px] flex-col overflow-hidden lg:flex-row">
        <div className="relative z-10 flex w-full flex-col items-start justify-center gap-10 px-6 py-16 md:px-12 lg:w-1/2 lg:px-16">
          <div className="rounded-[36px] border border-white/10 bg-[#0b1220]/80 p-8 shadow-[0_40px_120px_rgba(0,0,0,0.35)] backdrop-blur-3xl sm:p-10">
            <div className="flex items-center gap-4">
              <div className="grid h-14 w-14 place-items-center rounded-3xl bg-gradient-to-br from-[#f5c26c] to-[#ffd55f] text-[#0b1220] font-black shadow-[0_20px_40px_rgba(255,209,96,0.2)]">
                AI
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-[#E7C78A]">Aether AI</p>
                <h1 className="text-3xl font-semibold text-white sm:text-4xl">Create your premium account.</h1>
              </div>
            </div>

            <p className="mt-8 max-w-xl text-base leading-7 text-[#c5b08b]">
              Sign up now for an elegant AI experience with the same premium design language as the landing page.
            </p>

            <div className="mt-10 space-y-4">
              <button className="flex w-full items-center justify-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-4 text-sm font-semibold text-white transition hover:border-[#E7C78A]/40 hover:bg-white/10">
                <Sparkles className="h-5 w-5 text-[#E7C78A]" />
                Continue with Google
              </button>

              <div className="rounded-[28px] border border-white/10 bg-[#0b1220]/95 p-5 shadow-[0_20px_50px_rgba(0,0,0,0.25)]">
                <div className="grid gap-4">
                  <label className="flex flex-col gap-2 text-sm text-[#c5b08b]">
                    <span className="font-medium text-white">Full Name</span>
                    <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[#0d141f] px-4 py-3">
                      <User className="h-5 w-5 text-[#E7C78A]" />
                      <input
                        type="text"
                        placeholder="Your full name"
                        className="w-full bg-transparent text-white outline-none placeholder:text-[#7f7f8f]"
                      />
                    </div>
                  </label>

                  <label className="flex flex-col gap-2 text-sm text-[#c5b08b]">
                    <span className="font-medium text-white">Email</span>
                    <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[#0d141f] px-4 py-3">
                      <Mail className="h-5 w-5 text-[#E7C78A]" />
                      <input
                        type="email"
                        placeholder="hello@aether.ai"
                        className="w-full bg-transparent text-white outline-none placeholder:text-[#7f7f8f]"
                      />
                    </div>
                  </label>

                  <label className="flex flex-col gap-2 text-sm text-[#c5b08b]">
                    <span className="font-medium text-white">Password</span>
                    <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[#0d141f] px-4 py-3">
                      <Lock className="h-5 w-5 text-[#E7C78A]" />
                      <input
                        type="password"
                        placeholder="Create a password"
                        className="w-full bg-transparent text-white outline-none placeholder:text-[#7f7f8f]"
                      />
                    </div>
                  </label>

                  <label className="flex flex-col gap-2 text-sm text-[#c5b08b]">
                    <span className="font-medium text-white">Confirm Password</span>
                    <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[#0d141f] px-4 py-3">
                      <Lock className="h-5 w-5 text-[#E7C78A]" />
                      <input
                        type="password"
                        placeholder="Confirm your password"
                        className="w-full bg-transparent text-white outline-none placeholder:text-[#7f7f8f]"
                      />
                    </div>
                  </label>

                  <button className="flex w-full items-center justify-between rounded-full bg-gradient-to-r from-[#F7E7CE] to-[#E7C78A] px-6 py-4 text-sm font-semibold text-[#0b1220] shadow-[0_20px_60px_rgba(231,199,138,0.25)] transition hover:scale-[1.01]">
                    <span>Create Account ↓ /signup</span>
                    <ArrowRight className="h-5 w-5" />
                  </button>

                  <div className="text-center text-sm text-[#94a3b8]">
                    Already have an account?{' '}
                    <Link to="/login" className="font-semibold text-white hover:text-[#F7E7CE]">
                      Log in
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative flex w-full items-center justify-center overflow-hidden bg-[#070b13] px-6 py-16 md:px-12 lg:w-1/2 lg:px-16"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(231,199,138,0.16),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(96,165,250,0.16),_transparent_30%)]" />
          <div className="relative z-10 flex w-full max-w-3xl flex-col gap-8 rounded-[36px] border border-white/10 bg-[#0b1220]/80 p-8 shadow-[0_40px_120px_rgba(0,0,0,0.45)] backdrop-blur-3xl">
            <div className="rounded-[28px] border border-white/10 bg-[#111827]/90 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.25)]">
              <div className="flex items-center justify-between gap-4 text-sm text-[#94a3b8]">
                <span className="rounded-full bg-white/5 px-3 py-1">Signup Flow</span>
                <span className="rounded-full bg-[#E7C78A]/10 px-3 py-1 text-[#E7C78A]">Premium</span>
              </div>
              <div className="mt-6 grid gap-4">
                <div className="rounded-[24px] bg-[#0f172a] p-4 text-sm text-[#c5c3d4] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)]">
                  <p className="font-medium text-white">Designed for premium users</p>
                  <p className="mt-3 leading-7">Elegant form fields, subtle glass surfaces, and a clear call to action for immediate onboarding.</p>
                </div>
                <div className="rounded-[24px] bg-gradient-to-r from-[#111827] via-[#131b2f] to-[#0d1320] p-4 text-sm text-[#d1d5db] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)]">
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-[#E7C78A]" />
                    <span className="font-medium text-white">Launch with premium style</span>
                  </div>
                  <p className="mt-3 leading-7">The signup UI stays consistent with the landing page, delivering a premium onboarding experience.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}

export default Signup;
