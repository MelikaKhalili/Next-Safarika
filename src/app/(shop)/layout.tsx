import HeaderSection from "@/layout/header/page";

export default function ShopLayout({ children }) {
  return (
    <div>
      <HeaderSection />
      <main>{children}</main>
    </div>
  );
}
