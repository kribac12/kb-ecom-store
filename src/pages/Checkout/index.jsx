import useProductStore from "../../store/useProductStore";
import { useNavigate } from "react-router-dom";

import * as S from "./Checkout.styles";
import StyledButton from "../../components/StyledButton";

function CheckoutPage() {
  const navigate = useNavigate();
  const { cartItems, removeFromCart, clearCart } = useProductStore((state) => ({
    cartItems: state.cartItems,
    removeFromCart: state.removeFromCart,
    clearCart: state.clearCart,
  }));

  function handleCheckout() {
    clearCart();
    navigate("/checkout-success", { replace: true });
  }

  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <S.CartContainer>
      {cartItems.length > 0 ? (
        <>
          {cartItems.map((item) => (
            <S.CartItem key={item.id}>
              <S.CartItemImage src={item.image.url} alt={item.image.alt} />
              <S.CartItemDetails>
                <S.CartItemTitle>{item.title}</S.CartItemTitle>
                <S.CartItemPrice>
                  ${item.price} x {item.quantity}
                </S.CartItemPrice>
                <StyledButton variant="delete" size="medium" onClick={() => removeFromCart(item.id)}>
                  Remove
                </StyledButton>
              </S.CartItemDetails>
            </S.CartItem>
          ))}
          <S.TotalPrice>Total: ${totalPrice.toFixed(2)}</S.TotalPrice>
          <p>
            <S.CartLink to="/">Continue shopping</S.CartLink>
          </p>

          <StyledButton variant="primary" size="fullWidth" margin="20px auto" onClick={handleCheckout}>
            Checkout
          </StyledButton>
        </>
      ) : (
        <S.EmptyCartMessage>
          Oh no! Your cart is empty. <S.CartLink to="/">Go back to our beautiful products.</S.CartLink>
        </S.EmptyCartMessage>
      )}
    </S.CartContainer>
  );
}

export default CheckoutPage;
