import { useEffect } from "react";
import useApi from "../../services/api";
import useProductStore from "../../store/useProductStore";
import ProductCard from "../../components/ProductCard";
import * as S from "./Home.styles";
import heroImage from "../../assets/images/hero.jpeg";

function Home() {
  const { data, isLoading, isError } = useApi("https://v2.api.noroff.dev/online-shop");
  const { setProducts, filteredProducts, setSearchTerm } = useProductStore();

  useEffect(() => {
    if (data) {
      setProducts(data.data);
    }
    setSearchTerm("");
  }, [data, setSearchTerm, setProducts]);

  if (isLoading) return <div>Loading products...</div>;
  if (isError) return <div>Error loading products.</div>;

  return (
    <div>
      <S.HeroImage image={heroImage} />
      <S.Title>Browse Our Products</S.Title>
      <S.ProductCardsContainer>
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </S.ProductCardsContainer>
    </div>
  );
}

export default Home;
