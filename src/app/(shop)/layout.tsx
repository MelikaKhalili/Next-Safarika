import HeaderSection from "@/layout/header/page";

export default function ShopLayout({ children }) {
  return (
    <div className="w-full flex flex-col items-center">
      <HeaderSection />
      <main className="pt-24 w-full">{children}</main>
    </div>
  );
}
