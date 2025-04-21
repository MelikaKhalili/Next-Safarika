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
import React, { useEffect, useRef, useState } from "react";
import { FaRegCalendar } from "react-icons/fa6";
import { IoMdArrowDropdown } from "react-icons/io";
import { AddProductModalProps } from "./modaladd";

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

export default function ModalAddProduct({
  isOpenModalAddProduct,
  setIsOpenModalAddProduct,
}: AddProductModalProps) {
  const initialRef = useRef(null);
  const finalRef = useRef(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
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
  };

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
                <ModalHeader className="!mr-8">افزودن تور جدید</ModalHeader>
                <ModalCloseButton className="!bg-blue-600 hover:!bg-red-600 absolute !top-4" />
              </div>
              <ModalBody pb={2}>
                <div className="grid  gap-3 grid-cols-2">
                  <FormControl>
                    <FormLabel>نام تور</FormLabel>
                    <Input ref={initialRef} />
                  </FormControl>
                  <div className="flex gap-3">
                    <div className="w-full">
                      <FormControl>
                        <FormLabel>تاریخ رفت</FormLabel>
                        <InputGroup>
                          <Input
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
                  <div className="flex gap-3">
                    <div className="w-full">
                      <FormControl>
                        <FormLabel>ظرفیت تور</FormLabel>
                        <Input ref={initialRef} />
                      </FormControl>
                    </div>
                    <div className="w-full">
                      <FormControl>
                        <FormLabel>مدت زمان تور</FormLabel>
                        <Input ref={initialRef} />
                      </FormControl>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-full">
                      <FormControl>
                        <FormLabel>وسیله حمل و نقل سفر</FormLabel>
                        <Select
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
                      className="!min-h-[30px]"
                      id="Tourcancellationrules"
                    />
                  </FormControl>
                  <div className="flex gap-3">
                    <div className="w-full">
                      <FormLabel>زیر مجموعه خود را انتخاب نمایید</FormLabel>
                    </div>
                  </div>
                  <div className="flex justify-around items-center w-full  !border-2 !border-blue-400 rounded-md p-2 !bg-white/40">
                    <div className="">
                      {preview ? (
                        <img
                          src={preview}
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
                        className="cursor-pointer bg-blue-500 text-white py-1  rounded-[3px] hover:bg-blue-600  flex justify-center items-center"
                      >
                        آپلود
                      </label>
                      <input
                        id="file-upload"
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="hidden"
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
                  className="hover:!bg-blue-400 hover:!text-white"
                  width={"10rem"}
                >
                  افزودن محصول
                </Button>
              </div>
            </ModalContent>
          </Modal>
        </>
      )}
    </div>
  );
}
