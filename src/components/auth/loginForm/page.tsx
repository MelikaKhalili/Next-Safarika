"use client";
import GlassEffectSection from "./glasseffectsection/GlassEffectSection";
import InputField from "./inputfield/InputField";
import "./loginForm.css";
import LoginStateManager from "./loginstatemanager/LoginStateManager";
export default function LoginForm() {
  const { isStart, setIsStart, showPassword, setShowPassword } =
    LoginStateManager();
  return (
    <div
      className="w-screen h-screen bg-cover bg-center relative"
      style={{ backgroundImage: "url('/asstest/images/Paris.jpg')" }}
    >
      <div className="absolute top-20 inset-0 backdrop-blur-sm bg-black/30 flex items-center justify-center overflow-hidden">
        <div className="flex justify-center items-center h-screen ">
          <div className="grid grid-cols-2 w-[1120px] h-[470px] rounded-lg overflow-hidden bg-[rgba(211,205,205,0.3)] backdrop-blur-md shadow-xl">
            <div
              style={{ backgroundColor: "var(--color-primary" }}
              className=" p-8 flex flex-col justify-center items-center z-40 "
            >
              <InputField
                setShowPassword={setShowPassword}
                showPassword={showPassword}
                setIsStart={setIsStart}
              />
            </div>
            <GlassEffectSection />
          </div>
        </div>
      </div>
    </div>
  );
}
