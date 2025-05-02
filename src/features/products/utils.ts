import { Product } from "./types";

export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat("fa-IR", {
    style: "currency",
    currency: "IRR",
  }).format(price);
};

export const validateProduct = (product: Partial<Product>): string[] => {
  const errors: string[] = [];

  if (!product.TourName) {
    errors.push("نام تور الزامی است");
  }

  if (product.Price === undefined || product.Price <= 0) {
    errors.push("قیمت باید بیشتر از صفر باشد");
  }

  if (product.Quantity === undefined || product.Quantity < 0) {
    errors.push("تعداد باید عدد مثبت باشد");
  }

  return errors;
};

export const filterProducts = (
  products: Product[],
  searchTerm: string
): Product[] => {
  if (!searchTerm) return products;

  return products.filter((product) =>
    product.TourName.toLowerCase().includes(searchTerm.toLowerCase())
  );
};

export const sortProducts = (
  products: Product[],
  sortBy: keyof Product,
  ascending: boolean = true
): Product[] => {
  return [...products].sort((a, b) => {
    const aValue = a[sortBy];
    const bValue = b[sortBy];

    if (typeof aValue === "string" && typeof bValue === "string") {
      return ascending
        ? aValue.localeCompare(bValue)
        : bValue.localeCompare(aValue);
    }

    return ascending
      ? Number(aValue) - Number(bValue)
      : Number(bValue) - Number(aValue);
  });
};
