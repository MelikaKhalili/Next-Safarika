import HeaderSection from "@/layout/header/page";
import React from "react";

const LoginLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <HeaderSection />
      <main>{children}</main>
    </div>
  );
};

export default LoginLayout;
