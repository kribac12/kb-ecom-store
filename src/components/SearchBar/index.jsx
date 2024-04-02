import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import useProductStore from "../../store/useProductStore";
import * as S from "./SearchBar.styles";

function SearchBar() {
  const searchTerm = useProductStore((state) => state.searchTerm);
  const setSearchTerm = useProductStore((state) => state.setSearchTerm);
  const navigate = useNavigate();
  const location = useLocation();

  // Function to handle search input change
  function handleSearchChange(event) {
    setSearchTerm(event.target.value);
    if (location.pathname !== "/") {
      navigate("/");
    }
  }

  // Effect to clear search term on unmount
  useEffect(() => {
    return () => {
      setSearchTerm("");
    };
  }, [setSearchTerm]);

  return (
    <S.SearchBarContainer>
      <S.Input type="text" id="search" placeholder="Search our products..." value={searchTerm} onChange={handleSearchChange} />
    </S.SearchBarContainer>
  );
}

export default SearchBar;
