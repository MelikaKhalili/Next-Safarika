import { Button } from "@chakra-ui/react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = () => {
    Cookies.remove("token");
    Cookies.remove("refreshToken");

    localStorage.clear();
    sessionStorage.clear();

    router.push("/login");
  };
  return (
    <div className="flex !items-center justify-center gap-4 px-4">
      <Button
        onClick={handleLogout}
        style={{
          backgroundColor: "var(--color-accent) ",
          color: "var(--color-primary)",
        }}
        className="w-full flex items-center gap-2"
      >
        خروج از حساب کاربری
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="white"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="#1c3879"
          className="size-7"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
          />
        </svg>
      </Button>
    </div>
  );
}
