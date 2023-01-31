import React, { Fragment } from "react";
import styles from "@/styles/Home.module.scss";
import { motion, useInView } from "framer-motion";
import Carousel from "react-multi-carousel";
import Image from "next/image";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};
function home() {
  return (
    <Fragment>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={styles.homesection}
      >
        <div className={styles.bannersection}>
          <div className={styles.bannersection}>
            <div className={styles.banner}>
              <h2 className="animate__animated animate__fadeInDown">
                Buy your pre-owned product with
                <span>confidence...</span>
              </h2>
              <h5 className="animate__animated animate__fadeInUp">
                Trentit directly verify each product with many quality check and
                give you proper brief and actual image behalf of buyer.
              </h5>

              <div className={styles.bannerimg}>
                {/* <img src={mainbanner3} alt="White" /> */}
              </div>
            </div>
          </div>
        </div>

        <div className="scrollChanger"></div>

        <motion.div className={styles.categorysection}>
          <motion.div className={styles.category + " "}>
            <div
              className={
                styles.categoryContainer + " d-flex justify-content-around "
              }
            >
              {/* {data.map((data, index) => {
                return ( */}
              <Fragment>
                <motion.div
                  onClick={() => {
                    // handleClick(data.category.name);
                  }}
                  className={styles.categoryData + " d-flex  align-item-center"}
                >
                  {/* <motion.img
                    width={"40%"}
                    height={"40%"}
                    // src={
                    //   data.category.icon.mimetype !== "image/svg+xml"
                    //     ? ApiEndpoints.categoryImageURL + data.category.icon.key
                    //     : ApiEndpoints.categoryAwsURL +
                    //       data.category.icon.key.replace("+", "%2B")
                    // }
                    // alt={data.category.name}
                  /> */}
                  <Image
                    src="/thirteen.svg"
                    alt="13"
                    width={40}
                    height={31}
                    priority
                  />
                  <motion.h5>Phone</motion.h5>
                </motion.div>
              </Fragment>
              {/* ); })} */}
            </div>
          </motion.div>

          <div className={styles.categoryTile}>
            <div className={styles.categoryParallaxContainer}>
              <Fragment>
                {/* <div className={styles.freeSpace}></div> */}
                <div className={styles.categoryTileContainer + " my-5"}>
                  <div className={" p-3 "}>
                    <div
                      className={
                        styles.title + " d-flex justify-content-between"
                      }
                    >
                      <div className="categoryTitle hstack gap-3">
                        <h4>Phone</h4>
                        <div className={styles.exploreMore + " hstack gap-2"}>
                          <h6>Explore More </h6>
                          {/* <img
                              src={rightArrow}
                              width={6}
                              height={12}
                              alt={"explore more"}
                            /> */}
                        </div>
                      </div>
                      {/* <img
                        // src={
                        //   data.category.icon.mimetype !== "image/svg+xml"
                        //     ? ApiEndpoints.categoryImageURL +
                        //       data.category.icon.key
                        //     : ApiEndpoints.categoryAwsURL +
                        //       data.category.icon.key.replace("+", "%2B")
                        // }
                        width={43}
                        height={43}
                        alt=" "
                      /> */}
                      <Image
                        src="/vercel.svg"
                        alt="13"
                        width={43}
                        height={43}
                        priority
                      />
                    </div>
                    <Carousel
                      additionalTransfrom={0}
                      arrows
                      autoPlaySpeed={3000}
                      centerMode={false}
                      className="d-flex"
                      containerClass="carousel-container"
                      dotListClass=""
                      draggable
                      focusOnSelect={false}
                      infinite={false}
                      itemClass=""
                      keyBoardControl
                      responsive={responsive}
                      minimumTouchDrag={80}
                      pauseOnHover
                      renderArrowsWhenDisabled={false}
                      renderButtonGroupOutside={false}
                      renderDotsOutside={false}
                      rewind={false}
                      rewindWithAnimation={false}
                      rtl={false}
                      shouldResetAutoplay
                      // showDots={false}
                      sliderClass=""
                      slidesToSlide={1}
                      swipeable
                    >
                      <motion.div
                        // style={{
                        //   transform: isInView
                        //     ? "translateY(0px)"
                        //     : "translateY(200px)",
                        //   opacity: isInView ? 1 : 0,
                        //   transition: "all 0.5s ",
                        // }}
                        style={{
                          // transform: "translateY(200px)",
                          opacity: 1,
                          transition: "all 0.5s ",
                        }}
                        className={styles.cardBody + " vstack gap-2"}
                      >
                        <div className={styles.Image}>
                          <Image
                            src="/thirteen.svg"
                            alt="13"
                            width={100}
                            height={101}
                            priority
                          />
                          {/* <div className={styles.cityText + " p-2 m-1"}>
                            City
                          </div> */}
                          {/* <motion.div
                              whileHover={{ scale: 1.3 }}
                              className={styles.favourite + " hstack m-2 "}
                              onClick={(e) => {
                                e.stopPropagation();
                                // updateFavouriteService(data._id);
                                // setisFavourite(!isFavourite);
                              }}
                            >
                              <i
                                key={index}
                                className={
                                  isFavourite
                                    ? "bi bi-heart-fill"
                                    : "bi bi-heart"
                                }
                              ></i>
                            </motion.div> */}
                          {/* {data.isFeatured ?? false ? ( */}
                          <div className={styles.featured + " p-2"}>
                            Open Box
                          </div>
                        </div>
                        <div className={styles.Price}>
                          <h4 className={styles.priceText}>Iphone</h4>
                          {/* <h4 className={styles.dateText}>2\2\2222</h4> */}
                        </div>
                      </motion.div>
                    </Carousel>
                  </div>
                </div>
              </Fragment>
              {/* );
              })} */}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </Fragment>
  );
}

export default home;

// import Head from "next/head";
// import Image from "next/image";
// import { Inter } from "@next/font/google";

// const inter = Inter({ subsets: ["latin"] });

// export default function Home() {
//   return (
//     <>
//       <Head>
//         <title>Create Next App</title>
//         <meta name="description" content="Generated by create next app" />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
//       <main >scds </main>
//     </>
//   );
// }
