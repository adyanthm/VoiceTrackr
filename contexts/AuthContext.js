import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../lib/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/router";

const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const token = await user.getIdToken();
        document.cookie = `token=${token}; path=/`;
        setUser(user);
      } else {
        document.cookie =
          "token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT";
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
