import { Link } from "react-router-dom";
import { calculateDiscountPercentage } from "../../utils/calculateDiscountPercentage";
import { Card, ProductImageContainer, ProductImage, ProductInfo } from "./ProductCard.styles";
import { ProductPrice, OriginalPrice, DiscountPercentage, ProductTitle, StarIcon, ProductDescription, ProductRating } from "../../styles/sharedStylesProducts";
import PropTypes from "prop-types";
import StyledButton from "../StyledButton";

const ProductCard = ({ product }) => {
  const discountPercentage = calculateDiscountPercentage(product.price, product.discountedPrice);
  return (
    <Card>
      <ProductImageContainer>
        <ProductImage src={product.image.url} alt={product.image.alt} />
        {product.discountedPrice < product.price && <DiscountPercentage>{discountPercentage}% OFF</DiscountPercentage>}
      </ProductImageContainer>
      <ProductInfo>
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
      </ProductInfo>
      <Link to={`/product/${product.id}`}>
        <StyledButton variant="primary" size="large" margin="1rem">
          View Product
        </StyledButton>
      </Link>
    </Card>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    price: PropTypes.number.isRequired,
    discountedPrice: PropTypes.number,
    image: PropTypes.shape({
      url: PropTypes.string.isRequired,
      alt: PropTypes.string,
    }),
    rating: PropTypes.number,
    tags: PropTypes.arrayOf(PropTypes.string),
    reviews: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        description: PropTypes.string,
      })
    ),
  }).isRequired,
};

export default ProductCard;
