import * as S from "./CheckoutSuccessPage.styles";
import { Link } from "react-router-dom";
import StyledButton from "../../components/StyledButton";

const CheckoutSuccessPage = () => {
  return (
    <S.SuccessContainer>
      <S.SuccessTitle>Order Successful</S.SuccessTitle>
      <S.SuccessMessageCheckout>Your order has been placed successfully.</S.SuccessMessageCheckout>
      <StyledButton as={Link} to="/" variant="primary" size="large" margin="1rem">
        Go back to the store
      </StyledButton>
    </S.SuccessContainer>
  );
};

export default CheckoutSuccessPage;
