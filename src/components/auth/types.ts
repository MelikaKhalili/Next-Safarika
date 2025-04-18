import { Dispatch, SetStateAction } from "react";
export interface InputFieldProps {
  setShowPassword: Dispatch<SetStateAction<boolean>>;
  showPassword: boolean;
  setIsStart: Dispatch<SetStateAction<boolean>>;
}
