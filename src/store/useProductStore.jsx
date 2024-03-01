import { create } from "zustand";
import { fetchProducts } from "../services/api";

const useProductStore = create((set, get) => ({
  products: [],
  filteredProducts: [],
  isLoading: false,
  isError: false,
  searchTerm: "",
  fetchProducts: async () => {
    set({ isLoading: true, isError: false });
    try {
      const products = await fetchProducts();
      set({ products, isLoading: false });
      get().filterProducts(get().searchTerm);
    } catch (error) {
      console.error("Failed to fetch products:", error);
      set({ products: [], isLoading: false, isError: true });
    }
  },
  setSearchTerm: (term) => {
    set({ searchTerm: term });
    get().filterProducts(term);
  },
  filterProducts: (term) => {
    if (term.trim() === "") {
      set({ filteredProducts: get().products });
    } else {
      const filtered = get().products.filter((product) => product.title.toLowerCase().includes(term.toLowerCase()));
      set({ filteredProducts: filtered });
    }
  },
  cartItems: [],
  addToCart: (item) => {
    set((state) => {
      const existingItemIndex = state.cartItems.findIndex((cartItem) => cartItem.id === item.id);
      if (existingItemIndex >= 0) {
        // Item exists, update item count
        const updatedCartItems = state.cartItems.map((cartItem, index) =>
          index === existingItemIndex ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        );
        return { cartItems: updatedCartItems };
      } else {
        // Item does not exist, add new item
        return { cartItems: [...state.cartItems, { ...item, quantity: 1 }] };
      }
    });
  },
  removeFromCart: (itemId) => {
    set((state) => {
      const updatedCartItems = state.cartItems.filter((item) => item.id !== itemId || (item.id === itemId && item.quantity > 1 ? --item.quantity : false));
      return { cartItems: updatedCartItems.filter((item) => item.quantity > 0) };
    });
  },
  getItemCount: () => get().cartItems.reduce((total, item) => total + item.quantity, 0),
  clearCart: () => set({ cartItems: [] }),
}));

export default useProductStore;
