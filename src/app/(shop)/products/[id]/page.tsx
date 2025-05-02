import SingleProductSection from "@/components/shop/singleProduct/singleproduct";
import { BASE_URL, headers } from "@/constant/config";
import axios from "axios";
const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const fetchData = await axios.get(`${BASE_URL}/api/records/tours/${id}`, {
    headers: headers,
  });
  const productData = fetchData.data;

  if (Array.isArray(productData)) {
    const singleProduct = productData.find((product) => product.id === id);
    if (!singleProduct) {
      return <div>Product not found</div>;
    }
    return (
      <div>
        <SingleProductSection productData={singleProduct} />
      </div>
    );
  }

  return (
    <div>
      <SingleProductSection productData={productData} />
    </div>
  );
};
export default Page;
