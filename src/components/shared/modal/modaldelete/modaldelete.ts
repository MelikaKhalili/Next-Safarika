import Swal from "sweetalert2";

export default function showDeleteModal(onConfirm: () => void) {
  Swal.fire({
    title: "آیا اطمینان دارین از حذف کردن محصول ؟",
    text: "این عملیات قابل بازگشت نیست!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "بله، حذف کن!",
    cancelButtonText: "لغو",
  }).then((result) => {
    if (result.isConfirmed) {
      onConfirm();

      Swal.fire({
        title: "حذف شد!",
        text: "محصول با موفقیت حذف شد.",
        icon: "success",
      });
    }
  });
}
