import SwiperGallery from "../shared/swipergallery";
import Excursions from "./excursions/excursions";
import Features from "./features/features";
import "./singleproduct.css";
import TimingTour from "./touroverview/timingtour/timingtour";
import Tourdetails from "./touroverview/tourdetails/tourdetails";
import TourOverview from "./touroverview/TourOverview";
import Toursales from "./toursales/toursales";
import Tourservices from "./tourservices/tourservices";
export default function SingleProductSection() {
  return (
    <div className="w-full flex relative">
      <div className="fixed top-22 left-4 w-1/4 !bg-white">
        <Toursales />
      </div>
      <div className="w-[70%] items-start flex flex-col pr-10">
        <div className="flex gap-12 w-full !border-b-1 !border-b-gray-300 pb-6 ">
          <SwiperGallery />
          <TourOverview />
        </div>
        <div>
          <Tourdetails />
          <TimingTour />
          <Excursions />
          <Tourservices />
          <Features />
        </div>
      </div>
    </div>
  );
}
