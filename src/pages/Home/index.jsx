import { useEffect } from "react";
import useProductStore from "../../store/useProductStore";
import ProductCard from "../../components/ProductCard";

const Home = () => {
  const { filteredProducts, fetchProducts, setSearchTerm, isLoading, isError } = useProductStore();

  useEffect(() => {
    fetchProducts();
    setSearchTerm("");
  }, [fetchProducts, setSearchTerm]);

  if (isLoading) {
    return <div>Loading products...</div>;
  }

  if (isError) {
    return <div>Error loading products.</div>;
  }

  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Home;
