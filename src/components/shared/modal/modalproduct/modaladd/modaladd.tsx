"use client";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Select,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { FaRegCalendar } from "react-icons/fa6";
import { IoMdArrowDropdown } from "react-icons/io";
import { API_KEY, BASE_URL } from "../../../../../constant/config";
import { IAddProductModalProps } from "./modaladd";

interface Product {
  id: string;
  TourName: string;
  startTravelDataTime: string;
  EndTravelDataTime: string;
  Quantity: string;
  Price: string;
  Los: string;
  Transportation: string;
  Tourleader: string;
  CancleRulesTour: string;
  Image: string | string[] | null;
}

const iranianAirlines = [
  { name: "ایران‌ایر (Iran Air)" },
  { name: "ماهان ایر (Mahan Air)" },
  { name: "آسمان (Aseman Airlines)" },
  { name: "کاسپین (Caspian Airlines)" },
  { name: "تابان (Taban Air)" },
  { name: "زاگرس (Zagros Airlines)" },
];

const Vehicle = [
  { name: "هواپیما" },
  { name: "ماشین شخصی" },
  { name: "کمپر" },
  { name: "قایق" },
];

const ModalAddProduct: React.FC<IAddProductModalProps> = ({
  isOpenModalAddProduct,
  setIsOpenModalAddProduct,
  refreshList,
  editingProduct,
  isEditMode,
  setIsEditMode,
  setEditingProduct,
}) => {
  const initialRef = useRef(null);
  const finalRef = useRef(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);

  const handleImageChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      try {
        setUploading(true);
        const imageUrl = await uploadImage(file);
        setImage(file);
        setPreview(imageUrl);
        setFormData((prev) => ({
          ...prev,
          Image: [imageUrl],
        }));
      } catch (error) {
        console.error("Error handling image:", error);
      } finally {
        setUploading(false);
      }
    }
  };

  const uploadImage = async (file: File) => {
    try {
      const formData = new FormData();
      formData.append("image", file);
      const response = await axios.post(
        `${BASE_URL}/api/files/upload`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            api_key: API_KEY,
          },
        }
      );

      return response.data.downloadLink;
    } catch (error) {
      console.error("Error uploading image:", error);
      throw error;
    }
  };

  useEffect(() => {
    if (isOpenModalAddProduct) {
      onOpen();
    }
  }, [isOpenModalAddProduct]);

  const handleClose = () => {
    onClose();
    setIsOpenModalAddProduct(false);
    setIsEditMode(false);
    setEditingProduct(null);
  };

  const [formData, setFormData] = useState({
    TourName: "",
    startTravelDataTime: "",
    EndTravelDataTime: "",
    Quantity: 0,
    Price: 0,
    Los: "",
    Transportation: "",
    Tourleader: "",
    CancleRulesTour: "",
    Image: null as string | string[] | null,
  });

  const handelAddProduct = async () => {
    try {
      const productData = {
        ...formData,
        Price: formData.Price,
        Quantity: formData.Quantity,
        Image: formData.Image || null,
      };
      console.log(productData, isEditMode, editingProduct);
      if (isEditMode && editingProduct) {
        await axios.put(
          `${BASE_URL}/api/records/tours/${editingProduct.id}`,
          productData,
          {
            headers: {
              "Content-Type": "application/json",
              api_key: API_KEY,
            },
          }
        );
      } else {
        await axios.post(`${BASE_URL}/api/records/tours`, productData, {
          headers: {
            "Content-Type": "application/json",
            api_key: API_KEY,
          },
        });
      }

      refreshList();
      handleClose();
    } catch (error) {
      console.error("Error saving product:", error);
      if (axios.isAxiosError(error)) {
        console.error("Error details:", {
          status: error.response?.status,
          data: error.response?.data,
          message: error.message,
        });
      }
    }
  };

  useEffect(() => {
    if (isEditMode && editingProduct) {
      setFormData({
        TourName: editingProduct.TourName,
        startTravelDataTime: editingProduct.startTravelDataTime || "",
        EndTravelDataTime: editingProduct.EndTravelDataTime || "",
        Los: editingProduct.Los || "",
        Quantity: editingProduct.Quantity || 0,
        Price: editingProduct.Price || 0,
        Transportation: editingProduct.Transportation || "",
        Tourleader: editingProduct.Tourleader || "",
        CancleRulesTour: editingProduct.CancleRulesTour || "",
        Image: editingProduct.Image || null,
      });
      setPreview(
        Array.isArray(editingProduct.Image)
          ? editingProduct.Image[0]
          : editingProduct.Image
      );
    }
  }, [isEditMode, editingProduct]);

  return (
    <div>
      {isOpenModalAddProduct && (
        <>
          <Modal
            initialFocusRef={initialRef}
            finalFocusRef={finalRef}
            isOpen={isOpen}
            onClose={handleClose}
          >
            <ModalOverlay bg="blackAlpha.700" backdropFilter="blur(4px)" />
            <ModalContent w="80rem" h="35rem" maxW="90vw">
              <div className="">
                <ModalHeader className="!mr-8">
                  {isEditMode ? "ویرایش تور موجود" : "اضافه کردن تور جدید"}
                </ModalHeader>
                <ModalCloseButton className="!text-white !rounded-full !bg-blue-600 hover:!bg-red-600 absolute !top-4" />
              </div>
              <ModalBody pb={2}>
                <div className="grid  gap-3 grid-cols-2">
                  <FormControl>
                    <FormLabel>نام تور</FormLabel>
                    <Input
                      value={formData.TourName}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          TourName: e.target.value,
                        }))
                      }
                      ref={initialRef}
                    />
                  </FormControl>
                  <div className="flex gap-3">
                    <div className="w-full">
                      <FormControl>
                        <FormLabel>تاریخ رفت</FormLabel>
                        <InputGroup>
                          <Input
                            value={formData.startTravelDataTime}
                            onChange={(e) =>
                              setFormData((prev) => ({
                                ...prev,
                                startTravelDataTime: e.target.value,
                              }))
                            }
                            ref={initialRef}
                            pr="0.8rem"
                            textAlign="right"
                          />
                          <InputLeftElement width="2.5rem">
                            <FaRegCalendar color="gray" />
                          </InputLeftElement>
                        </InputGroup>
                      </FormControl>
                    </div>
                    <div className="w-full">
                      <FormControl>
                        <FormLabel>تاریخ برگشت</FormLabel>
                        <InputGroup>
                          <Input
                            value={formData.EndTravelDataTime}
                            onChange={(e) =>
                              setFormData((prev) => ({
                                ...prev,
                                EndTravelDataTime: e.target.value,
                              }))
                            }
                            ref={initialRef}
                            pr="0.8rem"
                            textAlign="right"
                          />
                          <InputLeftElement width="2.5rem">
                            <FaRegCalendar color="gray" />
                          </InputLeftElement>
                        </InputGroup>
                      </FormControl>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="w-full">
                      <FormControl>
                        <FormLabel>قیمت تور</FormLabel>
                        <Input
                          value={formData.Price}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              Price: Number(e.target.value) || 0,
                            }))
                          }
                          type="number"
                          min="0"
                          ref={initialRef}
                        />
                      </FormControl>
                    </div>
                    <div className="w-full">
                      <FormControl>
                        <FormLabel>ظرفیت تور</FormLabel>
                        <Input
                          value={formData.Quantity}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              Quantity: Number(e.target.value) || 0,
                            }))
                          }
                          type="number"
                          min="0"
                          ref={initialRef}
                        />
                      </FormControl>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-full">
                      <FormControl>
                        <FormLabel>مدت زمان تور</FormLabel>
                        <Input
                          value={formData.Los}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              Los: e.target.value,
                            }))
                          }
                          ref={initialRef}
                        />
                      </FormControl>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-full">
                      <FormControl>
                        <FormLabel>وسیله حمل و نقل سفر</FormLabel>
                        <Select
                          value={formData.Transportation}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              Transportation: e.target.value,
                            }))
                          }
                          className="appearance-none w-full !pr-8"
                          icon={<IoMdArrowDropdown />}
                          iconSize="1.5em"
                          iconColor="gray"
                        >
                          <option value="" disabled selected>
                            انتخاب کنید
                          </option>
                          {Vehicle.map((item, index) => (
                            <option key={index} value={item.name}>
                              {item.name}
                            </option>
                          ))}
                        </Select>
                      </FormControl>
                    </div>
                    <div className="w-full">
                      <FormControl>
                        <FormLabel>برگزار کننده تور</FormLabel>
                        <Select
                          value={formData.Tourleader}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              Tourleader: e.target.value,
                            }))
                          }
                          className="appearance-none w-full !pr-8"
                          icon={<IoMdArrowDropdown />}
                          iconSize="1.5em"
                          iconColor="gray"
                        >
                          <option value="" disabled selected>
                            انتخاب کنید
                          </option>
                          {iranianAirlines.map((item, index) => (
                            <option key={index} value={item.name}>
                              {item.name}
                            </option>
                          ))}
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                  <FormControl>
                    <FormLabel htmlFor="Tourcancellationrules">
                      قوانین کنسلی تور
                    </FormLabel>
                    <Textarea
                      value={formData.CancleRulesTour}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          CancleRulesTour: e.target.value,
                        }))
                      }
                      className="!min-h-[30px]"
                      id="Tourcancellationrules"
                    />
                  </FormControl>
                  <div className="flex gap-3">
                    <div className="w-full">
                      <FormLabel>زیر مجموعه خود را انتخاب نمایید</FormLabel>
                    </div>
                  </div>
                  <div className="flex justify-around items-center w-full !border-2 !border-blue-400 rounded-md p-2 !bg-white/40">
                    <div className="">
                      {preview ? (
                        <img
                          src={
                            preview.startsWith("http")
                              ? preview
                              : `${BASE_URL}${preview}`
                          }
                          alt="Uploaded"
                          className="w-30 h-30 object-cover rounded-md"
                        />
                      ) : (
                        <div className="px-4 py-2 !border-2 !border-blue-400 flex justify-center items-center rounded-md whitespace-nowrap text-center">
                          <p className="!text-sm">پیش‌نمایش عکس محصول</p>
                        </div>
                      )}
                    </div>
                    <div className="">
                      <p className="!text-[13px]">
                        برای آپلود فایل روی این دکمه کلیک نمایید
                      </p>
                      <label
                        htmlFor="file-upload"
                        className="cursor-pointer bg-blue-500 text-white py-1 rounded-[3px] hover:bg-blue-600 flex justify-center items-center"
                      >
                        {uploading ? "در حال آپلود..." : "آپلود"}
                      </label>
                      <input
                        id="file-upload"
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="hidden"
                        disabled={uploading}
                      />
                    </div>
                  </div>
                </div>
              </ModalBody>

              <div className="absolute bottom-4 left-4 flex  gap-4 ">
                <Button
                  className="hover:!bg-blue-400 hover:!text-white"
                  onClick={handleClose}
                  width={"10rem"}
                >
                  بازگشت
                </Button>
                <Button
                  onClick={handelAddProduct}
                  className="hover:!bg-blue-400 hover:!text-white"
                  width={"10rem"}
                >
                  {isEditMode ? "ویرایش محصول " : " افزودن محصول"}
                </Button>
              </div>
            </ModalContent>
          </Modal>
        </>
      )}
    </div>
  );
};

export default ModalAddProduct;
