"use client";
import { getSortedTours } from "@/api/userApi";
import { getFilteredProducts } from "@/components/shared/productcart/FilteredProducts";
import ProductCard from "@/components/shared/productcart/ProductCard";
import PriceRangeSlider from "@/components/shop/shared/PriceRangeSlider";
import { Button, Input } from "@chakra-ui/react";
// import "persian-datepicker";
// import "persian-datepicker/dist/css/persian-datepicker.css";
import "rc-slider/assets/index.css";
import { useEffect, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { HiSortDescending } from "react-icons/hi";
import { MdCalendarToday } from "react-icons/md";
// import DatePicker from "react-multi-date-picker";
interface Product {
  id: string;
  TourName: string;
  Price: string;
  NewPrice?: string;
  Image: string[];
  Los: string;
  Pres: string;
  Star: string;
  Moveday: string;
  Category: string;
  gridRows?: number;
}

type VariantType = "discount" | "normal";

export default function ProductsPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [sliderValue, setSliderValue] = useState<[number, number]>([200, 800]);
  const [minInputValue, setMinInputValue] = useState<string>("200");
  const [maxInputValue, setMaxInputValue] = useState<string>("800");
  const [sortBy, setSortBy] = useState<string>("newest");
  const [sortType, setSortType] = useState("newest");
  const [standardTours, setStandardTours] = useState<Product[]>([]);
  const { Los, Category, Destination } = searchParams;
  const [openCalender, setOpenCalender] = useState(false);
  const [value, setValue] = useState(new Date());

  const handleClearFilters = () => {
    setMinInputValue("200");
    setMaxInputValue("800");
    setSliderValue([200, 800]);
    setSortBy("newest");
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let filteredProducts: Product[] = [];

        if (Los) {
          filteredProducts = await getFilteredProducts("Los", Los as string);
        } else if (Category) {
          filteredProducts = await getFilteredProducts(
            "Category",
            Category as string
          );
        } else if (Destination) {
          filteredProducts = await getFilteredProducts(
            "Destination",
            Destination as string
          );
        } else {
          filteredProducts = await getFilteredProducts("all", "");
        }

        setProducts(filteredProducts);
        const standardTours = filteredProducts.filter(
          (tour: Product) => tour.Category === "تور خارجی"
        );
        setStandardTours(standardTours);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [Los, Category, Destination]);

  const handlePriceRangeChange = (values: [number, number]) => {
    setSliderValue(values);
  };
  // const handleSort = (sortType: string) => {
  //   setSortBy(sortType);
  //   const sortedTours = [...standardTours];
  // };
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-500">Loading...</p>
      </div>
    );
  }
  if (products.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-500">هیچ توری یافت نشد</p>
      </div>
    );
  }
  const sortMap = {
    newest: { sortBy: "createdAt", order: "desc" },
    date: { sortBy: "Moveday", order: "asc" },
    cheapest: { sortBy: "Price", order: "asc" },
    expensive: { sortBy: "Price", order: "desc" },
  };

  const handleSort = async (type: string) => {
    setSortBy(type);
    const { sortBy, order } = sortMap[type];

    let filterKey: string | undefined;
    let filterValue: string | undefined;

    if (Category) {
      filterKey = "Category";
      filterValue = Category as string;
    } else if (Los) {
      filterKey = "Los";
      filterValue = Los as string;
    } else if (Destination) {
      filterKey = "Destination";
      filterValue = Destination as string;
    }

    const data = await getSortedTours(filterKey, filterValue, sortBy, order);
    setProducts(data);
  };

  return (
    <div className="flex justify-center items-start  mx-auto !px-4 !py-24 gap-8 relative">
      <div className="sticky top-24 flex flex-col !bg-white w-[30%] !rounded-xl !py-8 !px-8 !shadow-xl !border-2 !border-white/90 gap-3">
        <div className="flex justify-end items-center">
          <AiOutlineDelete
            className="hover:!text-red-600 !text-xl cursor-pointer"
            onClick={handleClearFilters}
          />
          <p>حذف فیلتر ها</p>
        </div>
        <div className="!border-b-2 !border-b-gray-300 !h-1 w-full"></div>
        <div className="flex flex-col justify-start gap-1">
          <p className="!text-sm">کمتر از 1 میلیون تومان</p>
          <p className="!text-sm"> 1تا 3 میلیون تومان</p>
          <p className="!text-sm">3 تا 6 میلیون تومان</p>
          <p className="!text-sm">بیشتر از 5 میلیون تومان</p>
          <div className="px-4 py-2">
            <PriceRangeSlider min={200} max={800} />
          </div>
        </div>
        <div className="!border-b-2 !border-b-gray-300 !h-1 w-full"></div>
        <div className="flex flex-col">
          <p>تاریخ حرکت</p>
          <div className="relative w-full">
            <Input className="pr-10" />
            <MdCalendarToday
              onClick={() => setOpenCalender(true)}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"
            />
          </div>
          {/* {openCalender && return <DatePicker value={value} onChange={setValue} />} */}
        </div>
        <div className="!border-b-2 !border-b-gray-300 !h-1 w-full"></div>
        <div className="flex flex-col">
          <p>کد تور لیدر</p>
          <Input />
        </div>
        <Button bg={"#26B9B0"} textColor={"white"}>
          اعمال فیلتر
        </Button>
      </div>
      <div className="w-[70%]">
        <div className="flex flex-row w-full bg-lightGray50 justify-center items-center rounded-lg    !bg-[#efefef] ">
          <h1 className="!text-2xl !font-bold px-1 py-3 text-center">
            {Category ? `تورهای ${Category}` : "همه تورها"}
          </h1>
        </div>
        <div className="flex justify-center items-center gap-4 !p-4">
          <div className="flex justify-center items-center">
            <HiSortDescending />
            <p>مرتب سازی:</p>
          </div>
          <div className="flex justify-center items-center gap-4">
            <Button
              _hover={{ backgroundColor: "#26B9B0", textColor: "white" }}
              bg={sortBy === "newest" ? "#26B9B0" : "none"}
              fontSize={"md"}
              textColor={sortBy === "newest" ? "white" : "black"}
              onClick={() => handleSort("newest")}
            >
              جدیدترین
            </Button>
            <Button
              _hover={{ backgroundColor: "#26B9B0", textColor: "white" }}
              bg={sortBy === "date" ? "#26B9B0" : "none"}
              textColor={sortBy === "date" ? "white" : "black"}
              onClick={() => handleSort("date")}
            >
              تاریخ حرکت
            </Button>
            <Button
              _hover={{ backgroundColor: "#26B9B0", textColor: "white" }}
              bg={sortBy === "cheapest" ? "#26B9B0" : "none"}
              textColor={sortBy === "cheapest" ? "white" : "black"}
              onClick={() => handleSort("cheapest")}
            >
              ارزانترین
            </Button>
            <Button
              _hover={{ backgroundColor: "#26B9B0", textColor: "white" }}
              bg={sortBy === "expensive" ? "#26B9B0" : "none"}
              textColor={sortBy === "expensive" ? "white" : "black"}
              onClick={() => handleSort("expensive")}
            >
              گرانترین
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-3 grid-row-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} variant="normal" />
          ))}
        </div>
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {standardTours.map((tour) => (
              <div key={tour.id} className="!h-full !shadow-md">
                <ProductCard product={tour} variant="normal" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
