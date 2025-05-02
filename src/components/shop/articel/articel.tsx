"use client";
import Articel1 from "@/assets/images/articel1.png";
import articelIcon from "@/assets/images/articelIcon.png";
import ArticelImage3 from "@/assets/images/articelImag3.jpg";
import ArticelImage4 from "@/assets/images/articelImage4.png";
import { Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import "./articel.css";
export default function Articel() {
  const [rejuvenation, setRejuvenation] = useState(false);
  const [destination, setDestination] = useState(false);
  const [comfort, setComfort] = useState(false);
  return (
    <>
      <div className="flex items-end gap-4">
        <Image src={articelIcon} alt="articelIcon" />
        <h1 className="!text-2xl !font-bold">مقاله های سفریکا</h1>
      </div>

      <div className=" grid grid-cols-2 w-full h-[31.5rem] gap-4">
        <div className=" grid grid-rows-[2fr_1fr] gap-4">
          <div className="relative w-full h-full cursor-pointer">
            <Image
              src={ArticelImage3}
              alt="ArticelImage3"
              fill
              className="object-cover rounded-2xl"
            />
            <motion.div
              initial={{ opacity: 0, rotateX: 180 }}
              animate={{ opacity: 1, rotateX: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative w-full h-full cursor-pointer"
              style={{ perspective: 2000 }}
            >
              <motion.p
                initial={{ opacity: 0, rotateX: 180 }}
                animate={{ opacity: 1, rotateX: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-2xl font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-6"
              >
                سفر راهی برای بازسازی ذهن و روح
              </motion.p>
              <button
                onClick={() => setRejuvenation(true)}
                className="Readmore absolute bottom-4 top-2/3 left-1/2 -translate-x-1/2 z-10"
              >
                بیشتر بخوانید
              </button>
            </motion.div>
          </div>
          <div className="relative w-full h-full cursor-pointer">
            <Image
              src={ArticelImage4}
              alt="ArticelImage4"
              fill
              className="object-cover rounded-2xl"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-end gap-4 p-6">
              <p className="text-xl font-bold">
                چطور کیفیت پرواز،
                <br /> لذت سفر را چند برابر می‌کند؟
              </p>
              <button
                onClick={() => setComfort(true)}
                className="Readmore mt-4"
              >
                بیشتر بخوانید
              </button>
            </div>
          </div>
        </div>
        <div className="relative w-full h-full cursor-pointer">
          <Image
            src={Articel1}
            alt="Articel1"
            fill
            className="object-cover rounded-2xl"
          />
          <div className=" justify-center items-start absolute top-24 right-0 p-6 w-auto">
            <div className="flex flex-col  gap-14">
              <p className="text-xl font-bold">
                چرا انتخاب مقصد مناسب، <br />
                نیمی از سفر موفق است؟
              </p>
              <p className="!text-[13px] w-38">
                انتخاب مقصد درست می‌تواند تجربه سفر را لذت‌بخش
                <br /> و بی‌استرس کند. <br /> مقصدی که با نیازها و علایق شما
                <br /> هماهنگ باشد،
                <br /> برنامه‌ریزی را آسان‌تر می‌کند <br />و نیمی از موفقیت سفر
                به این انتخاب بستگی دارد.
              </p>
            </div>
            <button
              onClick={() => setDestination(true)}
              className="!mt-4 !w-28 !h-8 Readmore "
            >
              بیشتر بخوانید
            </button>
          </div>
        </div>
        {rejuvenation && (
          <div className="fixed inset-0 !z-[999999999] bg-black/60 flex justify-center items-center">
            <div className="!bg-white w-[60rem] h-[30rem] rounded-md !p-4 flex flex-col justify-between gap-4 overflow-auto min-h-[100px]">
              <div className="article-container">
                <div className="article-header">
                  <h1>چرا ذهن ما نیاز به بازسازی دارد؟</h1>
                </div>
                <article>
                  در دنیای مدرن، فشارهای کاری، دغدغه‌های روزمره و زندگی شتاب‌زده
                  باعث فرسودگی ذهنی می‌شود. بدون توقف و بازنگری، ذهن ما گرفتار
                  تکرار و خستگی مزمن می‌شود؛ جایی که خلاقیت، تمرکز و حتی احساس
                  شادی کاهش می‌یابد.
                </article>
              </div>
              <div className="article-container">
                <div className="article-header">
                  <h1 className="!text-2xl !font-bold">
                    چطور سفر به ذهن آرامش می‌دهد؟
                  </h1>
                </div>
                <article>
                  سفر ما را از محیط تکراری دور می‌کند. مواجهه با مناظر جدید،
                  آدم‌های تازه و فرهنگ‌های متفاوت باعث می‌شود ذهن ما فضای تنفس
                  پیدا کند. در این فرایند، استرس کم‌تر شده و آرامشی عمیق جای آن
                  را می‌گیرد.
                </article>
              </div>
              <div className="article-container">
                <div className="article-header">
                  <h1 className="!text-2xl !font-bold">
                    آیا سفر فقط تفریح است یا می‌تواند درمانگر باشد؟
                  </h1>
                </div>
                <article>
                  سفر فراتر از تفریح است. تجربه‌ بودن در دل طبیعت، شنیدن صدای آب
                  یا دیدن طلوع آفتاب در جایی ناآشنا می‌تواند اثر درمانی داشته
                  باشد. طبیعت و ناشناخته‌ها، ذهن را از درگیری‌های همیشگی آزاد
                  کرده و به نوعی بازسازی ذهنی و روحی منجر می‌شود.
                </article>
              </div>
              <div className="article-container">
                <div className="article-header">
                  <h1 className="!text-2xl !font-bold">
                    چگونه سفر ما را با خود واقعی‌مان روبه‌رو می‌کند؟
                  </h1>
                </div>
                <article>
                  دور شدن از نقش‌های روزمره (کارمند، والد، دانشجو...) باعث
                  می‌شود با بخش‌هایی از خودمان روبه‌رو شویم که معمولاً در زندگی
                  عادی فرصت بروز پیدا نمی‌کنند. در سفر، تصمیم‌گیری‌ها،
                  موقعیت‌های غیرمنتظره و تنهایی گاه‌به‌گاه، فرصتی برای خودشناسی
                  به وجود می‌آورد.
                </article>
              </div>
              <div className="article-container">
                <div className="article-header">
                  <h1 className="!text-2xl !font-bold">
                    بعد از سفر چه چیزی تغییر می‌کند؟
                  </h1>
                </div>
                <article>
                  بسیاری از افراد پس از سفر، حس سبکی، انگیزه‌ و وضوح ذهنی بیشتری
                  دارند. نگاه‌مان به مسائل تغییر می‌کند و با ذهنی بازتر و روحی
                  تازه‌تر به زندگی برمی‌گردیم. به همین دلیل، سفر را نه فقط یک
                  اتفاق، بلکه یک بازسازی درونی می‌دانند.
                </article>
              </div>
              <div
                onClick={() => setRejuvenation(false)}
                className="flex justify-end"
              >
                <Button bg={"#26B9B0"} textColor={"white"}>
                  بازگشت
                </Button>
              </div>
            </div>
          </div>
        )}
        {destination && (
          <div className="fixed inset-0 !z-[999999999] bg-black/60 flex justify-center items-center">
            <div className="!bg-white w-[60rem] h-[30rem] rounded-md !p-4 flex flex-col justify-between gap-4 overflow-auto min-h-[100px]">
              <h1 className="!text-2xl !font-bold">
                چرا انتخاب مقصد مناسب، نیمی از سفر موفق است؟
              </h1>
              <div className="article-container">
                <div className="article-header">
                  <h1>برنامه‌ریزی دقیق‌تر و مناسب‌تر</h1>
                </div>
                <article>
                  وقتی مقصد سفر خود را به دقت انتخاب کنید، برنامه‌ریزی برای سفر
                  راحت‌تر و دقیق‌تر می‌شود. اگر مقصد شما به علایق و نیازهای شما
                  تطابق داشته باشد، می‌توانید به راحتی فعالیت‌هایی را که برایتان
                  جالب و مفید هستند انتخاب کنید. این برنامه‌ریزی به شما کمک
                  می‌کند تا از هر لحظه سفر بیشترین بهره را ببرید و از سردرگمی در
                  طول سفر جلوگیری کنید. بدون انتخاب صحیح مقصد، برنامه‌ریزی برای
                  یک سفر کار دشواری می‌شود که ممکن است باعث اضطراب و نارضایتی
                  شما شود.
                </article>
              </div>
              <div className="article-container">
                <div className="article-header">
                  <h1 className="!text-2xl !font-bold">
                    کاهش استرس و بهبود تجربه
                  </h1>
                </div>
                <article>
                  با انتخاب مقصدی که با سلیقه‌ شما هماهنگ است، شما از همان ابتدا
                  می‌توانید از سفری کم‌استرس لذت ببرید. مثلا اگر به طبیعت علاقه
                  دارید، مقصدهایی مانند کوهستان‌ها یا سواحل آرام می‌توانند برای
                  شما مناسب باشند، چرا که این نوع سفرها معمولاً با آرامش و سکوت
                  همراهند. در مقابل، سفر به مقصدی شلوغ و پرهیاهو می‌تواند شما را
                  دچار استرس کند و سفر را به یک تجربه ناخوشایند تبدیل نماید.
                </article>
              </div>
              <div className="article-container">
                <div className="article-header">
                  <h1 className="!text-2xl !font-bold">
                    {" "}
                    تجربه‌ای منحصر به فرد و به‌یادماندنی
                  </h1>
                </div>
                <article>
                  مقصد مناسب، کلید تجربه‌ای خاص و به یاد ماندنی است. انتخاب یک
                  مقصد که با علایق و خواسته‌های شما همخوانی داشته باشد، این فرصت
                  را به شما می‌دهد که از سفر خود بهترین لحظات را بسازید. به
                  عنوان مثال، اگر شما به تاریخ و فرهنگ علاقه دارید، انتخاب یک
                  مقصد تاریخی می‌تواند سفری آموزنده و الهام‌بخش باشد. سفر به
                  چنین مقاصدی نه تنها خاطراتی فراموش‌نشدنی به شما می‌دهد، بلکه
                  می‌تواند نگاه شما به جهان را تغییر دهد.
                </article>
              </div>
              <div className="article-container">
                <div className="article-header">
                  <h1 className="!text-2xl !font-bold">
                    تناسب با توانایی‌ها و محدودیت‌ها
                  </h1>
                </div>
                <article>
                  مقصد مناسب باید با توانایی‌ها و شرایط شما نیز همخوانی داشته
                  باشد. این بدین معنی است که باید از نظر مالی، جسمانی و زمانی
                  مقصد خود را انتخاب کنید. انتخاب مقصدی که متناسب با این
                  فاکتورها باشد، می‌تواند از بسیاری از مشکلات و چالش‌های احتمالی
                  در طول سفر جلوگیری کند. به عنوان مثال، اگر شما محدودیت زمانی
                  دارید، انتخاب مقصدی که به راحتی و در زمان کوتاه قابل دسترسی
                  باشد، می‌تواند سفر شما را راحت‌تر و لذت‌بخش‌تر کند.
                </article>
              </div>
              <div className="article-container">
                <div className="article-header">
                  <h1 className="!text-2xl !font-bold">
                    ایجاد ارتباط عمیق‌تر با فرهنگ و مردم محلی
                  </h1>
                </div>
                <article>
                  انتخاب مقصدی که با فرهنگ و ارزش‌های شما همخوانی داشته باشد،
                  می‌تواند ارتباط شما با مردم محلی و فرهنگ مقصد را تقویت کند.
                  این ارتباطات می‌توانند به تجربه شما عمق بیشتری ببخشند و باعث
                  شوند که سفر شما بیشتر از یک بازدید سطحی از جاذبه‌های گردشگری
                  باشد. در سفر به مقاصد متفاوت، شما فرصتی پیدا می‌کنید که
                  دیدگاه‌های جدیدی در مورد زندگی و جهان پیدا کنید.
                </article>
              </div>
              <div className="article-container">
                <div className="article-header">
                  <h1 className="!text-2xl !font-bold">
                    {" "}
                    تضمین ایمنی و راحتی بیشتر
                  </h1>
                </div>
                <article>
                  در نهایت، انتخاب مقصد مناسب می‌تواند به ایمنی و راحتی شما کمک
                  کند. برخی مقاصد به دلیل شرایط جوی، بحران‌های سیاسی یا مسائل
                  امنیتی ممکن است سفر را دشوار یا پرخطر کنند. انتخاب مقصدی که از
                  نظر ایمنی و راحتی مناسب باشد، به شما این امکان را می‌دهد که از
                  سفر خود بدون نگرانی‌های اضافی لذت ببرید.
                </article>
              </div>
              <div className="article-container">
                <div className="article-header">
                  <h1 className="!text-2xl !font-bold">نتیجه‌گیری</h1>
                </div>
                <article>
                  انتخاب مقصد مناسب تنها یک بخش از سفر نیست؛ بلکه اساس و پایه‌ای
                  است که سایر بخش‌های سفر بر آن بنا می‌شوند. به همین دلیل است که
                  می‌گوییم «انتخاب مقصد مناسب، نیمی از سفر موفق است». با انتخاب
                  مقصدی که با علایق، توانایی‌ها و نیازهای شما هماهنگ باشد، شما
                  می‌توانید تجربه‌ای منحصر به فرد، بدون استرس و با لذت بیشتر از
                  سفر خود داشته باشید. به یاد داشته باشید که برای داشتن یک سفر
                  موفق، تنها کافی نیست که به یک مقصد زیبا بروید، بلکه باید مقصدی
                  را انتخاب کنید که با شما سازگار باشد و تجربه‌ای دلپذیر برایتان
                  رقم بزند.
                </article>
              </div>
              <div className="flex justify-end">
                <Button
                  onClick={() => setDestination(false)}
                  bg={"#26B9B0"}
                  textColor={"white"}
                >
                  بازگشت
                </Button>
              </div>
            </div>
          </div>
        )}
        {comfort && (
          <div className="fixed inset-0 !z-[999999999] bg-black/60 flex justify-center items-center">
            <div className="!bg-white w-[60rem] h-[30rem] rounded-md !p-4 flex flex-col justify-between gap-4 overflow-auto min-h-[100px]">
              <div className="article-container">
                <div className="article-header">
                  <h1 className="!text-2xl !font-bold">
                    چطور کیفیت پرواز، لذت سفر را چند برابر می‌کند؟
                  </h1>
                </div>
                <article>
                  کیفیت پرواز می‌تواند تاثیر زیادی در تجربه کلی سفر شما بگذارد.
                  وقتی پرواز راحت و بی‌دغدغه باشد، از همان ابتدا احساس راحتی
                  می‌کنید و سفر شما آغاز خوبی دارد. امکانات مناسب مانند
                  صندلی‌های راحت، سرویس‌دهی عالی، و زمان‌بندی دقیق به شما کمک
                  می‌کند تا بدون استرس به مقصد برسید. به عبارت دیگر، پرواز خوب،
                  استرس سفر را کاهش داده و باعث می‌شود شما با انرژی بیشتر و ذهنی
                  آرام به مقصد برسید.
                </article>
              </div>
              <div className="flex justify-end">
                <Button
                  bg={"#26B9B0"}
                  textColor={"white"}
                  onClick={() => setComfort(false)}
                >
                  بازگشت
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
