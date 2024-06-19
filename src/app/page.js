import { fetchAllProducts } from "@/actions";
import ProductCard from "@/components/productCard";
export default async function Home() {
  const allProducts = await fetchAllProducts();
  console.log(allProducts);
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {allProducts && allProducts.data && allProducts.data.length > 0 ? (
          allProducts.data.map((productItem) => (
            <ProductCard key={productItem.id} product={productItem} />
          ))
        ) : (
          <p>No products available</p>
        )}
      </div>
    </div>
  );
}
