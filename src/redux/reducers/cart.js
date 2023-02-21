import { createSlice } from "@reduxjs/toolkit";

const cartInitState = {
  items: [
    // {
    //   _id: "63e88aeee2eb95eb1f572c76",
    //   product: {
    //     image: {
    //       key: "z11b7962a-96f8-413d-8246-e9c19a43f30f.jpeg",
    //       mimetype: "image/jpeg",
    //     },
    //     _id: "63e2181295c86176d6bad673",
    //     code: "TTO100",
    //     name: "Iphone",
    //     salePrice: 10000,
    //     quantity: 3,
    //   },
    //   user: {
    //     _id: "63e8732964a350d2cc0218f1",
    //     uid: "gyuftds",
    //     phone: "8870780689",
    //     name: "Gokul",
    //   },
    //   quantity: 3,
    //   validTime: "2023-02-12T07:00:02.438Z",
    //   status: "Active",
    //   createdAt: "2023-02-12T06:45:02.440Z",
    //   updatedAt: "2023-02-12T06:55:51.833Z",
    //   __v: 0,
    // },
  ],
  totalAmount: 30000,
  totalCount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: cartInitState,
  reducers: {
    InsertCart(state, action) {
      action.payload.forEach((element) => {
        // if (element.status === "deActive")
        if (state.items.findIndex((item) => item._id === element._id) === -1) {
          state.totalAmount =
            state.totalAmount + element.product.salePrice * element.quantity;
          state.totalCount++;

          state.items.push(element);
        }
        // console.log(element);
      });
    },

    IncrementItem(state, action) {
      state.items.forEach((element) => {
        if (element._id === action.payload._id) {
          element.quantity++;
          state.totalAmount = state.totalAmount + element.product.salePrice;
        }
      });
    },
    DecrementItem(state, action) {
      state.items.forEach((element) => {
        if (element._id === action.payload._id) {
          element.quantity--;
          state.totalAmount = state.totalAmount - element.product.salePrice;
        }
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

    // updateQuantity(state, action) {
    //   const index = state.items.findIndex(
    //     (item) => item.id === action.payload.id
    //   );
    //   const oldItem = state.items[index];
    //   state.totalAmount =
    //     state.totalAmount -
    //     oldItem.price * oldItem.quantity +
    //     action.payload.item.price * action.payload.item.quantity;
    //   state.items[index] = action.payload.item;
    // },
    // setItems(state, action) {
    //   state.items = action.payload.items;
    //   state.totalAmount = action.payload.totalAmount;
    // },
  },
});

export const {
  InsertCart,
  newItem,
  IncrementItem,
  DecrementItem,

  // removeItem,
  // updateItem,
  // updateQuantity,
  // setItems,
} = cartSlice.actions;

export default cartSlice.reducer;
