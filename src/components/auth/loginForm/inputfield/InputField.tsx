import { Button, Input } from "@chakra-ui/react";
import { setCookie } from "cookies-next";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { InputFieldProps } from "../../types";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as Yup from "yup";

import { getUser, login } from "@/api/userApi";
import { ToastContainer, toast } from "react-toastify";

const schema = Yup.object().shape({
  userName: Yup.string().required("نام کاربری الزامی است"),
  password: Yup.string()
    .min(6, "رمز عبور باید حداقل 6 کاراکتر باشد")
    .required("رمز عبور الزامی است"),
});

export default function InputField({
  setShowPassword,
  showPassword,
  setIsStart,
}: InputFieldProps) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleLogin = async (data: { userName: string; password: string }) => {
    const { userName, password } = data;

    setLoading(true);
    try {
      const response = await login(userName, password);
      const user = await getUser(response.accessToken);

      const token = response.accessToken;
      const Role = user.role;

      setCookie("token", token, { maxAge: 60 * 60 * 24 });
      setCookie("userRole", Role, { maxAge: 60 * 60 * 24 });
      setIsStart(true);
      toast.success("ورود با موفقیت انجام شد!");
      if (Role === "admin") {
        router.push("/dashboard");
      } else {
        router.push("/");
      }
    } catch (error) {
      console.error(error);
      toast.error("نام کاربری یا رمز عبور اشتباه است.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{ color: "var(--color-accent)" }}
      className="w-full flex flex-col gap-6 relative"
    >
      <p>لطفا نام کاربری و رمز عبور خود را وارد کنید.</p>
      <form onSubmit={handleSubmit(handleLogin)} className="w-full">
        <div className="relative w-full mb-4">
          <MdEmail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-md" />
          <Input
            {...register("userName")}
            type="text"
            name="userName"
            placeholder="نام کاربری"
            autoComplete="off"
            className="pl-10 pr-3 py-2 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.userName && (
            <p className="text-red-500 text-xs mt-1">
              {errors.userName.message}
            </p>
          )}
        </div>
        <div className="relative w-full mb-4">
          <div
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-md hover:cursor-pointer z-10"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
          </div>
          <Input
            {...register("password")}
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="رمز عبور"
            autoComplete="off"
            className="pl-10 pr-3 py-2 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.password && (
            <p className="text-red-500 text-xs mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-2 text-xs">
          <p>ورود با رمز یک بار مصرف</p>
          <p>فراموشی رمز عبور</p>
        </div>

        <Button
          type="submit"
          bg={loading ? "#b0c4de" : "#607eaa"}
          textFillColor={"#fdfdfd"}
          _hover={{
            bg: "##1c3879",
            textFillColor: "white",
          }}
          className="w-full"
          disabled={loading}
        >
          {loading ? "در حال ورود..." : "ورود"}
        </Button>
      </form>

      <p className="text-xs">
        اگر قبلا اکانت نساخته‌اید برای
        <Link href="/register" passHref>
          <p className="!text-blue-600 inline-block"> ثبت نام</p>
        </Link>
        کلیک کنید
      </p>

      <ToastContainer />
    </div>
  );
}
