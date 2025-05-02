"use client";
import { RootState } from "@/app/store/store";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const user = useSelector((state: RootState) => state.auth.currentUser);
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      router.push("/login");
    } else if (user?.role === "ADMIN") {
      router.push("/dashboard");
    } else if (user?.role === "USER") {
      router.push("/shop");
    }
  }, [token, user, router]);

  if (!token || !user) {
    return null;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
