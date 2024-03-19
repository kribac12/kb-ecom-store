import { Link } from "react-router-dom";
import { calculateDiscountPercentage } from "../../utils/calculateDiscountPercentage";
import * as S from "./ProductCard.styles";
import * as P from "../../styles/sharedStyles";
import PropTypes from "prop-types";
import StyledButton from "../StyledButton";

const ProductCard = ({ product }) => {
  const discountPercentage = calculateDiscountPercentage(product.price, product.discountedPrice);
  return (
    <S.Card>
      <S.ProductImageContainer>
        <S.ProductImage src={product.image.url} alt={product.image.alt} />
        {product.discountedPrice < product.price && <P.DiscountPercentage>{discountPercentage}% OFF</P.DiscountPercentage>}
      </S.ProductImageContainer>
      <S.ProductInfo>
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
      </S.ProductInfo>
      <Link to={`/product/${product.id}`}>
        <StyledButton variant="primary" size="large" margin="1rem">
          View Product
        </StyledButton>
      </Link>
    </S.Card>
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
