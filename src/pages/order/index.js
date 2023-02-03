import React, { Fragment, useState } from "react";
import styles from "@/styles/Order.module.scss";
import Image from "next/image";
// import goatmeat from "../images/populate/goatmeat.png";
// import { Rating } from "react-simple-star-rating";
import { activeorder, completedorder, cancelledorder } from "@/data/data";

function Cart() {
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
  const order = [activeorder, completedorder, cancelledorder];

  return (
    <Fragment>
      <section className={styles.Order}>
        <div className={styles.OrderList}>
          <div>
            {order.map((ordertype, index) => {
              return (
                <div key={index}>
                  {ordertype.map((data, typeindex) => {
                    return (
                      <div className={styles.OrderDetails} key={typeindex}>
                        <div className="d-flex justify-content-between  ">
                          <dl>
                            <dt>Order ID- {data.id}</dt>
                            <dt>{data.products.length} Item(s) Order Placed</dt>
                          </dl>

                          {index === 0 ? (
                            <button type="">Active</button>
                          ) : index === 1 ? (
                            <button className="bg-success" type="">
                              Completed
                            </button>
                          ) : (
                            <button className="bg-secondary" type="">
                              Cancelled
                            </button>
                          )}
                        </div>

                        <hr />

                        <dl className="d-flex justify-content-between ">
                          <dd>Date & Time</dd>
                          <dd>
                            {data.date} I {data.time}
                          </dd>
                        </dl>

                        <h5>Your Order</h5>
                        {data.products.map((product, index) => {
                          return (
                            <ul>
                              <li className="d-flex justify-content-between mb-2 ">
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
                                    <del className="me-3">
                                      {product.orgprice}
                                    </del>
                                    <b>{product.price}</b>
                                  </div>
                                </div>
                                <span>Qty-{product.quantity}</span>
                              </li>
                            </ul>
                          );
                        })}
                        <hr />
                        <div className="text-center">
                          <ul className={styles.bill}>
                            <li className=" ">
                              <b>Total</b>
                              <strong>{data.totalAmount}</strong>
                            </li>
                          </ul>
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
            })}
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
