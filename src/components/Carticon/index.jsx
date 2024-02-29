import PropTypes from "prop-types";
import { FaShoppingCart } from "react-icons/fa";
import { CartIconContainer, ItemCount } from "./CartIcon.styles";

const CartIcon = ({ itemCount }) => {
  return (
    <CartIconContainer to="/cart">
      <FaShoppingCart size="1.5em" />
      <ItemCount>{itemCount}</ItemCount>
    </CartIconContainer>
  );
};

CartIcon.propTypes = {
  itemCount: PropTypes.number.isRequired,
};

export default CartIcon;
