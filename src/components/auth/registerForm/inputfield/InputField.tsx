"use client";
import { registerUser } from "@/api/userApi";
import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { useState } from "react";
import "./InputField.css";

export default function InputField() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    phoneNumber: "",
    address: "",
    role: "USER",
  });
  const [errorMessages, setErrorMessages] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    phoneNumber: "",
    address: "",
    general: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrorMessages((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const validateForm = () => {
    const errors = {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      phoneNumber: "",
      address: "",
      general: "",
    };
    let isValid = true;

    const { firstname, lastname, email, password, phoneNumber, address } =
      formData;

    if (!firstname) {
      errors.firstname = "نام الزامی است.";
      isValid = false;
    }

    if (!lastname) {
      errors.lastname = "نام خانوادگی الزامی است.";
      isValid = false;
    }

    if (!email || email.length < 3 || email.length > 20) {
      errors.email = "نام کاربری باید بین 3 تا 20 کاراکتر باشد.";
      isValid = false;
    }

    if (!password || password.length < 6) {
      errors.password = "رمز عبور باید حداقل 6 کاراکتر باشد.";
      isValid = false;
    }

    if (!phoneNumber || !/^\d{11}$/.test(phoneNumber)) {
      errors.phoneNumber = "شماره تلفن باید 11 رقمی باشد.";
      isValid = false;
    }

    if (!address) {
      errors.address = "آدرس الزامی است.";
      isValid = false;
    }

    setErrorMessages(errors);
    return isValid;
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      const response = await registerUser(formData);
      const token = response.accessToken;

      if (token) {
        setCookie("token", token, { maxAge: 60 * 60 * 24 });
        setCookie("userRole", formData.role, { maxAge: 60 * 60 * 24 });

        router.push("/");
      } else {
        setErrorMessages((prevErrors) => ({
          ...prevErrors,
          general: "خطا در دریافت توکن. لطفاً دوباره تلاش کنید.",
        }));
      }
    } catch (error) {
      if (error.response?.status === 400) {
        setErrorMessages((prevErrors) => ({
          ...prevErrors,
          general: "داده‌های ارسالی نادرست است. لطفاً دوباره تلاش کنید.",
        }));
      } else if (error.response?.status === 409) {
        setErrorMessages((prevErrors) => ({
          ...prevErrors,
          general: "این نام کاربری یا شماره تلفن قبلاً ثبت شده است.",
        }));
      } else {
        setErrorMessages((prevErrors) => ({
          ...prevErrors,
          general: "خطا در ثبت‌نام. لطفاً دوباره تلاش کنید.",
        }));
      }
      console.error("خطا در ثبت‌نام:", error);
    } finally {
      setLoading(false);
    }
  };
  console.log(formData);

  return (
    <div className="fullscreen-bg">
      <div className="glass-container flex flex-col gap-6">
        <h2
          className="!font-bold !text-xl flex justify-center"
          style={{ color: "var(--color-secondary)" }}
        >
          فرم ثبت نام
        </h2>

        {errorMessages.general && (
          <p className="text-red-500 text-center">{errorMessages.general}</p>
        )}

        <form onSubmit={handleSubmit}>
          <div className="flex gap-4">
            <input
              className="flex-1 rounded-md !py-1 !px-3 input-placeholder"
              style={{
                outline: "2px solid var(--color-primary)",
                border: "none",
                boxShadow: "none",
              }}
              placeholder="نام خود را وارد کنید"
              type="text"
              name="firstname"
              value={formData.firstname}
              onChange={handleChange}
            />
            {errorMessages.firstname && (
              <p className="text-red-500 text-sm">{errorMessages.firstname}</p>
            )}
          </div>

          <div className="flex gap-4">
            <input
              className="flex-1 rounded-md !py-1 !px-3 input-placeholder"
              style={{
                outline: "2px solid var(--color-primary)",
                border: "none",
                boxShadow: "none",
              }}
              placeholder="نام خانوادگی را وارد کنید"
              type="text"
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
            />
            {errorMessages.lastname && (
              <p className="text-red-500 text-sm">{errorMessages.lastname}</p>
            )}
          </div>

          <div className="flex gap-4">
            <input
              className="flex-1 rounded-md !py-1 !px-3 input-placeholder"
              style={{ outline: "2px solid var(--color-primary)" }}
              placeholder="ایمیل خود را وارد نمایید"
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errorMessages.email && (
              <p className="text-red-500 text-sm">{errorMessages.email}</p>
            )}
          </div>

          <div className="flex gap-4">
            <input
              className="flex-1 rounded-md !py-1 !px-3 input-placeholder"
              style={{ outline: "2px solid var(--color-primary)" }}
              placeholder="شماره تلفن خود را وارد کنید"
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
            {errorMessages.phoneNumber && (
              <p className="text-red-500 text-sm">
                {errorMessages.phoneNumber}
              </p>
            )}
          </div>

          <div className="relative">
            <textarea
              className="w-full h-44 rounded-md !py-1 !px-3 input-placeholder"
              style={{
                outline: "2px solid var(--color-primary)",
                whiteSpace: "normal",
                wordWrap: "break-word",
                overflow: "auto",
                resize: "none",
                minHeight: "176px",
              }}
              placeholder="آدرس خود را وارد نمایید"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
            {errorMessages.address && (
              <p className="text-red-500 text-sm">{errorMessages.address}</p>
            )}
          </div>

          <div className="flex gap-4">
            <input
              className="flex-1 rounded-md !py-1 !px-3 input-placeholder"
              style={{ outline: "2px solid var(--color-primary)" }}
              placeholder="رمز عبور خود را وارد کنید"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            {errorMessages.password && (
              <p className="text-red-500 text-sm">{errorMessages.password}</p>
            )}
          </div>

          <div className="absolute left-10 bottom-2 flex flex-col gap-2 !mt-2">
            <p>
              قبلا ثبت نام کردید؟
              <a style={{ color: "var(--color-primary)" }} href="/login">
                صفحه ورود
              </a>
            </p>
            <div className="flex gap-4">
              <button
                style={{
                  backgroundColor: "var(--color-accent)",
                  color: "var(--color-primary)",
                  fontSize: "15px",
                  width: "100px",
                  borderRadius: "10px",
                  height: "2rem",
                }}
                type="button"
                onClick={() =>
                  setFormData({
                    firstname: "",
                    lastname: "",
                    email: "",
                    password: "",
                    phoneNumber: "",
                    address: "",
                    role: "USER",
                  })
                }
              >
                بازگشت
              </button>
              <button
                style={{
                  backgroundColor: loading ? "#ccc" : "var(--color-secondary)",
                  color: loading ? "#000" : "var(--color-accent)",
                  fontSize: "15px",
                  width: "100px",
                  borderRadius: "10px",
                  height: "2rem",
                  cursor: loading ? "not-allowed" : "pointer",
                }}
                type="submit"
                disabled={loading}
              >
                {loading ? "در حال ارسال..." : "ثبت نام"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
