"use client";
import { deleteCartItems, fetchCartItems } from "@/api/userApi";
import {
  addToCart,
  calculateTotalPrice,
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
  updateQuantity,
} from "@/features/cart/cartSlice";
import { RootState } from "@/store/store";
import { Button, Input } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { MdDeleteForever } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import "./page.css";

export default function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const totalprice = useSelector((state: RootState) => state.cart.totalprice);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchCartItems();
        data.forEach((item) => {
          dispatch(addToCart(item));
        });
        dispatch(calculateTotalPrice());
        dispatch(updateQuantity());
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [dispatch]);

  useEffect(() => {
    dispatch(calculateTotalPrice());
  }, [cartItems, dispatch]);

  const handleCheckout = () => {
    router.push("/checkout");
  };

  const handleDeleteItem = async (id: string) => {
    try {
      await deleteCartItems(id);
      dispatch(removeFromCart(id));
      dispatch(calculateTotalPrice());
      console.log("محصول حذف شد");
    } catch (error) {
      console.error("خطا در حذف:", error);
    }
  };

  return (
    <div className="!mt-16 !px-8 !py-16 !min-h-[100vh]">
      {" "}
      {cartItems.length === 0 ? (
        <p className="text-center text-gray-400">سبد خرید شما خالی است</p>
      ) : (
        <div className="grid grid-cols-2 grid-rows-1 gap-3">
          <div className="flex flex-col gap-3 h-[32rem]">
            <div className="!bg-black/10 !shadow-md p-12 h-1/2 !rouned-lg">
              <div className="flex">
                <p>
                  کاربر گرامی مبلغ پرداختی شما :{" "}
                  {totalprice.toLocaleString("fa-IR")} تومان
                </p>
              </div>
            </div>
            <div className="bg-black/10 p-12 h-1/2 rounded-lg">
              <h1>لطفا نحوه دریافت بلیط و پاسپورت خود را انتخاب نمایید</h1>
              <div className="radio-inputs">
                <label>
                  <input name="engine" type="radio" className="radio-input" />
                  <span className="radio-tile">
                    <span className="radio-icon">
                      <svg
                        fill="none"
                        height="20px"
                        width="20px"
                        version="1.1"
                        id="Capa_1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 493.407 493.407"
                        stroke="currentColor"
                      >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          <path d="M488.474,270.899c-12.647-37.192-47.527-62.182-86.791-62.182c-5.892,0-11.728,0.749-17.499,1.879l-34.324-100.94 c-1.71-5.014-6.417-8.392-11.721-8.392H315.02c-6.836,0-12.382,5.547-12.382,12.382c0,6.836,5.545,12.381,12.382,12.381h14.252 l12.462,36.645H206.069v-21.998l21.732-2.821c3.353-0.434,6.135-3.079,6.585-6.585c0.54-4.183-2.402-8.013-6.585-8.553l-68.929-8.94 c-1.362-0.168-2.853-0.185-4.281,0c-9.116,1.186-15.55,9.537-14.373,18.653c1.185,9.118,9.537,15.55,18.653,14.364l22.434-2.909 v26.004l-41.255,52.798c-14.059-8.771-30.592-13.93-48.349-13.93C41.135,208.757,0,249.885,0,300.443 c0,50.565,41.135,91.7,91.701,91.7c44.882,0,82.261-32.437,90.113-75.095h33.605v12.647h-5.909c-4.563,0-8.254,3.693-8.254,8.254 c0,4.563,3.691,8.254,8.254,8.254h36.58c4.563,0,8.254-3.691,8.254-8.254c0-4.561-3.691-8.254-8.254-8.254h-5.908v-12.647h5.545 c3.814,0,7.409-1.756,9.755-4.756l95.546-122.267l9.776,28.729c-17.854,8.892-32.444,22.965-41.409,41.168 c-10.825,21.973-12.438,46.842-4.553,70.034c12.662,37.201,47.55,62.189,86.815,62.189c10.021,0,19.951-1.645,29.519-4.9 c23.191-7.885,41.926-24.329,52.744-46.302C494.746,318.966,496.367,294.09,488.474,270.899z M143.46,258.542 c7.698,9.488,12.776,21.014,14.349,33.742h-40.717L143.46,258.542z M91.701,367.379c-36.912,0-66.938-30.026-66.938-66.936 c0-36.904,30.026-66.923,66.938-66.923c12.002,0,23.11,3.427,32.864,8.981l-42.619,54.54c-2.917,3.732-3.448,8.794-1.378,13.05 c2.08,4.256,6.4,6.957,11.134,6.957h64.592C148.861,345.906,122.84,367.379,91.701,367.379z M239.69,292.284h-56.707 c-1.839-20.667-10.586-39.329-23.868-53.782l22.191-28.398v32.47c0,6.836,5.545,12.381,12.381,12.381 c6.836,0,12.382-5.545,12.382-12.381v-55.138h115.553L239.69,292.284z M383.546,285.618l6.384,18.79 c1.75,5.151,6.562,8.392,11.721,8.392c1.321,0,2.667-0.21,3.99-0.661c6.471-2.201,9.93-9.23,7.729-15.711l-6.336-18.637 c7.731,1.838,14.221,7.312,16.855,15.083c2.024,5.94,1.613,12.309-1.161,17.935c-2.773,5.626-7.569,9.835-13.509,11.858 c-12.068,4.078-25.716-2.717-29.785-14.671C376.735,300.055,378.597,291.689,383.546,285.618z M461.712,329.994 c-7.908,16.042-21.579,28.044-38.507,33.808c-6.997,2.378-14.244,3.578-21.547,3.578c-28.664,0-54.129-18.249-63.374-45.399 c-5.757-16.926-4.571-35.081,3.328-51.112c6.047-12.27,15.494-22.112,27.165-28.666l8.981,26.416 c-13.414,10.108-19.644,27.931-13.954,44.691c5.522,16.227,20.732,27.124,37.853,27.124c4.378,0,8.707-0.725,12.882-2.145 c10.108-3.434,18.282-10.607,22.999-20.184c4.723-9.585,5.425-20.435,1.982-30.551c-5.545-16.299-21.57-26.787-38.289-26.818 l-8.997-26.472c3.128-0.453,6.28-0.783,9.448-0.783c28.658,0,54.112,18.242,63.351,45.399 C470.788,295.799,469.613,313.96,461.712,329.994z"></path>
                        </g>
                      </svg>
                    </span>
                    <span className="radio-label">دوچرخه</span>
                  </span>
                </label>
                <label>
                  <input
                    name="engine"
                    type="radio"
                    className="radio-input"
                    defaultChecked
                  />
                  <span className="radio-tile">
                    <span className="radio-icon">
                      <svg
                        fill="none"
                        height="32px"
                        width="32px"
                        version="1.1"
                        id="Capa_1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 467.168 467.168"
                        stroke="currentColor"
                      >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          <g>
                            <g>
                              <path d="M76.849,210.531C34.406,210.531,0,244.937,0,287.388c0,42.438,34.406,76.847,76.849,76.847 c30.989,0,57.635-18.387,69.789-44.819l18.258,14.078c0,0,134.168,0.958,141.538-3.206c0,0-16.65-45.469,4.484-64.688 c2.225-2.024,5.021-4.332,8.096-6.777c-3.543,8.829-5.534,18.45-5.534,28.558c0,42.446,34.403,76.846,76.846,76.846 c42.443,0,76.843-34.415,76.843-76.846c0-42.451-34.408-76.849-76.843-76.849c-0.697,0-1.362,0.088-2.056,0.102 c5.551-3.603,9.093-5.865,9.093-5.865l-5.763-5.127c0,0,16.651-3.837,12.816-12.167c-3.848-8.33-44.19-58.28-44.19-58.28 s7.146-15.373-7.634-26.261l-7.098,15.371c0,0-18.093-12.489-25.295-10.084c-7.205,2.398-18.005,3.603-21.379,8.884l-3.358,3.124 c0,0-0.95,5.528,4.561,13.693c0,0,55.482,17.05,58.119,29.537c0,0,3.848,7.933-12.728,9.844l-3.354,4.328l-8.896,0.479 l-16.082-36.748c0,0-15.381,4.082-23.299,10.323l1.201,6.24c0,0-64.599-43.943-125.362,21.137c0,0-44.909,12.966-76.37-26.897 c0,0-0.479-12.968-76.367-10.565l5.286,5.524c0,0-5.286,0.479-7.444,3.841c-2.158,3.358,1.2,6.961,18.494,6.961 c0,0,39.153,44.668,69.17,42.032l42.743,20.656l18.975,32.42c0,0,0.034,2.785,0.23,7.045c-4.404,0.938-9.341,1.979-14.579,3.09 C139.605,232.602,110.832,210.531,76.849,210.531z M390.325,234.081c29.395,0,53.299,23.912,53.299,53.299 c0,29.39-23.912,53.294-53.299,53.294c-29.394,0-53.294-23.912-53.294-53.294C337.031,257.993,360.932,234.081,390.325,234.081z M76.849,340.683c-29.387,0-53.299-23.913-53.299-53.295c0-29.395,23.912-53.299,53.299-53.299 c22.592,0,41.896,14.154,49.636,34.039c-28.26,6.011-56.31,11.99-56.31,11.99l3.619,19.933l55.339-2.444 C124.365,322.116,102.745,340.683,76.849,340.683z M169.152,295.835c1.571,5.334,3.619,9.574,6.312,11.394l-24.696,0.966 c1.058-3.783,1.857-7.666,2.338-11.662L169.152,295.835z"></path>
                            </g>
                          </g>
                        </g>
                      </svg>
                    </span>
                    <span className="radio-label">تیباکس</span>
                  </span>
                </label>
                <label>
                  <input name="engine" type="radio" className="radio-input" />
                  <span className="radio-tile">
                    <span className="radio-icon">
                      <svg
                        fill="none"
                        height="32px"
                        width="32px"
                        version="1.1"
                        id="Capa_1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 324.018 324.017"
                        stroke="currentColor"
                      >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          <g>
                            <g>
                              <path d="M317.833,197.111c3.346-11.148,2.455-20.541-2.65-27.945c-9.715-14.064-31.308-15.864-35.43-16.076l-8.077-4.352 l-0.528-0.217c-8.969-2.561-42.745-3.591-47.805-3.733c-7.979-3.936-14.607-7.62-20.475-10.879 c-20.536-11.413-34.107-18.958-72.959-18.958c-47.049,0-85.447,20.395-90.597,23.25c-2.812,0.212-5.297,0.404-7.646,0.59 l-6.455-8.733l7.34,0.774c2.91,0.306,4.267-1.243,3.031-3.459c-1.24-2.216-4.603-4.262-7.519-4.57l-23.951-2.524 c-2.91-0.305-4.267,1.243-3.026,3.459c1.24,2.216,4.603,4.262,7.519,4.57l3.679,0.386l8.166,11.05 c-13.823,1.315-13.823,2.139-13.823,4.371c0,18.331-2.343,22.556-2.832,23.369L0,164.443v19.019l2.248,2.89 c-0.088,2.775,0.823,5.323,2.674,7.431c5.981,6.804,19.713,7.001,21.256,7.001c4.634,0,14.211-2.366,20.78-4.153 c-0.456-0.781-0.927-1.553-1.3-2.392c-0.36-0.809-0.603-1.668-0.885-2.517c-0.811-2.485-1.362-5.096-1.362-7.845 c0-14.074,11.449-25.516,25.515-25.516s25.52,11.446,25.52,25.521c0,6.068-2.221,11.578-5.773,15.964 c-0.753,0.927-1.527,1.828-2.397,2.641c-1.022,0.958-2.089,1.859-3.254,2.641c29.332,0.109,112.164,0.514,168.708,1.771 c-0.828-0.823-1.533-1.771-2.237-2.703c-0.652-0.854-1.222-1.75-1.761-2.688c-2.164-3.744-3.5-8.025-3.5-12.655 c0-14.069,11.454-25.513,25.518-25.513c14.064,0,25.518,11.449,25.518,25.513c0,5.126-1.553,9.875-4.152,13.878 c-0.605,0.922-1.326,1.755-2.04,2.594c-0.782,0.922-1.616,1.781-2.527,2.584c5.209,0.155,9.699,0.232,13.546,0.232 c19.563,0,23.385-1.688,23.861-5.018C324.114,202.108,324.472,199.602,317.833,197.111z"></path>
                              <path d="M52.17,195.175c3.638,5.379,9.794,8.922,16.756,8.922c0.228,0,0.44-0.062,0.663-0.073c2.576-0.083,5.043-0.61,7.291-1.574 c1.574-0.678,2.996-1.6,4.332-2.636c4.782-3.702,7.927-9.429,7.927-15.933c0-11.144-9.066-20.216-20.212-20.216 s-20.213,9.072-20.213,20.216c0,2.263,0.461,4.411,1.149,6.446c0.288,0.85,0.616,1.673,1.015,2.471 C51.279,193.606,51.667,194.434,52.17,195.175z"></path>
                              <path d="M269.755,209.068c2.656,0,5.173-0.549,7.503-1.481c1.589-0.642,3.06-1.491,4.422-2.495 c1.035-0.767,1.988-1.616,2.863-2.559c3.34-3.604,5.432-8.389,5.432-13.681c0-11.144-9.071-20.21-20.215-20.21 s-20.216,9.066-20.216,20.21c0,4.878,1.812,9.3,4.702,12.801c0.818,0.989,1.719,1.89,2.708,2.713 c1.311,1.088,2.729,2.024,4.293,2.755C263.836,208.333,266.704,209.068,269.755,209.068z"></path>
                            </g>
                          </g>
                        </g>
                      </svg>
                    </span>
                    <span className="radio-label">اسنپ</span>
                  </span>
                </label>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 h-[32rem] overflow-y-auto ">
            {cartItems.map((item, index) => (
              <div
                key={index}
                className="flex w-full p-4 shadow-md rounded-md !bg-black/10"
              >
                {item.Image && item.Image.length > 0 && (
                  <Image
                    src={item.Image[1]}
                    alt={item.TourName || "image"}
                    width={200}
                    height={200}
                    className="rounded-md !h-32"
                  />
                )}
                <div className="flex flex-col justify-center gap-4 w-full ml-4 ">
                  <div className="flex items-center justify-between p-4 relative">
                    <div className="flex flex-col justify-center gap-5">
                      <p className="font-medium">{item.TourName}</p>
                      <div className="bg-blue-100 px-2 rounded-md w-24">
                        <div className="flex justify-center items-center relative mx-auto ">
                          <button
                            onClick={() => {
                              dispatch(increaseQuantity(item.id));
                              dispatch(calculateTotalPrice());
                            }}
                            className="absolute right-0 text-white font-bold px-2 cursor-pointer"
                          >
                            +
                          </button>
                          <Input
                            textAlign="center"
                            size="sm"
                            width="40px"
                            value={item.quantity}
                            className="!border-none"
                          />
                          {item.quantity > 1 ? (
                            <button
                              onClick={() => {
                                dispatch(decreaseQuantity(item.id));
                                dispatch(calculateTotalPrice());
                              }}
                              className="absolute left-0 text-white font-bold px-2"
                            >
                              -
                            </button>
                          ) : (
                            <MdDeleteForever
                              onClick={() => {
                                handleDeleteItem(item.id);
                              }}
                              className="absolute left-0 text-red-600 cursor-pointer"
                            />
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="flex  gap-4 absolute left-0 bottom-0">
                      <p>
                        {Number(item.Price * item.quantity).toLocaleString(
                          "fa-IR"
                        )}{" "}
                        تومان
                      </p>
                      {item.quantity > 1 && (
                        <MdDeleteForever
                          onClick={() => {
                            dispatch(decreaseQuantity(item.id));
                            dispatch(calculateTotalPrice());
                          }}
                          className="!text-2xl !text-red-600 cursor-pointer"
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      <div className="mt-8 p-4 !bg-black/20 flex justify-between items-center rounded-md">
        <p>
          کاربر گرامی، چنانچه از سفارش خود اطمینان دارید لطفا دکمه ثبت سفارش را
          بزنید.
        </p>
        <Button onClick={handleCheckout} colorScheme="gray">
          ثبت سفارش
        </Button>
      </div>
    </div>
  );
}
