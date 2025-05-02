"use client";
import Loading from "@/components/shared/Loading/Loading";
import React from "react";
import "./ProductCard.css";

interface Product {
  Category: string;
  id: string;
  TourName: string;
  Price: string;
  NewPrice?: string;
  Image: string[];
  Los: string;
  Pres: string;
  Star: string;
  Moveday: string;
  gridRows?: number;
  Destination?: string;
}

type VariantType = "discount" | "normal";

interface ProductCardProps {
  product: Product | null;
  gridRows?: number;
  variant: VariantType;
  timer?: number;
  isLoading?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  gridRows,
  timer,
  variant = "normal",
  isLoading = false,
}) => {
  if (isLoading) {
    return <Loading message="در حال بارگذاری محصول..." />;
  }

  if (!product || !product.id) {
    return <Loading message="محصول در دسترس نیست" />;
  }

  const renderTourIcon = (Category: string, Destination?: string) => {
    // ... rest of the existing code ...
  };

  // ... rest of the existing code ...
};
