import { useEffect, useState } from "react"; // Add useState to import statement
import { useParams } from "react-router-dom";
import axios from "axios";
import * as S from "./Product.styles";
import { calculateDiscountPercentage } from "../../utils/calculateDiscountPercentage";
import * as P from "../../styles/sharedStylesProducts";
import StyledButton from "../../components/StyledButton";
import useProductStore from "../../store/useProductStore";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isAddedToCart, setIsAddedToCart] = useState(false); // Define isAddedToCart state

  // Get addToCart function from store
  const addToCart = useProductStore((state) => state.addToCart);

  useEffect(() => {
    const fetchProduct = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`https://v2.api.noroff.dev/online-shop/${id}`);
        setProduct(response.data.data);
      } catch (error) {
        console.error("Failed to fetch product details:", error);
        setIsError(true);
      }
      setIsLoading(false);
    };

    fetchProduct();
  }, [id]);

  // Handle add to cart button click
  const handleAddToCart = () => {
    addToCart({ ...product, quantity: 1 });
    setIsAddedToCart(true);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsAddedToCart(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, [isAddedToCart]);

  if (isLoading) return <div>Loading product...</div>;
  if (isError || !product) return <div>Error loading product.</div>;

  const discountPercentage = calculateDiscountPercentage(product.price, product.discountedPrice);

  return (
    <S.ProductContainer>
      <S.ContentContainer>
        <S.ImageContainer>
          <img src={product.image.url} alt={product.image.alt} />
          {product.discountedPrice < product.price && <P.DiscountPercentage>{discountPercentage}% OFF</P.DiscountPercentage>}
        </S.ImageContainer>
        <S.ProductDetails>
          <P.ProductTitle>{product.title}</P.ProductTitle>
          <P.ProductDescription>{product.description}</P.ProductDescription>
          <P.ProductRating>
            <P.StarIcon />
            {product.rating}
          </P.ProductRating>

          <P.ProductPrice>
            {product.discountedPrice < product.price ? (
              <>
                <P.OriginalPrice>${product.price}</P.OriginalPrice>
                <span>${product.discountedPrice}</span>
              </>
            ) : (
              <span>${product.price}</span>
            )}
          </P.ProductPrice>

          <StyledButton variant="primary" size="large" onClick={handleAddToCart}>
            Add to Cart
          </StyledButton>
          {isAddedToCart && <S.AddedToCartMessage>Item added to cart!</S.AddedToCartMessage>}
        </S.ProductDetails>
      </S.ContentContainer>
      <S.ReviewsContainer>
        {product.reviews &&
          product.reviews.map((review) => (
            <S.Review key={review.id}>
              <p>
                <strong>{review.username}</strong>: {review.description} - Rating: {review.rating}
              </p>
            </S.Review>
          ))}
      </S.ReviewsContainer>
    </S.ProductContainer>
  );
};

export default ProductPage;
