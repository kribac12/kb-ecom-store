import { useEffect } from "react";
import useProductStore from "../../store/useProductStore";
import ProductCard from "../../components/ProductCard";
import * as S from "./Home.styles";
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
    <div>
      <S.HeroImage image={heroImage}></S.HeroImage>
      <S.Title>Browse Our Products</S.Title>
      <S.ProductCardsContainer>
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </S.ProductCardsContainer>
    </div>
  );
};

export default Home;
