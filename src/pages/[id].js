import React, { Fragment, useState } from "react";
import styles from "@/styles/Details.module.scss";
import { motion } from "framer-motion";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { AddCart, GetCart, RemoveCartItem } from "@/services/cart";
import { useRouter } from "next/router";
import { productdetails } from "@/services/product";
import { InsertCart, newItem, removeItem } from "@/redux/reducers/cart";
import { dispatch } from "@/redux/store";
// import Carousel3d from "../../../common/Carousel3d";
// import RS from "../../images/Svg/Rs.svg";

// const data = {
//   success: true,
//   message: "Product fetched",
//   data: {
//     image: {
//       key: "62948dcf-1d91-4982-9d9f-d43b62d439ea.jpeg",
//       mimetype: "image/jpeg",
//     },
//     _id: "63e21b23ca8ce7cc8d1fde74",
//     code: "TTO101",
//     name: "Iphone 13 Pro",
//     information: "Secure phone",
//     originalPrice: 100000,
//     purchasePrice: 10000,
//     salePrice: 10000,
//     grade: "OpenBox",
//     quantity: 2,
//     images: [
//       {
//         key: "c46bd3c5-fa61-4968-be9f-8747577fb137.jpeg",
//         mimetype: "image/jpeg",
//         _id: "63e26274e070cd8b72552a5d",
//       },
//       {
//         key: "1a45c67a-1f34-4592-aee1-388e161a68aa.png",
//         mimetype: "image/png",
//         _id: "63e26274e070cd8b72552a5e",
//       },
//     ],
//     specifications: [
//       {
//         key: "brand",
//         value: "Apple",
//         type: "text",
//         _id: "63e26274e070cd8b72552a5f",
//       },
//       {
//         key: "model",
//         value: "13 Pro Ultra",
//         type: "text",
//         _id: "63e26274e070cd8b72552a60",
//       },
//     ],
//     visibility: "Show",
//     status: "Active",
//     isDeleted: false,
//     createdAt: "2023-02-07T09:34:27.759Z",
//     updatedAt: "2023-02-07T14:38:44.858Z",
//     __v: 2,
//   },
// };

function Details() {
  const router = useRouter();
  const { id } = router.query;
  const [available, setAvailable] = useState(0);
  const [loading, setLoading] = useState(false);
  const [cart, setcart] = useState(false);
  const [cartId, setcartId] = useState("");

  const queryClient = useQueryClient();

  const detailsData = useQuery({
    queryKey: ["detailsData", id],
    queryFn: () => productdetails(id),
    enabled: !!id,
  });

  const cartData = useQuery({
    queryKey: ["cartData"],
    queryFn: () => GetCart(),
    enabled: !!id,

    onSuccess: (data) => {
      if (data?.data?.length > 0) {
        console.log(data.data);
        console.log(id);
        if(id)
        {

          console.log( data.data.find((item) => item.product._id === id));
          setcart(data.data.some((item) => item.product._id === id));
          setcartId(data.data.find((item) => item.product._id === id)._id);
        }
      } else {
        setcart(false);
      }
    },
  });





  console.log(cartData);


  //email to say that thanking for the meeting for reactjs role
  //email to say that thanking for the meeting for reactjs role
  //email to say that thanking for the meeting for reactjs role

  const addcartMutation = useMutation((product_id) => AddCart(product_id), {
    onSuccess: (data) => {
      console.log(data);
      if (data.success) {
        queryClient.invalidateQueries("cartData");
        console.log(data.data);
        dispatch(newItem(data.data));
      } else alert(data.message);
    },
  });

  const removecartMutation = useMutation((deleteId) => RemoveCartItem(deleteId), {
    onSuccess: (data) => {
      if (data.success) {
        queryClient.invalidateQueries("cartData");
        dispatch(removeItem(cartId));
      } else alert(data.message);
    },
  });

  function handleAdd(deleteId) {
    if (cart) {
      alert("Item Remove ");
      removecartMutation.mutate(deleteId);
    } else {
      alert("Item Added ");
      addcartMutation.mutate(detailsData.data.data._id);
    }
    setcart(!cart);

    alert("Cart Status Changed ");
  }

  return (
    <Fragment>
      {detailsData.isLoading ? (
        <h1>Loading..</h1>
      ) : detailsData.isError ? (
        <h1>Error..</h1>
      ) : (
        detailsData.data && (
          <div className={styles.LapDetails}>
            {/* <Carousel3d /> */}
            <div
              className={styles.Container + " "}
            >
              <div className={styles.Slide}>
                <div className={styles.ShortDes + " "}>
                  <p>{detailsData.data.data.information}</p>
                </div>
                <div className={styles.LongDes}>
                  <div className={styles.Configurations}>
                    <h1>General Information</h1>
                    <ul>
                      {detailsData.data.data.specifications.map(
                        (spec, index) => {
                          return (
                            <li
                              key={index}
                              className="d-flex justify-content-between m-2"
                            >
                              <h2>{spec.key}</h2>
                              <h2>{spec.value}</h2>
                            </li>
                          );
                        }
                      )}
                    </ul>
                  </div>
                </div>
              </div>
              <div className={styles.Details + " "}>
                <div className={styles.ShortInfo}>
                  <h1>{detailsData.data.data.name}</h1>

                  <h4>
                    {/* <span onClick={() => handleAdd()}>+</span>
                    {available}
                    <span>-</span>
                    <p>Auction Date</p> */}
                  </h4>
                  <li>
                    <h2>{detailsData.data.data.grade}</h2>
                  </li>
                  <h5>
                    <del>₹ {detailsData.data.data.originalPrice}</del>
                  </h5>
                  <h5>₹ {detailsData.data.data.purchasePrice}</h5>

                  <motion.div className={styles.favourite + " d-flex m-2 "}>
                    <motion.i
                      whileHover={{ scale: 1.2 }}
                      onClick={() => {
                        handleAdd(cartId);
                      }}
                      className={
                        cart ? "bi bi-cart-plus-fill" : "bi bi-cart-plus"
                      }
                    ></motion.i>
                  </motion.div>
                </div>
                {/* <div className={styles.SellerInfo}>
              <button className="btn btn-primary">Location in map</button>
            </div> */}
                <div className={styles.SellerInfo}>
                  {/* <h2>Love</h2> */}
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
                      <h2>Add to Cart</h2>
                    </div>

                    <button
                      onClick={() => {
                        addcartMutation.mutate(detailsData.data.data._id);
                      }}
                    >
                      <span></span>
                      <motion.i
                        className={styles.currency + " bi bi-cart-plus-fill"}
                        whileHover={{ scale: 1.2 }}
                      ></motion.i>

                      <h5>Buy</h5>
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
        )
      )}
    </Fragment>
  );
}

export default Details;
