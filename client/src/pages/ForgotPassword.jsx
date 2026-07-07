import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { Link } from "react-router-dom";

function ForgotPassword() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#070b13] text-white">
      <div className="relative mx-auto flex min-h-screen max-w-[1400px] flex-col justify-center px-6 py-16 md:px-12 lg:px-16">
        <div className="mx-auto w-full max-w-3xl rounded-[36px] border border-white/10 bg-[#0b1220]/80 p-8 shadow-[0_40px_120px_rgba(0,0,0,0.35)] backdrop-blur-3xl sm:p-10">
          <div className="flex items-center gap-4">
            <div className="grid h-14 w-14 place-items-center rounded-3xl bg-gradient-to-br from-[#f5c26c] to-[#ffd55f] text-[#0b1220] font-black shadow-[0_20px_40px_rgba(255,209,96,0.2)]">
              AI
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#E7C78A]">Aether AI</p>
              <h1 className="text-3xl font-semibold text-white sm:text-4xl">Reset Password</h1>
            </div>
          </div>

          <p className="mt-8 max-w-xl text-base leading-7 text-[#c5b08b]">
            Enter your email and we’ll send you a secure reset link. This is a UI-only page for premium password recovery.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-10 rounded-[28px] border border-white/10 bg-[#0d141f]/95 p-6 shadow-[0_20px_50px_rgba(0,0,0,0.25)]"
          >
            <label className="flex flex-col gap-3 text-sm text-[#c5b08b]">
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

            <button className="mt-8 flex w-full items-center justify-between rounded-full bg-gradient-to-r from-[#F7E7CE] to-[#E7C78A] px-6 py-4 text-sm font-semibold text-[#0b1220] shadow-[0_20px_60px_rgba(231,199,138,0.25)] transition hover:scale-[1.01]">
              <span>Send Reset Link</span>
              <ArrowRight className="h-5 w-5" />
            </button>

            <div className="mt-6 text-center text-sm text-[#94a3b8]">
              Remembered your password?{' '}
              <Link to="/login" className="font-semibold text-white hover:text-[#F7E7CE]">
                Back to login
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}

export default ForgotPassword;
