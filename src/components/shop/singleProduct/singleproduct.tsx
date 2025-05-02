import SwiperGallery from "../shared/swipergallery";
import Cancellationpolicy from "./cancellationpolicy/cancellationpolicy";
import Comments from "./comments/comments";
import Conditions from "./conditions/Conditions";
import Bestamenities from "./D/A-Button/bestamenities";
import Essentials from "./essentials/essentials";
import Excursions from "./excursions/excursions";
import Features from "./features/features";
import OriginAndDestination from "./origin-destination/origindestination";
import Residenz from "./residenz/residenz";
import "./singleproduct.css";
import Standardkarttour from "./standardkarttour/standardkarttour";
import TimingTour from "./touroverview/timingtour/timingtour";
import Tourdetails from "./touroverview/tourdetails/tourdetails";
import TourOverview from "./touroverview/TourOverview";
import Toursales from "./toursales/toursales";
import Tourservices from "./tourservices/tourservices";
import Travelprepinfo from "./travelprepinfo/travelprepinfo";

interface ProductData {
  TourName: string;
  Organizer: string;
  TourLeader: string;
  Rating: number;
  TourClass: string;
  Duration: string;
  DepartureDate: string;
  Origin: string;
  Destination: string;
  AccommodationType: string;
  Transportation: string;
  AgeRange: string;
  GroupSize: string;
  DifficultyLevel: string;
  Tags?: string[];
  [key: string]: any; // For other properties that might be used in child components
}

interface SingleProductSectionProps {
  productData: ProductData;
}

export default function SingleProductSection({
  productData,
}: SingleProductSectionProps) {
  return (
    <div className="w-full flex relative">
      <div className="fixed top-22 left-4 w-1/4 !bg-white">
        <Toursales productData={productData} />
      </div>
      <div className="w-[70%] items-start flex flex-col pr-10">
        <div className=" mt-22 flex gap-12 w-full !border-b-1 !border-b-gray-300 pb-6 ">
          <SwiperGallery productData={productData} />
          <TourOverview productData={productData} />
        </div>
        <div>
          <Tourdetails productData={productData} />
          <TimingTour productData={productData} />
          <Excursions productData={productData} />
          <Tourservices productData={productData} />
          <Features productData={productData} />
          <Residenz productData={productData} />
          <OriginAndDestination productData={productData} />
          <Bestamenities productData={productData} />
          <Essentials />
          <Travelprepinfo productData={productData} />
          <Conditions productData={productData} />
          <Cancellationpolicy productData={productData} />
          <Standardkarttour />
          <Comments productData={productData} />
        </div>
      </div>
    </div>
  );
}
