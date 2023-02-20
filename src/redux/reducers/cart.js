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
  totalCount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: cartInitState,
  reducers: {
    AddAmount(state, action) {
      action.payload.forEach((element) => {
        if (element.status === "deActive") return;
        state.totalAmount =
          state.totalAmount + element.price * element.quantity;
        state.totalCount = state.totalCount + element.quantity;
      });
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

export const {
  AddAmount,
  newItem,
  removeItem,
  updateItem,
  updateQuantity,
  setItems,
} = cartSlice.actions;

export default cartSlice.reducer;
