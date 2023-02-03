import React, { Fragment, useState } from "react";
import styles from "@/styles/Order.module.scss";
import Image from "next/image";
import { cart } from "@/data/data";
import { useSelector } from "react-redux";
import { dispatch } from "@/redux/store";
import { addAmount } from "@/redux/reducers/cart";

// import goatmeat from "../images/populate/goatmeat.png";
// import { Rating } from "react-simple-star-rating";

function Cart() {
  const cartlist = useSelector((state) => state.cart);
  function AddAmount() {
    dispatch(addAmount({ num: 1003 }));
  }
  

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
            {/* Avtive Orders */}

            <div className={styles.OrderDetails}>
              <div className="d-flex justify-content-between  ">
                {/* <dl>
                      <dt>Order ID- {data.id}</dt>
                      <dt>{data.products.length} Item(s) Order Placed</dt>
                    </dl> */}

                <button className="bg-primary" type="">
                  Cart
                </button>
              </div>

              <hr />

              <dl className="d-flex justify-content-between  ">
                {/* <dd>Date & Time</dd> */}
                <dd>{/* {data.date} I {data.time} */}</dd>
              </dl>

              <h5>Your Order</h5>
              <ul>
                {cartlist.items.map((product, index) => {
                  return (
                    <li
                      key={index}
                      className="d-flex justify-content-between mb-2 py-2"
                    >
                      <div className="d-flex justify-content-between ">
                        <Image
                          src={product.image}
                          alt={product.name}
                          width={100}
                          height={101}
                          style={{
                            objectFit: "contain",
                          }}
                          priority
                        />{" "}
                        <div>
                          <h4>{product.name}</h4>
                          <p>{product.description}</p>
                          <del className="me-3">{product.orgprice}</del>
                          <b>{product.price}</b>
                        </div>
                      </div>
                      <span>Qty-{product.quantity}</span>
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
