import { Input } from "@chakra-ui/react";

export default function CTAJoinUs() {
  return (
    <div className="flex justify-center items-center flex-col gap-6 !mb-24">
      <div>
        {" "}
        <h1 className="!text-4xl !font-bold !py-4">با ما همسفر شو!</h1>
        <p>از تخفیف‌ها و جدیدترین‌ تورها با خبر شوید.</p>
      </div>
      <div className="relative w-[60%]">
        {" "}
        <Input className="w-full" size={"lg"} placeholder="ایمیل شما" />
        <button className="absolute left-0 top-1/2 -translate-y-1/2 !bg-[#26b9b0] !text-white !py-[13px] !px-[35px] rounded-tl-md rounded-bl-md">
          ارسال
        </button>
      </div>
    </div>
  );
}
