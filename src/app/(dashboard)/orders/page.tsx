// const transformedData =
//   localData && localData.length > 0
//     ? localData.map((order: any) => {
//         console.log("Current Order:", order);
//         console.log("Price:", order.Price, typeof order.Price);
//         console.log("Quantity:", order.Quantity, typeof order.Quantity);

//         const registrationDate = order.createdAt
//           ? moment(order.deliveryDate).locale("fa").format("YYYY/MM/DD")
//           : "نامشخص";

//         return {
//           id: order.id,
//           userName: order.customer_name || "ناشناس",
//           Price: order.totalprice || order.Price || 0,
//           Quantity: order.Quantity || order.items?.[0]?.Quantity || 0,
//           Registrationtime: registrationDate,
//           Deliverystatus:
//             order.status === "delivered" ? (
//               <AiOutlineCheckCircle className="!text-2xl !text-green-700" />
//             ) : (
//               <AiOutlineCloseCircle className="!text-2xl !text-red-500" />
//             ),
//           Activity: (
//             <button
//               onClick={() => {
//                 setIsOpenModal(true);
//                 setSelectedOrder(order);
//               }}
//             >
//               بررسی سفارش
//             </button>
//           ),
//         };
//       })
//     : [];
