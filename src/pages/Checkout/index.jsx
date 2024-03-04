import useProductStore from "../../store/useProductStore";
import { useNavigate } from "react-router-dom";
import { CartContainer, CartItem, CartItemDetails, CartItemImage, CartItemTitle, CartItemPrice, TotalPrice } from "./Checkout.styles";
import StyledButton from "../../components/StyledButton";

const CheckoutPage = () => {
  const navigate = useNavigate();
  const { cartItems, removeFromCart, clearCart } = useProductStore((state) => ({
    cartItems: state.cartItems,
    removeFromCart: state.removeFromCart,
    clearCart: state.clearCart,
  }));

  const handleCheckout = () => {
    clearCart();
    navigate("/checkout-success", { replace: true });
  };

  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <CartContainer>
      {cartItems.length > 0 ? (
        <>
          {cartItems.map((item) => (
            <CartItem key={item.id}>
              <CartItemImage src={item.image.url} alt={item.image.alt} />
              <CartItemDetails>
                <CartItemTitle>{item.title}</CartItemTitle>
                <CartItemPrice>
                  ${item.price} x {item.quantity}
                </CartItemPrice>
                <StyledButton variant="delete" size="medium" onClick={() => removeFromCart(item.id)}>
                  Remove
                </StyledButton>
              </CartItemDetails>
            </CartItem>
          ))}
          <TotalPrice>Total: ${totalPrice.toFixed(2)}</TotalPrice>
          <StyledButton variant="primary" size="large" onClick={handleCheckout}>
            Checkout
          </StyledButton>
        </>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </CartContainer>
  );
};

export default CheckoutPage;
