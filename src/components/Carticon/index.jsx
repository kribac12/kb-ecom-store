import { FaShoppingCart } from "react-icons/fa";
import useProductStore from "../../store/useProductStore";
import { CartIconContainer, ItemCount } from "./CartIcon.styles";

const CartIcon = () => {
  const itemCount = useProductStore((state) => state.getItemCount());

  return (
    <CartIconContainer to="/checkout">
      <FaShoppingCart size="1.5em" />
      <ItemCount>{itemCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
