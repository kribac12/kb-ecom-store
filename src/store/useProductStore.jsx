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
  addToCart: (item) =>
    set((state) => {
      const existingItemIndex = state.cartItems.findIndex((cartItem) => cartItem.id === item.id);
      let newCartItems = [];
      if (existingItemIndex >= 0) {
        //Item exists, update item count
        newCartItems = state.cartItems.map((cartItem, index) => (index === existingItemIndex ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem));
      } else {
        newCartItems = [...state.cartItems, { ...item, quantity: 1 }];
      }
      return { cartItems: newCartItems };
    }),
  removeFromCart: (itemId) =>
    set((state) => {
      const existingItem = state.cartItems.find((item) => item.id === itemId);
      let newCartItems = [];
      if (existingItem && existingItem.quantity > 1) {
        newCartItems = state.cartItems.map((item) => (item.id === itemId ? { ...item, quantity: item.quantity - 1 } : item));
      } else {
        newCartItems = state.cartItems.filter((item) => item.id !== itemId);
      }

      return { cartItems: newCartItems };
    }),
  getItemCount: () => get().cartItems.reduce((total, item) => total + item.quantity, 0),
  clearCart: () => set({ cartItems: [] }),
}));

export default useProductStore;
