import * as S from "./CheckoutSuccessPage.styles";

const CheckoutSuccessPage = () => {
  return (
    <S.SuccessContainer>
      <S.SuccessTitle>Order Successful</S.SuccessTitle>
      <S.SuccessMessage>Your order has been placed successfully.</S.SuccessMessage>
      <S.BackLink to="/">Go back to the store</S.BackLink>
    </S.SuccessContainer>
  );
};

export default CheckoutSuccessPage;
