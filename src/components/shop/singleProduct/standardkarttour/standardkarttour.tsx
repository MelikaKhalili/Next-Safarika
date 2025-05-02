import { FaCheck } from "react-icons/fa6";
export default function Standardkarttour() {
  return (
    <div className="flex  justify-center !border-b-1 !border-b-gray-300 mb-4 pb-6">
      <div
        style={{ outline: "3px solid var(--color-buttonprimary)" }}
        className="w-1/2 bg-white rounded-md flex justify-center items-center gap-6 py-6 px-4"
      >
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            fill="none"
            viewBox="0 0 24 24"
            className="w-24 h-24 mx-auto"
          >
            <path
              fill="#B0EFEB"
              stroke="#26B9B0"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="m21.25 18.47-1.65.39c-.37.09-.66.37-.74.74l-.35 1.47a1 1 0 0 1-1.74.41L12 16l-4.77 5.49a1 1 0 0 1-1.74-.41l-.35-1.47a1 1 0 0 0-.74-.74l-1.65-.39a1.003 1.003 0 0 1-.48-1.68l3.9-3.9a6.99 6.99 0 0 0 4.78 3.02q.51.09 1.05.09t1.05-.09c1.99-.29 3.7-1.42 4.78-3.02l3.9 3.9c.55.54.28 1.49-.48 1.67"
            ></path>
            <path
              fill="#fff"
              stroke="#26B9B0"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M19 9c0 1.45-.43 2.78-1.17 3.89a6.99 6.99 0 0 1-4.78 3.02Q12.54 16 12 16t-1.05-.09a6.99 6.99 0 0 1-4.78-3.02A6.97 6.97 0 0 1 5 9c0-3.87 3.13-7 7-7s7 3.13 7 7"
            ></path>
            <path
              fill="#F5BF41"
              stroke="#F5BF41"
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m12.58 5.98.59 1.18c.08.16.29.32.48.35l1.07.18c.68.11.84.61.35 1.1l-.83.83c-.14.14-.22.41-.17.61l.24 1.03c.19.81-.24 1.13-.96.7l-1-.59a.7.7 0 0 0-.66 0l-1 .59c-.72.42-1.15.11-.96-.7l.24-1.03c.04-.19-.03-.47-.17-.61l-.83-.83c-.49-.49-.33-.98.35-1.1l1.07-.18c.18-.03.39-.19.47-.35l.59-1.18c.29-.64.81-.64 1.13 0"
            ></path>
          </svg>
        </div>
        <div className="flex flex-col items-start text-sm gap-4">
          <div className="flex justify-center items-center">
            <FaCheck style={{ color: "var(--color-buttonprimary)" }} />
            <p> حمل و نقل با وسیله نقلیه درجه یک</p>
          </div>
          <div className="flex justify-center items-center">
            <FaCheck style={{ color: "var(--color-buttonprimary)" }} />
            <p>صبحانه سلف سرویس</p>
          </div>
          <div className="flex justify-center items-center">
            <FaCheck style={{ color: "var(--color-buttonprimary)" }} />
            <p>اقامتگاه با امکانات رفاهی مناسب</p>
          </div>
          <div className="flex justify-center items-center">
            <FaCheck style={{ color: "var(--color-buttonprimary)" }} />
            <p>
              پذیرایی در تمام طول مسیر رفت و برگشت (شامل چای، نسکافه، آب معدنی)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
