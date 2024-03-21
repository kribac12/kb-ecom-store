import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import * as S from "./CheckoutSuccessPage.styles";
import StyledButton from "../../components/StyledButton";

function CheckoutSuccessPage() {
  return (
    <S.SuccessContainer>
      <Helmet>
        <title>Order Successful - BuySphere</title>
        <meta name="description" content="Your order has been placed successfully. Thank you for shopping with us!" />
      </Helmet>
      <S.SuccessTitle>Order Successful</S.SuccessTitle>
      <S.SuccessMessageCheckout>Your order has been placed successfully.</S.SuccessMessageCheckout>
      <StyledButton as={Link} to="/" variant="primary" size="large" margin="1rem">
        Go back to the store
      </StyledButton>
    </S.SuccessContainer>
  );
}

export default CheckoutSuccessPage;
