import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ProductContainer, ContentContainer, ImageContainer, ProductDetails, ReviewsContainer, Review, AddToCartButton } from "./Product.styles";
import { calculateDiscountPercentage } from "../../utils/calculateDiscountPercentage";
import { ProductPrice, OriginalPrice, DiscountPercentage, StarIcon, ProductTitle, ProductDescription, ProductRating } from "../../styles/sharedStylesProducts";
import useProductStore from "../../store/useProductStore";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

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

  if (isLoading) return <div>Loading product...</div>;
  if (isError || !product) return <div>Error loading product.</div>;

  const discountPercentage = calculateDiscountPercentage(product.price, product.discountedPrice);

  // Handle add to cart button click
  const handleAddToCart = () => {
    addToCart({ ...product, quantity: 1 });
  };

  return (
    <ProductContainer>
      <ContentContainer>
        <ImageContainer>
          <img src={product.image.url} alt={product.image.alt} />
          {product.discountedPrice < product.price && <DiscountPercentage>{discountPercentage}% OFF</DiscountPercentage>}
        </ImageContainer>
        <ProductDetails>
          <ProductTitle>{product.title}</ProductTitle>
          <ProductDescription>{product.description}</ProductDescription>
          <ProductRating>
            <StarIcon />
            {product.rating}
          </ProductRating>
          <ProductPrice>
            {product.discountedPrice < product.price ? (
              <>
                <OriginalPrice>${product.price}</OriginalPrice>
                <span>${product.discountedPrice}</span>
              </>
            ) : (
              <span>${product.price}</span>
            )}
          </ProductPrice>
          <AddToCartButton onClick={handleAddToCart}>Add to Cart</AddToCartButton>
        </ProductDetails>
      </ContentContainer>
      <ReviewsContainer>
        {product.reviews &&
          product.reviews.map((review) => (
            <Review key={review.id}>
              <p>
                <strong>{review.username}</strong>: {review.description} - Rating: {review.rating}
              </p>
            </Review>
          ))}
      </ReviewsContainer>
    </ProductContainer>
  );
};

export default ProductPage;
