import { FaShoppingCart } from "react-icons/fa";
import useProductStore from "../../store/useProductStore";
import * as S from "./CartIcon.styles";

function CartIcon() {
  const itemCount = useProductStore((state) => state.getItemCount());

  return (
    <S.CartIconContainer to="/checkout">
      <FaShoppingCart size="1.5em" aria-label="Shopping Cart" />
      <S.ItemCount>{itemCount}</S.ItemCount>
    </S.CartIconContainer>
  );
}

export default CartIcon;
