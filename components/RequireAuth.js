import { useAuth } from "../contexts/AuthContext";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function RequireAuth({ children }) {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  if (loading) return null;

  return user ? children : null;
}
