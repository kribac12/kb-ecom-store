import create from "zustand";
import axios from "axios";

const useProductStore = create((set) => ({
  products: [],
  isLoading: false,
  isError: false,
  fetchProducts: async () => {
    set({ isLoading: true, isError: false });
    try {
      const response = await axios.get("https://v2.api.noroff.dev/online-shop");
      set({ products: response.data.data, isLoading: false });
    } catch (error) {
      console.error("Failed to fetch products:", error);
      set({ products: [], isLoading: false, isError: true });
    }
  },
}));

export default useProductStore;
