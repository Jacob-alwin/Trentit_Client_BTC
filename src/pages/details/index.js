import React, { Fragment, useState } from "react";
import styles from "@/styles/Details.module.scss";
import { motion } from "framer-motion";
// import Carousel3d from "../../../common/Carousel3d";
// import RS from "../../images/Svg/Rs.svg";

function details() {
  return (
    <Fragment>
      <div className={styles.LapDetails}>
        {/* <Carousel3d /> */}
        <div className={styles.Container + " d-flex justify-content-between"}>
          <div className={styles.Slide}>
            <div className={styles.ShortDes + " "}>
              <p>ijijijijijij</p>
            </div>
            <div className={styles.LongDes}>
              <div className={styles.Configurations}>
                <h1>General Information</h1>
                <ul>
                  <li className="d-flex justify-content-between m-2">
                    <h2>RAM</h2>
                    <h2>4GB</h2>
                  </li>
                  <li className="d-flex justify-content-between m-2">
                    <h2>RAM</h2>
                    <h2>4GB</h2>
                  </li>
                  <li className="d-flex justify-content-between m-2">
                    <h2>RAM</h2>
                    <h2>4GB</h2>
                  </li>
                  <li className="d-flex justify-content-between m-2">
                    <h2>RAM</h2>
                    <h2>4GB</h2>
                  </li>
                  <li className="d-flex justify-content-between m-2">
                    <h2>RAM</h2>
                    <h2>4GB</h2>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.Details + " "}>
            <div className={styles.ShortInfo}>
              <h1>Bike 2022</h1>

              <h4>
                12/22/2222
                <p>Auction Date</p>
              </h4>
              <li>
                <h2>₹ 200000</h2>
              </li>
              <h5>Banglore</h5>
              <h5>Karnataka</h5>

              <motion.div className={styles.favourite + " d-flex m-2 "}>
                <motion.i
                  whileHover={{ scale: 1.2 }}
                  //   className={fav ? "bi bi-heart-fill" : "bi bi-heart"}
                  className={"bi bi-heart"}
                ></motion.i>
              </motion.div>
            </div>
            <div className={styles.SellerInfo}>
              <button className="btn btn-primary">
                Location in map
              </button>
            </div>
            <div className={styles.SellerInfo}>
              <h2>Love</h2>
              {/* <div className={styles.SellerMessage}>
                <input type="hidden" name="userId" value={data.createdBy._id} />
                <input type="text" placeholder="Message.." ref={chatMessage} />
                <i
                  className="bi bi-send-fill"
                  style={{
                    cursor: "pointer",
                  }}
                ></i>
              </div> */}
            </div>
            <div className={styles.bottomBanner}>
              <div className={styles.sellBanner}>
                <div>
                  <h2>Post your Ad for free</h2>
                </div>

                <button>
                  <span></span>

                  {/* <img src={RS} alt="RS" /> */}
                  <h5>Sell</h5>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* <div className={styles.RelatedAds}>
          <Carousel
            className={styles.carousel}
          >
            {
              !recomendedProducts.loading ? recomendedProducts.data?.map((item, index) => (
                <LapCard index={index} data={item} />
              )) : <h4>Loading...</h4>



            }

          </Carousel>
         
        </div> */}
      </div>
    </Fragment>
  );
}

export default details;
