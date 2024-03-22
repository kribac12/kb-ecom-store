import { Helmet } from "react-helmet";
import * as S from "./CheckoutSuccessPage.styles";

function CheckoutSuccessPage() {
  return (
    <S.SuccessContainer>
      <Helmet>
        <title>Order Successful - BuySphere</title>
        <meta name="description" content="Your order has been placed successfully. Thank you for shopping with us!" />
      </Helmet>
      <S.SuccessTitle>Order Successful</S.SuccessTitle>
      <S.SuccessMessageCheckout>Your order has been placed successfully.</S.SuccessMessageCheckout>
      <S.BackLink to="/" variant="primary" size="large" margin="1rem">
        Go back to the store
      </S.BackLink>
    </S.SuccessContainer>
  );
}

export default CheckoutSuccessPage;
