import useProductStore from "../../store/useProductStore";
import { useNavigate } from "react-router-dom";
import { CartContainer, CartItem, CartItemDetails, CartItemImage, CartItemTitle, CartItemPrice, RemoveButton, TotalPrice, CheckoutButton } from "./Cart.styles";

const CartPage = () => {
  const navigate = useNavigate();
  const { cartItems, removeFromCart, clearCart } = useProductStore((state) => ({
    cartItems: state.cartItems,
    removeFromCart: state.removeFromCart,
    clearCart: state.clearCart,
  }));

  const handleCheckout = () => {
    clearCart();
    navigate("checkout");
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
                <RemoveButton onClick={() => removeFromCart(item.id)}>Remove</RemoveButton>
              </CartItemDetails>
            </CartItem>
          ))}
          <TotalPrice>Total: ${totalPrice.toFixed(2)}</TotalPrice>
          <CheckoutButton onClick={handleCheckout}>Checkout</CheckoutButton>
        </>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </CartContainer>
  );
};

export default CartPage;
