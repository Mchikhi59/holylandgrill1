import { useState, useEffect } from "react";
import { auth } from "../../lib/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { User, LogOut, Calendar, Mail, MapPin, RefreshCw } from "lucide-react";
import { motion } from "motion/react";

export default function Profile() {
  const { user, profile, loading } = useAuth();
  const navigate = useNavigate();
  const [locationName, setLocationName] = useState<string>("Detecting...");
  const [geoError, setGeoError] = useState<string | null>(null);

  const detectLocation = () => {
    setLocationName("Detecting...");
    setGeoError(null);

    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          try {
            const response = await fetch(
              `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
            );
            const data = await response.json();
            // Get city, fallback to locality, then subdivision, then coords
            const city = data.city || data.locality || data.principalSubdivision || `${latitude.toFixed(2)}, ${longitude.toFixed(2)}`;
            setLocationName(city);
          } catch (error) {
            console.error("Reverse geocoding error:", error);
            setLocationName(`${latitude.toFixed(4)}°, ${longitude.toFixed(4)}°`);
          }
        },
        (error) => {
          const message = error.code === 1 
            ? "Permission Denied" 
            : "Location Unavailable";
          setLocationName("Hollywood, CA"); // Fallback to placeholder if failed
          setGeoError(message);
        },
        { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
      );
    } else {
      setLocationName("Not Supported");
    }
  };

  useEffect(() => {
    detectLocation();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gold"></div>
      </div>
    );
  }

  if (!user) {
    navigate("/login");
    return null;
  }

  return (
    <div className="min-h-[80vh] px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-charcoal/80 border border-gold/20 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-xl"
        >
          {/* Header/Cover */}
          <div className="h-32 bg-gradient-to-r from-gold/20 to-olive/20"></div>
          
          <div className="px-8 pb-12 -mt-16">
            <div className="flex flex-col md:flex-row md:items-end gap-6 mb-12">
              <div className="w-32 h-32 rounded-3xl bg-gold text-charcoal flex items-center justify-center border-4 border-charcoal shadow-xl">
                <User size={64} />
              </div>
              <div className="flex-1">
                <h1 className="text-4xl font-serif font-bold text-cream mb-2">
                  {profile?.displayName || user.displayName || "Valued Customer"}
                </h1>
                <p className="text-gold/60 flex items-center gap-2">
                  <Mail size={16} />
                  {user.email}
                </p>
              </div>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-red-500/10 text-cream/60 hover:text-red-500 border border-white/10 hover:border-red-500/50 rounded-xl transition-all duration-300"
              >
                <LogOut size={20} />
                Logout
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h2 className="text-xl font-serif font-bold text-gold border-b border-gold/10 pb-2">Profile Details</h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-cream/70">
                    <div className="w-10 h-10 rounded-lg bg-gold/5 flex items-center justify-center text-gold">
                      <Calendar size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-gold/40 uppercase tracking-wider font-bold">Member Since</p>
                      <p className="font-medium">
                        {profile?.createdAt ? new Date(profile.createdAt).toLocaleDateString() : "Recently joined"}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-cream/70">
                    <div className="w-10 h-10 rounded-lg bg-gold/5 flex items-center justify-center text-gold">
                      <MapPin size={20} />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-gold/40 uppercase tracking-wider font-bold flex justify-between items-center">
                        <span>Current Location</span>
                        {geoError && <span className="text-[10px] text-red-400 normal-case font-normal italic">({geoError})</span>}
                      </p>
                      <div className="flex items-center gap-2">
                        <p className="font-medium text-cream">{locationName}</p>
                        <button 
                          onClick={detectLocation}
                          className="text-gold/40 hover:text-gold transition-colors p-1"
                          title="Refresh Location"
                        >
                          <RefreshCw size={14} className={locationName === "Detecting..." ? "animate-spin" : ""} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-xl font-serif font-bold text-gold border-b border-gold/10 pb-2">Account Status</h2>
                <div className="p-6 bg-gold/5 border border-gold/10 rounded-2xl">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-cream/70 font-medium">Verified Email</span>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${user.emailVerified ? 'bg-green-500/20 text-green-500' : 'bg-gold/20 text-gold'}`}>
                      {user.emailVerified ? 'Verified' : 'Pending'}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-cream/70 font-medium">Account Tier</span>
                    <span className="px-3 py-1 rounded-full text-xs font-bold uppercase bg-gold text-charcoal">
                      Gold Member
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
