import { useNavigate } from "react-router-dom";
import useProductStore from "../../store/useProductStore";
import * as S from "./SearchBar.styles";

const SearchBar = () => {
  const setSearchTerm = useProductStore((state) => state.setSearchTerm);
  const navigate = useNavigate();
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    if (window.location.pathname !== "/") {
      navigate("/");
    }
  };

  return (
    <S.SearchBarContainer>
      <S.Input type="text" placeholder="Search our products..." onChange={handleSearchChange} />
    </S.SearchBarContainer>
  );
};

export default SearchBar;
