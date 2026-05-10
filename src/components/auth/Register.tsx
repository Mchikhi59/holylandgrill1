import React, { useState } from "react";
import { auth, db, handleFirestoreError, OperationType } from "../../lib/firebase";
import { createUserWithEmailAndPassword, updateProfile, sendEmailVerification } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";
import { UserPlus, Mail, Lock, User } from "lucide-react";
import { motion } from "motion/react";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const { user } = await createUserWithEmailAndPassword(auth, email, password);
      
      // Update profile with name
      await updateProfile(user, { displayName: name });

      // Send email verification
      await sendEmailVerification(user);
      
      // We don't create the Firestore doc here anymore.
      // It's handled by the AuthProvider in src/hooks/useAuth.tsx
      // to ensure consistency and handle all sign-up methods (Email/Google).

      navigate("/profile");
    } catch (err: any) {
      setError(err.message || "Failed to create account");
    } finally {
      setLoading(false);
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
            <UserPlus size={32} />
          </div>
          <h1 className="text-3xl font-serif font-bold text-cream">Join Us</h1>
          <p className="text-cream/60 mt-2">Create your account today</p>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-500/10 border border-red-500/50 text-red-500 text-sm rounded-lg">
            {error}
          </div>
        )}

        <form onSubmit={handleRegister} className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gold/80 block">Full Name</label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gold/40 w-5 h-5" />
              <input
                type="text"
                required
                className="w-full bg-black/40 border border-gold/10 rounded-lg py-3 pl-10 pr-4 text-cream focus:outline-none focus:border-gold/50 transition-colors"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>

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
            {loading ? "Creating Account..." : "Register"}
          </button>
        </form>

        <p className="text-center mt-8 text-cream/60 text-sm">
          Already have an account?{" "}
          <Link to="/login" className="text-gold hover:text-cream transition-colors font-medium">
            Login here
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
