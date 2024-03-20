import { create } from "zustand";

const useProductStore = create((set, get) => ({
  products: [],
  filteredProducts: [],
  isLoading: false,
  isError: false,
  searchTerm: "",

  setProducts: (products) => {
    set({ products: products, filteredProducts: products });
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
      const existingItem = state.cartItems.find((item) => item.id === itemId);
      if (!existingItem) {
        return state;
      }
      if (existingItem.quantity > 1) {
        // If more than one of the item exists, reduce the quantity by one.
        return {
          ...state,
          cartItems: state.cartItems.map((item) => (item.id === itemId ? { ...item, quantity: item.quantity - 1 } : item)),
        };
      } else {
        // If only one item exists, remove it from the cart.
        return {
          ...state,
          cartItems: state.cartItems.filter((item) => item.id !== itemId),
        };
      }
    });
  },
  getItemCount: () => get().cartItems.reduce((total, item) => total + item.quantity, 0),
  clearCart: () => set({ cartItems: [] }),
}));

export default useProductStore;
