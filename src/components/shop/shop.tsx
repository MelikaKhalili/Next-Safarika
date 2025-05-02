import Standardtours from "@/components/shop/landing/Standardtours/Standardtours";
import SwiperComponent from "@/components/shop/shared/swiper/swiper";
import Footer from "@/layout/footer/page";
import Articel from "./articel/articel";
import AdventureSafarika from "./landing/AdventureSafarika/AdventureSafarika";
import AdvertisingBanner from "./landing/AdvertisingBanner/AdvertisingBanner";
import CTAJoinUs from "./landing/CTAJoinUs/CTAJoinUs";
import DiscountLimit from "./landing/DiscountLimit/DiscountLimit";
import Europetours from "./landing/Europetours/Europetours";
import FAQAccordion from "./landing/FAQAccordion/FAQAccordion";
import IranTours from "./landing/IranTours/IranTours";
import NorthernTours from "./landing/NorthernTours/NorthernTours";
import Secondadvertisingbanner from "./landing/Secondadvertisingbanner/Secondadvertisingbanner";
import ShortTours from "./landing/ShortTours/ShortTours";
import SouthTours from "./landing/SouthTours/SouthTours";
import TourSearch from "./landing/TourSearch/TourSearch";
import TravelGuide from "./landing/TravelGuide/TravelGuide";
import Travelogue from "./landing/Travelogue/Travelogue";
import WhyUs from "./landing/WhyUs/WhyUs";

export default function ShopSection() {
  return (
    <div className="">
      <SwiperComponent />
      <div className="flex flex-col gap-14  !p-14">
        <DiscountLimit />
        <Standardtours />
        <Europetours />
        <IranTours />
        <NorthernTours />
        <SouthTours />
        <ShortTours />
        <Articel />
        <TourSearch />
      </div>
      <div className="flex flex-col gap-2 ">
        <AdvertisingBanner />
        <TravelGuide />
        <AdventureSafarika />
        <Secondadvertisingbanner />
        <WhyUs />
        <Travelogue />
        <FAQAccordion />
        <CTAJoinUs />
        <Footer />
      </div>
    </div>
  );
}
