import { useState } from "react";

export default function LoginStateManager() {
  const [isStart, setIsStart] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  return { isStart, setIsStart, showPassword, setShowPassword };
}
