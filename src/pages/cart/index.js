import React, { Fragment, useState } from "react";
import styles from "@/styles/Order.module.scss";
import Image from "next/image";
import { useSelector } from "react-redux";
import { dispatch } from "@/redux/store";
import {
  addAmount,
  DecrementItem,
  IncrementItem,
  InsertCart,
} from "@/redux/reducers/cart";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { DecrementCartItem, GetCart, IncrementCartItem } from "@/services/cart";

// import goatmeat from "../images/populate/goatmeat.png";
// import { Rating } from "react-simple-star-rating";

function Cart() {
  const queryClient = useQueryClient();

  const cartlist = useSelector((state) => state.cart);

  // Add iteems to cart
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const exist = cart.find((x) => x.id === product.id);
    if (exist) {
      setCart(
        cart.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  // Remove items from cart
  const removeFromCart = (product) => {
    const exist = cart.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCart(cart.filter((x) => x.id !== product.id));
    } else {
      setCart(
        cart.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  // const cartData = useQuery({
  //   queryKey: ["cartData"],
  //   queryFn: () => GetCart(),
  //   onSuccess: (data) => {
  //     if (data.success) {
  //       dispatch(InsertCart(data?.data));
  //     } else alert(data.message);
  //   },
  // });

  // useEffect(() => {

  // }, [cartData.data]);

  const AddNewOrder = useMutation(
    (product_id) => IncrementCartItem(product_id),
    {
      onSuccess: (data) => {
        if (data.success) {
          // #TODO: update cart data
        } else alert(data.message);
      },
    }
  );

  const IncrementMutation = useMutation(
    (product_id) => IncrementCartItem(product_id),
    {
      onSuccess: (data) => {
        if (data.success) {
          // #TODO: update cart data
          dispatch(IncrementItem(data?.data));
        } else alert(data.message);
      },
    }
  );

  const DecrementMutation = useMutation(
    (product_id) => DecrementCartItem(product_id),
    {
      onSuccess: (data) => {
        if (data.success) {
          // #TODO: update cart data
          console.log(data);
          dispatch(DecrementItem(data?.data));
        } else alert(data.message);
      },
    }
  );

  // const [rating, setRating] = useState(0);
  // // Catch Rating value
  // const handleRating = (rate: number) => {
  //   setRating(rate);

  //   // other logic
  // };
  // // Optinal callback functions
  // const onPointerEnter = () => console.log("Enter");
  // const onPointerLeave = () => console.log("Leave");
  // const onPointerMove = (value: number, index: number) =>
  //   console.log(value, index);

  // toatAmount from cart's product.price
  // const TotalAmount = cartlist.items.reduce((acc, curr) => {
  //   return acc + curr.price;
  // }, 0);

  return (
    <Fragment>
      <section className={styles.Order}>
        <div className={styles.OrderList}>
          <div>
            <div className={styles.OrderDetails}>
              <div className="d-flex justify-content-between  ">
                <dl>
                  <dt>My Cart</dt>
                  <dt>{cartlist.totalCount} Item(s) in Cart </dt>
                </dl>

                <button className="bg-success" type="">
                  Cart
                </button>
              </div>

              <hr />

              <dl className="d-flex justify-content-between  ">
                {/* <dd>Date & Time</dd> */}
                <dd>{/* {data.date} I {data.time} */}</dd>
              </dl>

              <h5>Your Cart</h5>
              <ul>
                {cartlist.items.map((data, index) => {
                  const product = data.product;
                  return (
                    <li
                      key={index}
                      className="d-flex justify-content-between mb-2 py-2"
                    >
                      <div className="d-flex justify-content-between ">
                        {/* <Image
                          src={product.image.key}
                          alt={product.name}
                          width={100}
                          height={101}
                          style={{
                            objectFit: "contain",
                          }}
                          priority
                        />{" "} */}
                        <div>
                          <h4>{product.name}</h4>
                          <p>{product.description}</p>
                          <del className="me-3">{product.orgprice}</del>
                          <b>{product.price}</b>
                        </div>
                      </div>
                      <div>
                        <span
                          onClick={() => {
                            // alert("Increment");
                            if (product.quantity >= 0) {
                              IncrementMutation.mutate(data._id);
                            }
                          }}
                          // className="btn btn-outline-primary"
                        >
                          +
                        </span>
                        Qty- {data.quantity}{" "}
                        <span
                          onClick={() => {
                            // alert("Decrement");

                            if (data.quantity > 1)
                              DecrementMutation.mutate(data._id);
                          }}
                          // className="btn btn-outline-primary"
                        >
                          -
                        </span>
                      </div>
                    </li>
                  );
                })}
              </ul>
              <hr />
              <div className="text-center">
                <ul className={styles.bill}>
                  <li className=" ">
                    <b>Total</b>
                    <strong>{cartlist.totalAmount}</strong>
                  </li>
                </ul>
                <button className="btn btn-outline-primary " type="">
                  Order
                </button>
              </div>
            </div>
          </div>

          <div className={styles.OrderType}>
            {/* <div className={styles.RateOrder}>
              <h4>Rate Youe Order</h4>
              <h5>How is the order?</h5>
              <p>Please rate order here...</p>
              <Rating
                onClick={handleRating}
                onPointerEnter={onPointerEnter}
                onPointerLeave={onPointerLeave}
                onPointerMove={onPointerMove}
              />
            </div> */}
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default Cart;
