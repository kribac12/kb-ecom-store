import { useEffect } from "react";
import useProductStore from "../../store/useProductStore";
import ProductCard from "../../components/ProductCard";
import { HeroImage, Title, ProductCardsContainer } from "./Home.styles";
import heroImage from "../../assets/images/hero.jpeg";

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
    <>
      <HeroImage image={heroImage}></HeroImage>
      <Title>Browse Our Products</Title>
      <ProductCardsContainer>
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductCardsContainer>
    </>
  );
};

export default Home;
