import * as S from "./CheckoutSuccessPage.styles";

function CheckoutSuccessPage() {
  return (
    <S.SuccessContainer>
      <S.SuccessTitle>Order Successful</S.SuccessTitle>
      <S.SuccessMessageCheckout>Your order has been placed successfully.</S.SuccessMessageCheckout>
      <S.BackLink to="/" variant="primary" size="large" margin="1rem">
        Go back to the store
      </S.BackLink>
    </S.SuccessContainer>
  );
}

export default CheckoutSuccessPage;
