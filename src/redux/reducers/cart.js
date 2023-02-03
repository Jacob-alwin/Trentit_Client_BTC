import { createSlice } from "@reduxjs/toolkit";

const cartInitState = {
  items: [
    {
      id: 1,
      name: "Apple iPhone 12 Pro Max (Pacific Blue, 128 GB)",
      orgprice: 129900,
      price: 700000,
      image: "thirteen.svg",
      quantity: 1,
      description: "Apple iPhone 12 Pro Max (Pacific Blue, 128 GB) (6 GB RAM)",
      brand: "Apple",
      color: "Blue",
    },
    {
      id: 2,
      name: "Apple iPhone 12 Pro Max (Pacific Blue, 128 GB)",
      orgprice: 129900,
      price: 700000,
      quantity: 1,
      image: "thirteen.svg",
      description: "Apple iPhone 12 Pro Max (Pacific Blue, 128 GB) (6 GB RAM)",
      brand: "Apple",
      color: "Blue",
    },
  ],
  totalAmount: 30000,
};

const cartSlice = createSlice({
  name: "cart",

  initialState: cartInitState,
  reducers: {
    addAmount(state, action) {
      state.totalAmount = state.totalAmount + action.payload.num;
    },
    newItem(state, action) {
      state.items.push(action.payload.item);
      state.totalAmount =
        state.totalAmount +
        action.payload.item.price * action.payload.item.quantity;
    },
    removeItem(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
      state.totalAmount = state.totalAmount - action.payload.num;
    },
    updateItem(state, action) {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      const oldItem = state.items[index];
      state.totalAmount =
        state.totalAmount -
        oldItem.price * oldItem.quantity +
        action.payload.item.price * action.payload.item.quantity;
      state.items[index] = action.payload.item;
    },

    updateQuantity(state, action) {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      const oldItem = state.items[index];
      state.totalAmount =
        state.totalAmount -
        oldItem.price * oldItem.quantity +
        action.payload.item.price * action.payload.item.quantity;
      state.items[index] = action.payload.item;
    },
    setItems(state, action) {
      state.items = action.payload.items;
      state.totalAmount = action.payload.totalAmount;
    },
  },
});

export const { addAmount } = cartSlice.actions;

export default cartSlice.reducer;
