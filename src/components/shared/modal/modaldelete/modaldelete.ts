import Swal from "sweetalert2";
import "./modaldelete.css";

interface DeleteModalOptions {
  title?: string;
  text?: string;
  successTitle?: string;
  successText?: string;
  errorTitle?: string;
  errorText?: string;
}

export default function showDeleteModal(
  onConfirm: () => Promise<void>,
  options: DeleteModalOptions = {}
) {
  const {
    title = "آیا اطمینان دارین از حذف کردن این مورد؟",
    text = "این عملیات قابل بازگشت نیست!",
    successTitle = "حذف شد!",
    successText = "مورد مورد نظر با موفقیت حذف شد.",
    errorTitle = "خطا!",
    errorText = "در حین حذف مشکلی پیش آمد.",
  } = options;

  Swal.fire({
    title,
    text,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "بله، حذف کن!",
    cancelButtonText: "لغو",
    customClass: {
      container: "my-swal-container",
      popup: "my-swal-popup",
    },
  }).then(async (result) => {
    if (result.isConfirmed) {
      try {
        await onConfirm();
        Swal.fire({
          title: successTitle,
          text: successText,
          icon: "success",
          customClass: {
            container: "my-swal-container",
            popup: "my-swal-popup",
          },
        });
      } catch (error) {
        console.error("Delete error:", error);
        Swal.fire({
          title: errorTitle,
          text: errorText,
          icon: "error",
          customClass: {
            container: "my-swal-container",
            popup: "my-swal-popup",
          },
        });
      }
    }
  });
}
