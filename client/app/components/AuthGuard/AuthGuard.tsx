'use client'
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const AuthGuard = ({ children }: any) => {
  const router = useRouter();
  useEffect(() => {
    if (!window.localStorage.getItem("token")) {
      router.push("/");
    }
  }, [router]);
  return <>{children}</>;
};

export default AuthGuard;