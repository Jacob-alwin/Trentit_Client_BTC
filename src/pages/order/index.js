import React, { Fragment, useState } from "react";
import styles from "@/styles/Order.module.scss";
import Image from "next/image";

// import goatmeat from "../images/populate/goatmeat.png";
// import { Rating } from "react-simple-star-rating";

function Order() {
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

  return (
    <Fragment>
      <section className={styles.Order}>
        {/* <div className={styles.OrderType + " text-center"}>
          <input type="radio" id="active" name="drone" value="active" />
          <label htmlFor="active" className=" text-center">
            Active Orders{" "}
          </label>

          <input type="radio" id="completed" name="drone" value="completed" />
          <label htmlFor="completed">Completed Orders </label>

          <input type="radio" id="cancelled" name="drone" value="cancelled" />
          <label htmlFor="cancelled">Cancelled Orders </label>
        </div> */}

        <div className={styles.OrderList}>
          <div>
            {/* Avtive Orders */}

            <div className={styles.OrderDetails}>
              <div className="d-flex justify-content-between  ">
                <dl>
                  <dt>Order ID- 998070</dt>
                  <dt>2 Item(s) Order Placed</dt>
                </dl>
                <button type="">Active</button>
              </div>

              <hr />

              <dl className="d-flex justify-content-between ">
                <dd>Date & Time</dd>
                <dd>Dec 18,2021 I 14:27 Pm</dd>
              </dl>

              <h5>Your Order</h5>

              <ul>
                <li className="d-flex justify-content-between mb-2 ">
                  <div className="d-flex justify-content-between ">
                    <Image
                      src="/thirteen.svg"
                      alt="13"
                      width={100}
                      height={101}
                      style={{
                        objectFit: "contain",
                      }}
                      priority
                    />{" "}
                    <div>
                      <h4>Iphone 13</h4>
                      <p>900gms I Net: 450gms</p>
                      <del className="me-3">Rs.250</del>
                      <b>Rs.200</b>
                    </div>
                  </div>
                  <span>Qty-1</span>
                </li>
              </ul>

              <hr />

              <div className="text-center">
                <ul className={styles.bill}>
                  {/* <li className=" ">
                    <div>Item</div>
                    <div>Rs.400</div>
                  </li>
                  <hr />
                  <li className=" ">
                    <div>Delivery</div>
                    <div>Rs.40</div>
                  </li> */}
                  {/* <hr /> */}

                  <li className=" ">
                    <b>Total</b>
                    <strong>Rs.440</strong>
                  </li>
                </ul>
              </div>
            </div>

            {/* Completed Orders */}

            {/* <div className={styles.OrderDetails}>
              <div className="d-flex justify-content-between ">
                <dl>
                  <dt>Order ID- 998070</dt>
                  <dt>2 Item(s) Order Placed</dt>
                </dl>
                <button className="bg-success" type="">
                  Completed
                </button>
              </div>

              <hr />

              <dl className="d-flex justify-content-between ">
                <dd>Date & Time</dd>
                <dd>Dec 18,2021 I 14:27 Pm</dd>
              </dl>

              <h5>Your Order</h5>

              <ul>
                <li className="d-flex justify-content-between ">
                  <div className="d-flex justify-content-between ">
                    <img src={goatmeat} alt="" />
                    <div>
                      <h4>Polutry Chicken</h4>
                      <p>900gms I Net: 450gms</p>
                      <p>
                        <del className="me-3">Rs.250</del>
                        <b>Rs.200</b>
                      </p>
                    </div>
                  </div>
                  <span>Qty-1</span>
                </li>
              </ul>

              <hr />

              <div className="text-center">
                <ul className={styles.bill}>
                  <li className=" ">
                    <div>Item</div>
                    <div>Rs.400</div>
                  </li>
                  <hr />
                  <li className=" ">
                    <div>Delivery</div>
                    <div>Rs.40</div>
                  </li>
                  <hr />

                  <li className=" ">
                    <b>Total</b>
                    <strong>Rs.440</strong>
                  </li>
                </ul>

            
              </div>
            </div>  */}

            {/* Cancelled Orders */}

            {/* <div className={styles.OrderDetails}>
              <div className="d-flex justify-content-between ">
                <dl>
                  <dt>Order ID- 998070</dt>
                  <dt>2 Item(s) Order Placed</dt>
                </dl>
                <button className="bg-secondary" type="">
                  Cancelled
                </button>
              </div>

              <hr />

              <dl className="d-flex justify-content-between ">
                <dd>Date & Time</dd>
                <dd>Dec 18,2021 I 14:27 Pm</dd>
              </dl>

              <h5>Your Order</h5>

              <ul>
                <li className="d-flex justify-content-between ">
                  <div className="d-flex justify-content-between ">
                    <img src={goatmeat} alt="" />
                    <div>
                      <h4>Polutry Chicken</h4>
                      <p>900gms I Net: 450gms</p>
                      <p>
                        <del className="me-3">Rs.250</del>
                        <b>Rs.200</b>
                      </p>
                    </div>
                  </div>
                  <span>Qty-1</span>
                </li>
              </ul>

              <hr />

              <div className="text-center">
                <ul className={styles.bill}>
                  <li className=" ">
                    <div>Item</div>
                    <div>Rs.400</div>
                  </li>
                  <hr />
                  <li className=" ">
                    <div>Delivery</div>
                    <div>Rs.40</div>
                  </li>
                  <hr />

                  <li className=" ">
                    <b>Total</b>
                    <strong>Rs.440</strong>
                  </li>
                </ul>

             
              </div>
            </div> */}
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

export default Order;
