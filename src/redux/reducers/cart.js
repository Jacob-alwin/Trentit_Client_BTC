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
  totalAmount: 0,
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
      console.log(action.payload);
      state.totalAmount =
        state.totalAmount + action.payload.price * action.payload.quantity;
      state.totalCount++;
      state.items.push(action.payload);
    },
    
    removeItem(state, action) {
      console.log(action.payload);
      console.log(state.items);
      alert("Item Removed cart in redux ");

      const index = state.items.findIndex(
        (item) => item._id === action.payload
      );
      if (index === -1) {
        alert("Item not found");
        return;
      }
      alert("Item found");
      state.totalAmount =
        state.totalAmount -
        state.items[index].price * state.items[index].quantity;
      state.totalCount = state.totalCount - state.items[index].quantity;
      state.items.splice(index, 1);
    },

  },
});

export const {
  InsertCart,
  newItem,
  IncrementItem,
  DecrementItem,
  removeItem,

  // removeItem,
  // updateItem,
  // updateQuantity,
  // setItems,
} = cartSlice.actions;

export default cartSlice.reducer;
