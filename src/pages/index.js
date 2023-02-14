import React, { Fragment } from "react";
import styles from "@/styles/Home.module.scss";
import { motion, useInView } from "framer-motion";
import Carousel from "react-multi-carousel";
import Image from "next/image";
import { useSelector } from "react-redux";
import { dispatch } from "@/redux/store";
import { addAmount, newItem } from "@/redux/reducers/cart";
import { category, homedata } from "@/data/data";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
// import { homedata } from "@/services/common";
import Link from "next/link";
import { AddCart } from "@/services/cart";

function Home() {
  const cart = useSelector((state) => state.cart);
  function AddAmount() {
    dispatch(addAmount({ num: 1003 }));
  }

  const queryClient = useQueryClient();

  const productsData = useQuery({
    queryKey: ["productsData"],
    queryFn: () => homedata(),
  });

  const cartMutation = useMutation((product_id) => AddCart(product_id), {
    onSuccess: (data) => {
      if (data.success) queryClient.invalidateQueries("cartData");
      else alert(data.message);
    },
  });

  // const mydata = useQuery("mydata", () => hello());

  //using useQuery to fetch data from server and store in mydata from hello.js
  // const mydata = useQuery("mydata", () => hello());

  // data from hello.js

  //  const mydata = useQuery("mydata", () => hello())

  // console.log("mydata", productsData.data);

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
                <span onClick={AddAmount}>{cart.totalAmount}...</span>
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
              {category.map((data, index) => {
                return (
                  <motion.div
                    key={index}
                    onClick={() => {
                      // handleClick(data.category.name);
                    }}
                    className={
                      styles.categoryData + " d-flex  align-item-center"
                    }
                  >
                    <Image
                      src={data.icon}
                      alt={data.name}
                      width={40}
                      height={31}
                      priority
                    />
                    <motion.h5>Phone</motion.h5>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <div className={styles.categoryTile}>
            <div className={styles.categoryParallaxContainer}>
              {/* <div className={styles.freeSpace}></div> */}
              {homedata.map((data, index) => {
                return (
                  <div
                    key={index}
                    className={styles.categoryTileContainer + " my-5"}
                  >
                    <div className={" p-3 "}>
                      <div
                        className={
                          styles.title + " d-flex justify-content-between"
                        }
                      >
                        <div className="categoryTitle hstack gap-3">
                          <h4>{data.category}</h4>
                          <div className={styles.exploreMore + " hstack gap-2"}>
                            <h6>Explore More </h6>
                          </div>
                        </div>

                        <Image
                          src={data.image}
                          alt=" "
                          width={43}
                          height={43}
                          priority
                        />
                      </div>
                      {data.products.map((items, index) => {
                        return (
                          <motion.div
                            key={index}
                            style={{
                              // tr
                              ansform: "translateY(200px)",
                              opacity: 1,
                              transition: "all 0.5s ",
                            }}
                            className={styles.cardBody + " vstack gap-2"}
                          >
                            <Link href={`/details/${items._id}`}>
                              <div className={styles.Image}>
                                <Image
                                  src={items.image}
                                  alt="13"
                                  width={100}
                                  height={101}
                                  priority
                                />
                                <div className={styles.cityText + " p-2  "}>
                                  {Math.floor(
                                    ((items.orgPrice - items.price) /
                                      items.orgPrice) *
                                      100
                                  )}
                                  <span>% off</span>
                                </div>
                                <motion.div
                                  // whileHover={{ scale: 1.3 }}
                                  className={styles.favourite + " hstack m-2 "}
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    cartMutation.mutate(items._id);
                                  }}
                                >
                                  <i
                                    key={index}
                                    className={
                                      // isFavourite
                                      // ? "bi bi-heart-fill"
                                      // :
                                      "bi bi-cart-plus"
                                    }
                                  ></i>
                                </motion.div>
                                <div className={styles.featured + " p-2"}>
                                  Open Box
                                </div>
                              </div>
                            </Link>
                            <div className={styles.Price}>
                              <h4 className={styles.priceText}>{items.name}</h4>
                              <h4 className={styles.dateText}>
                                {items.price}
                                <br />
                                <del>{items.orgPrice}</del>
                              </h4>
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </Fragment>
  );
}

export default Home;

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
