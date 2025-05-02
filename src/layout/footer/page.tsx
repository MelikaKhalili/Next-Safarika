import logo1 from "@/assets/images/logo1.png";
import logo2 from "@/assets/images/logo2.png";
import logo3 from "@/assets/images/logo3.png";
import Image from "next/image";
import { BsFillTelephoneFill } from "react-icons/bs";
export default function Footer() {
  return (
    <>
      <div className="h-full !py-4 !px-12 grid grid-rows-1 grid-cols-7 !border-t-2 !border-t-gray-300 !border-b-2 !border-b-gray-300">
        <div className="flex flex-col justify-center items-center gap-4">
          <p className="!text-xl !text-gray-400">پشتیبانی</p>
          <p className="">
            24 <p className="!text-xl !text-gray-400 inline-block">ساعته</p>
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-4">
          <div className="flex justify-center items-center gap-4">
            <BsFillTelephoneFill className="!rotate-260 hover:!text-[#26b9b0]" />
            <p className="">تلفن پشتیبانی: </p>
          </div>
          <p className="!text-[17px] !font-bold">021-91005711</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-4">
          <p>سفریکا در شبکه‌های اجتماعی:</p>
          <div className="flex justify-center items-center gap-4 ">
            <div className="w-10 h-10 flex flex-col items-center justify-center rounded-lg group hover:!bg-sky-600 !bg-gray-300 backdrop-blur-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                fill="none"
                viewBox="0 0 18 17"
                className="text-white w-6 h-6"
              >
                <path
                  fill="currentColor"
                  d="M4.399 16.105V5.3H.81v10.805zM2.606 3.825c1.25 0 2.03-.83 2.03-1.866C4.611.899 3.855.092 2.628.092S.6.898.6 1.959c0 1.036.779 1.866 1.983 1.866zm3.78 12.28h3.587v-6.033c0-.323.023-.646.118-.876.26-.646.85-1.314 1.841-1.314 1.298 0 1.818.99 1.818 2.444v5.78h3.588V9.91c0-3.319-1.77-4.863-4.13-4.863-1.936 0-2.786 1.083-3.259 1.82h.024V5.301H6.385c.047 1.013 0 10.805 0 10.805"
                ></path>
              </svg>
            </div>
            <div className="w-10 h-10 flex items-center justify-center rounded-lg group bg-gray-300 backdrop-blur-md transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gray-300 group-hover:bg-gradient-to-tr group-hover:from-yellow-400 group-hover:via-pink-500 group-hover:to-purple-600 transition-all duration-300 rounded-lg"></div>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 21 21"
                fill="currentColor"
                className="text-white w-6 h-6 relative z-10"
              >
                <path d="M6.671 10.051a3.336 3.336 0 1 1 3.335 3.337 3.336 3.336 0 0 1-3.335-3.337m-1.803 0a5.139 5.139 0 1 0 10.276 0 5.139 5.139 0 1 0-10.276 0m9.279-5.343a1.202 1.202 0 1 0 1.2-1.2 1.2 1.2 0 0 0-1.2 1.2m-8.183 13.49c-.976-.044-1.506-.207-1.859-.344a3.1 3.1 0 0 1-1.15-.749 3.1 3.1 0 0 1-.749-1.15c-.137-.352-.3-.883-.344-1.859-.049-1.055-.058-1.372-.058-4.045s.01-2.988.058-4.044c.044-.976.208-1.506.344-1.859.182-.467.399-.8.748-1.151.35-.35.683-.568 1.151-.749.353-.137.883-.3 1.859-.344 1.054-.049 1.371-.058 4.042-.058s2.988.01 4.044.058c.975.044 1.505.208 1.858.344a3.1 3.1 0 0 1 1.15.749c.351.35.567.684.75 1.151.137.352.299.883.343 1.859.049 1.056.059 1.372.059 4.044 0 2.673-.01 2.99-.059 4.045-.044.976-.207 1.506-.344 1.859-.182.467-.398.8-.748 1.15s-.684.567-1.151.75c-.352.136-.883.299-1.858.343-1.055.049-1.372.059-4.044.059s-2.988-.01-4.042-.059" />
              </svg>
            </div>
            <div className="w-10 h-10 flex flex-col items-center justify-center rounded-lg group hover:!bg-sky-600 !bg-gray-300 backdrop-blur-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                fill="none"
                viewBox="0 0 20 20"
                className="text-white w-6 h-6"
              >
                <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  d="M18.85 2.018C18.677 2.061.886 8.891.66 9.001c-.312.153-.533.335-.61.504-.07.154-.069.228.005.373q.106.209.48.364c.296.123 4.679 1.476 4.734 1.461.027-.007 2.407-1.49 5.289-3.295a748 748 0 0 1 5.383-3.356c.163-.084.424-.116.519-.066.074.04.082.14.02.229-.023.033-1.973 1.795-4.333 3.915l-4.29 3.854-.156 2.26c-.086 1.242-.162 2.29-.17 2.326-.011.057 0 .067.07.067.123 0 .384-.084.507-.162.059-.037.659-.596 1.333-1.241l1.227-1.174.091.069c1.287.964 4.566 3.332 4.708 3.398.645.302 1.152.09 1.382-.579.033-.097.756-3.43 1.605-7.405C19.935 3.614 20 3.303 20 3.004c0-.249-.012-.344-.064-.474a.8.8 0 0 0-.396-.456c-.13-.065-.191-.076-.393-.074-.131.002-.265.01-.297.018"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-start ">
          <a href="" className="!text-[15px] hover:!text-[#26b9b0]">
            درباره ما
          </a>
          <a href="" className="!text-[15px] hover:!text-[#26b9b0]">
            تماس با ما
          </a>
          <a href="" className="!text-[15px] hover:!text-[#26b9b0]">
            سوالات متداول
          </a>
        </div>
        <div className="flex flex-col justify-center items-start ">
          <a href="" className="!text-[15px] hover:!text-[#26b9b0]">
            قوانین و شرایط
          </a>
          <a href="" className="!text-[15px] hover:!text-[#26b9b0]">
            حریم خصوصی
          </a>
          <a href="" className="!text-[15px] hover:!text-[#26b9b0]">
            شکایات
          </a>
        </div>
        <div className="flex flex-col justify-center items-start ">
          <a href="" className="!text-[15px] hover:!text-[#26b9b0]">
            دانلود اپلیکیشن
          </a>
          <a href="" className="!text-[15px] hover:!text-[#26b9b0]">
            اشتراک سفریکا
          </a>
          <a href="" className="!text-[15px] hover:!text-[#26b9b0]">
            بلاگ
          </a>
        </div>
        <div className="flex justify-between items-center gap-4 w-full">
          <div>
            <Image
              src={logo1}
              alt="logo1"
              className="!w-16 !h-16 object-contain"
            />
          </div>
          <div>
            <Image
              src={logo2}
              alt="logo2"
              className="!w-24 !h-24 object-contain"
            />
          </div>
          <div>
            <Image
              src={logo3}
              alt="logo3"
              className="w-24 h-24 object-contain"
            />
          </div>
        </div>
      </div>
      <p className="!text-gray-500 !text-sm">
        کلیه حقوق این سایت محفوظ و متعلق به شرکت ایده گستر داده کسب و کار شهر
        می‌باشد.
      </p>
    </>
  );
}
