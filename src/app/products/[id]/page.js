// src/app/products/[id]/page.js
"use client"
import { fetchAllProducts } from "@/actions";
import AddToCartButton from "@/components/addToCartButton";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const ProductPage = ({ params }) => {
  const router = useRouter();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const products = await fetchAllProducts();
      const allProducts = products.data;
      const foundProduct = allProducts.find((p) => p.id.toString() === params.id);
      setProduct(foundProduct);
    };

    if (params.id) {
      fetchProduct();
    }
  }, [params.id]);

  if (!product) {
    return <div className="container mx-auto p-4 text-center">Loading...</div>;
  }

  const {
    title,
    description,
    category,
    price,
    discountPercentage,
    rating,
    stock,
    warrantyInformation,
    shippingInformation,
    returnPolicy,
    minimumOrderQuantity,
    images,
    availabilityStatus,
  } = product;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">{title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="relative overflow-hidden rounded-lg shadow-md">
          <Image
            src={images?.[0]}
            alt={title}
            width={500}
            height={500}
            className="w-full h-auto rounded-lg"
            layout="responsive"
            priority // Optional: Preload image for better UX
          />
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-gray-500 text-sm mb-2">{category}</p>
          <p className="text-gray-700 mb-4 leading-relaxed">{description}</p>
          <div className="flex items-baseline mb-4">
            <span className="text-xl font-bold text-gray-900">${price.toFixed(2)}</span>
            <span className="text-sm text-red-500 ml-2">{discountPercentage}% off</span>
          </div>
          <p className="text-gray-600 mb-2">Stock: {stock}</p>
          <p className="text-green-600 font-semibold mb-4">{availabilityStatus}</p>
          <div className="mb-4">
            <p className="text-gray-600 mb-1">Warranty: {warrantyInformation}</p>
            <p className="text-gray-600 mb-1">Shipping: {shippingInformation}</p>
            <p className="text-gray-600 mb-1">Return Policy: {returnPolicy}</p>
            <p className="text-gray-600 mb-1">Minimum Order Quantity: {minimumOrderQuantity}</p>
          </div>
          <p className="text-gray-600">Rating: {rating}</p>
          <AddToCartButton product={product} />
          
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
