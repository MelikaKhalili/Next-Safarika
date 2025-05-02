"use client";
import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import "./FAQAccordion.css";

const faqs = [
  {
    question: "چطور اپلیکیشن گردشگری سفریکا رو نصب کنیم؟",
    answer:
      "در منوی بالای وب‌سایت، لینک‌های مربوط به دانلود اپلیکیشن سفریکا در دسترس می‌باشند. کاربران اندروید می‌توانند جدیدترین نسخه اپلیکیشن را به صورت مستقیم دریافت یا از طریق گوگل‌پلی و کافه‌بازار آن‌ را دانلود کنند. کاربران iOS نیز می‌توانند از نسخه وب‌اپ سفریکا استفاده کنند.",
  },
  {
    question: "تور لیدر خوب را چگونه تشخیص دهیم؟",
    answer:
      "تیم پشتیبانی سفریکا بعد از پایان هر سفر، با مسافران تماس می‌گیرد تا در مورد عملکرد تورلیدر و نحوه‌ی برگزاری تور نظرسنجی کند. بر اساس این نظرسنجی به هر تورلیدر از 1 تا 10 امتیازی داده می‌شود که میانگین این امتیازات در بخش توضیحات هر تور قابل مشاهده است.",
  },
  {
    question: "مبدا حرکت تور ها کجاست؟",
    answer:
      "مبدا حرکت بیشتر تورها، تهران یا کرج می‌باشد. اگر از شهرهای دیگر قصد همسفر شدن با سفریکا را دارید، می‌توانید در مقصد به تور ملحق شوید. در این صورت هزینه‌ی حمل و نقل از شما دریافت نمی‌شود.",
  },
  {
    question: "درجه سختی تور چیست؟",
    answer:
      "بر اساس میزان پیاده‌روی، امکانات تور، وسیله نقلیه، آمادگی جسمانی مورد نیاز و عوامل دیگر‌‌، شاخص درجه سختی تور از 5 تعیین می گردد.",
  },
  {
    question: "تور خریداری شده را میتوان با تور دیگری جایگزین کرد؟",
    answer:
      "بله. در صورت موافقت تورلیدر، می‌توانید یکی دیگر از تورهای همان تورلیدر را انتخاب کنید.",
  },
  {
    question:
      "در تور های سفریکا امکان جایگزین کردن یک مسافر با مسافر جدید وجود دارد؟",
    answer:
      "بله. در تورهای زمینی و قطاری تا ۴۸ ساعت قبل از حرکت، می‌توانید با تیم پشتیبانی سفریکا هماهنگ کنید و اطلاعات مسافر جدید را جایگزین مشخصات خودتان کنید.",
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <div className="flex gap-3 flex-col justify-center items-center relative p-14">
        <h1 className="!text-2xl !font-bold">پرسش های متداول</h1>
        <div className="!border-t-2 !border-t-[#26b9b0] w-full h-1"></div>

        {faqs.map((faq, index) => (
          <div key={index} className="w-full rounded-md overflow-hidden">
            <div
              className={`flex items-center w-full justify-between gap-8 p-4 transition-colors duration-300 ${
                openIndex === index ? "bg-gray-200/70" : "hover:bg-gray-100"
              }`}
            >
              <button
                onClick={() => toggleOpen(index)}
                className="flex items-center w-full justify-between"
              >
                <p>{faq.question}</p>
                <RiArrowDropDownLine
                  className={`text-[30px] transition-transform duration-300 ${
                    openIndex === index ? "rotate-180 text-[#26b9b0]" : ""
                  }`}
                />
              </button>
            </div>
            {openIndex === index && (
              <p className="p-4 text-sm text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
