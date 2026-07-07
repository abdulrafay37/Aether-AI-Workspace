import { motion } from "framer-motion";
import { ArrowRight, Eye, Lock, Mail, Sparkles, MessageCircle } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { auth } from "../firebase";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
} from "firebase/auth";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const provider = new GoogleAuthProvider();

  const googleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
      navigate("/workspace");
    } catch (error) {
      alert(error.message);
    }
  };

  const emailLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/workspace");
    } catch (error) {
      alert(error.message);
    }
  };

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
                <h1 className="text-3xl font-semibold text-white sm:text-4xl">
                  Welcome back.
                </h1>
              </div>
            </div>

            <p className="mt-8 max-w-xl text-base leading-7 text-[#c5b08b]">
              Sign in to continue building your AI workspace. Fast, secure, and tailored for premium productivity.
            </p>

            <div className="mt-10 space-y-4">
              <button
                onClick={googleLogin}
                className="flex w-full items-center justify-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-4 text-sm font-semibold text-white transition hover:border-[#E7C78A]/40 hover:bg-white/10"
              >
                <Sparkles className="h-5 w-5 text-[#E7C78A]" />
                Sign in with Google
              </button>

              <div className="rounded-[28px] border border-white/10 bg-[#0b1220]/95 p-5 shadow-[0_20px_50px_rgba(0,0,0,0.25)]">
                <div className="grid gap-4">
                  <label className="flex flex-col gap-2 text-sm text-[#c5b08b]">
                    <span className="font-medium text-white">Email</span>
                    <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[#0d141f] px-4 py-3">
                      <Mail className="h-5 w-5 text-[#E7C78A]" />
                      <input
                        type="email"
                        placeholder="hello@aether.ai"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full bg-transparent text-white outline-none placeholder:text-[#7f7f8f]"
                      />
                      <Eye className="h-5 w-5 text-[#7f7f8f]" />
                    </div>
                  </label>

                  <div className="flex items-center justify-between text-sm text-[#7f7f8f]">
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="h-4 w-4 rounded border-white/10 bg-[#0b1220] text-[#E7C78A]" />
                      Remember me
                    </label>
                    <Link to="/forgot-password" className="text-[#E7C78A] transition hover:text-white">
                      Forgot Password?
                    </Link>
                  </div>

                  <button
                    onClick={emailLogin}
                    className="flex w-full items-center justify-between rounded-full bg-gradient-to-r from-[#F7E7CE] to-[#E7C78A] px-6 py-4 text-sm font-semibold text-[#0b1220] shadow-[0_20px_60px_rgba(231,199,138,0.25)] transition hover:scale-[1.01]"
                  >
                    <span>Sign In</span>
                    <ArrowRight className="h-5 w-5" />
                  </button>

                  <button className="w-full rounded-full border border-white/10 bg-white/5 px-6 py-4 text-sm font-semibold text-white transition hover:border-[#E7C78A]/40 hover:bg-white/10">
                    Create Account
                  </button>
                  <div className="text-center text-sm text-[#94a3b8]">
                    Want to create a new account?{' '}
                    <Link to="/signup" className="font-semibold text-white hover:text-[#F7E7CE]">
                      Create Account ↓ /signup
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
                <span className="rounded-full bg-white/5 px-3 py-1">AI Workspace</span>
                <span className="rounded-full bg-[#E7C78A]/10 px-3 py-1 text-[#E7C78A]">Live</span>
              </div>
              <div className="mt-6 grid gap-4">
                <div className="rounded-[28px] bg-[#0d1320] p-5 text-sm text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)]">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-[#f8f2d1]">Aether AI</span>
                    <span className="rounded-full bg-[#E7C78A]/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-[#E7C78A]">Gemini</span>
                  </div>
                  <div className="space-y-4">
                    <div className="rounded-[24px] bg-[#111827] p-4 shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
                      <p className="text-sm text-[#c5b08b]">Elias</p>
                      <p className="mt-2 text-base leading-7 text-white">Hey Rafay, can you summarize the latest AI workspace design brief?</p>
                    </div>
                    <div className="rounded-[24px] bg-gradient-to-r from-[#1f2937]/90 to-[#0d1320] p-4 shadow-[0_10px_30px_rgba(0,0,0,0.2)]">
                      <p className="text-sm text-[#94a3b8]">Aether AI</p>
                      <p className="mt-2 text-base leading-7 text-white">Absolutely — I’ve consolidated the product goals, motion style, and premium tone for the landing page.</p>
                    </div>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[28px] border border-white/10 bg-[#111827]/90 p-5 shadow-[0_20px_80px_rgba(0,0,0,0.22)]">
                    <p className="text-xs uppercase tracking-[0.25em] text-[#94a3b8]">Project status</p>
                    <p className="mt-3 text-3xl font-semibold text-white">Ready</p>
                  </div>
                  <div className="rounded-[28px] border border-white/10 bg-[#111827]/90 p-5 shadow-[0_20px_80px_rgba(0,0,0,0.22)]">
                    <p className="text-xs uppercase tracking-[0.25em] text-[#94a3b8]">Next step</p>
                    <p className="mt-3 text-3xl font-semibold text-white">Launch flow</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 rounded-[28px] border border-white/10 bg-[#111827]/90 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.24)]">
              <div className="flex items-center gap-3 text-sm text-[#94a3b8]">
                <div className="h-2.5 w-2.5 rounded-full bg-[#65a30d]" />
                Live preview
              </div>
              <div className="grid gap-4">
                <div className="rounded-[24px] bg-[#0f172a] p-4 text-sm text-[#c5c3d4] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)]">
                  <p className="font-medium text-white">Aether AI</p>
                  <p className="mt-3 leading-7">
                    Generate a proposal for the new landing page with a subtle gold glow, premium glass panels, and responsive motion.
                  </p>
                </div>
                <div className="rounded-[24px] bg-gradient-to-r from-[#111827] via-[#131b2f] to-[#0d1320] p-4 text-sm text-[#d1d5db] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)]">
                  <div className="flex items-center gap-2">
                    <MessageCircle className="h-4 w-4 text-[#E7C78A]" />
                    <span className="font-medium text-white">Aether AI</span>
                  </div>
                  <p className="mt-3 leading-7">
                    Starting with a login page that feels like premium SaaS — dark glass, soft glow, and elegant motion.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}

export default Login;
