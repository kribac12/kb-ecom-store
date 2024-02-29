import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ProductContainer, ContentContainer, ImageContainer, ProductDetails, ReviewsContainer, Review, AddToCartButton } from "./Product.styles";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

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

  return (
    <ProductContainer>
      <ContentContainer>
        {" "}
        {/* Wrap image and details */}
        <ImageContainer>
          <img src={product.image.url} alt={product.image.alt} />
        </ImageContainer>
        <ProductDetails>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          {/* Include other details like rating, price, and Add to Cart button */}
          <AddToCartButton>Add to Cart</AddToCartButton>
        </ProductDetails>
      </ContentContainer>
      <ReviewsContainer>
        {" "}
        {/* Keep reviews below */}
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
