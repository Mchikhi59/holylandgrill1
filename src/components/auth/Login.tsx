import React, { useState } from "react";
import { auth } from "../../lib/firebase";
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";
import { LogIn, Mail, Lock, Chrome } from "lucide-react";
import { motion } from "motion/react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/profile");
    } catch (err: any) {
      setError(err.message || "Failed to log in");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      navigate("/profile");
    } catch (err: any) {
      setError(err.message || "Failed to log in with Google");
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6 py-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full bg-charcoal/80 border border-gold/20 p-8 rounded-2xl shadow-2xl backdrop-blur-xl"
      >
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold/10 text-gold mb-4">
            <LogIn size={32} />
          </div>
          <h1 className="text-3xl font-serif font-bold text-cream">Welcome Back</h1>
          <p className="text-cream/60 mt-2">Log in to your account</p>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-500/10 border border-red-500/50 text-red-500 text-sm rounded-lg">
            {error}
          </div>
        )}

        <form onSubmit={handleEmailLogin} className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gold/80 block">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gold/40 w-5 h-5" />
              <input
                type="email"
                required
                className="w-full bg-black/40 border border-gold/10 rounded-lg py-3 pl-10 pr-4 text-cream focus:outline-none focus:border-gold/50 transition-colors"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gold/80 block">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gold/40 w-5 h-5" />
              <input
                type="password"
                required
                className="w-full bg-black/40 border border-gold/10 rounded-lg py-3 pl-10 pr-4 text-cream focus:outline-none focus:border-gold/50 transition-colors"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gold hover:bg-cream text-charcoal font-bold py-3 rounded-lg transition-colors duration-300 disabled:opacity-50"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gold/10"></div>
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-charcoal px-2 text-gold/40">Or continue with</span>
          </div>
        </div>

        <button
          onClick={handleGoogleLogin}
          className="w-full bg-white/5 hover:bg-white/10 border border-gold/10 text-cream font-medium py-3 rounded-lg transition-colors duration-300 flex items-center justify-center gap-3"
        >
          <Chrome size={20} />
          Sign in with Google
        </button>

        <p className="text-center mt-8 text-cream/60 text-sm">
          Don't have an account?{" "}
          <Link to="/register" className="text-gold hover:text-cream transition-colors font-medium">
            Register now
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
