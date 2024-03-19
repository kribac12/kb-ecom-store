import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import * as S from "./Product.styles";
import { calculateDiscountPercentage } from "../../utils/calculateDiscountPercentage";
import * as SH from "../../styles/sharedStyles";
import StyledButton from "../../components/StyledButton";
import useProductStore from "../../store/useProductStore";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isAddedToCart, setIsAddedToCart] = useState(false);

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
    }, 5000);

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
          {product.discountedPrice < product.price && <SH.DiscountPercentage>{discountPercentage}% OFF</SH.DiscountPercentage>}
        </S.ImageContainer>
        <S.ProductDetails>
          <S.ProductTitleSpecific>{product.title}</S.ProductTitleSpecific>
          <SH.ProductDescription>{product.description}</SH.ProductDescription>
          <SH.ProductRating>
            <SH.StarIcon />
            {product.rating}
          </SH.ProductRating>
          <SH.ProductPrice>
            {product.discountedPrice < product.price ? (
              <>
                <SH.OriginalPrice>${product.price}</SH.OriginalPrice>
                <span>${product.discountedPrice}</span>
              </>
            ) : (
              <span>${product.price}</span>
            )}
          </SH.ProductPrice>

          <StyledButton variant="primary" size="large" onClick={handleAddToCart}>
            Add to Cart
          </StyledButton>
          {isAddedToCart && <SH.SuccessMessage>Item added to cart!</SH.SuccessMessage>}
        </S.ProductDetails>
      </S.ContentContainer>
      <S.ReviewsContainer>
        <h1>Reviews</h1>
        {product.reviews && product.reviews.length > 0 ? (
          product.reviews.map((review) => (
            <S.Review key={review.id}>
              <p>
                <strong>{review.username}</strong>: {review.description} - Rating: {review.rating}
              </p>
            </S.Review>
          ))
        ) : (
          <p>
            The product <strong>{product.title}</strong> has not received any reviews yet.
          </p>
        )}
      </S.ReviewsContainer>
    </S.ProductContainer>
  );
};

export default ProductPage;
