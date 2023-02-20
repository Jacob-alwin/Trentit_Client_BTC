import React, { useEffect, useState, useRef } from "react";
import styles from "@/styles/Header.module.scss";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { LocalStorageKeys } from "@/core/localStorageKeys";
import { useRouter } from "next/router";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { allproducts } from "@/services/product";

// import classNames from "classnames";
// import notificationIcon from "../../images/Svg/Bell.svg";
// import chatIcon from "../../images/Svg/Chat.svg";
// import favIcon from "../../images/Svg/Fav.svg";
function Header() {
  const [open, setopen] = useState(false);

  const searchKey = useRef(null);
  useEffect(() => {
    return () => {
      setopen(false);
    };
  }, []);
  const queryClient = useQueryClient();

  // const product = useQuery({
  //   queryKey: ["productsData", query],
  //   queryFn: () => allproducts(query),
  // });

  const router = useRouter();
  return (
    <nav
      className={
        styles.header + " pt-3 d-flex justify-content-between pb-4"
        // styles.hideScrollDown
      }
    >
      <Link href="/">
        <Image
          className={styles.logo}
          src="/vercel.svg"
          alt="13"
          width={43}
          height={43}
          priority
        />
      </Link>
      <motion.div
        animate={{ x: 0 }}
        initial={{ x: 550 }}
        transition={{ type: "just", duration: 1 }}
        className={styles.outerIcons + " d-flex hstack gap-5"}
      >
        <div className={styles.search}>
          <input ref={searchKey} type="text" placeholder="Search..." />
          <motion.i
            onClick={() => {
              searchKey.current.value
                ? router.push("/search/" + searchKey.current.value)
                : router.push("/list");
            }}
            className="bi bi-search pt-1 pt-1"
          ></motion.i>
        </div>

        <div className={styles.icons + " d-flex "}>
          {/* <Link href="/favourites">
            <motion.i
              animate={{ scale: 0.75 }}
              whileHover={{ scale: 1, transition: { duration: 0.5 } }}
              className="bi bi-heart"
            />
          </Link> */}
          <Link href="/cart">
            <motion.i
              animate={{ scale: 0.75 }}
              whileHover={{
                scale: 1,
                transition: { duration: 0.5 },
              }}
              className="bi bi-cart2 mb-1"
            />
          </Link>

          <motion.i
            onClick={() => {
              setopen(!open);
            }}
            whileHover={{ scale: 1.5 }}
            className={
              "bi bi-person-circle  position-relative  " + styles.profileIcon
            }
          />
        </div>

        <div
          style={
            open
              ? {
                  opacity: 1,
                }
              : { opacity: 0 }
          }
          className={styles.profile}
        >
          <div>
            <h5>Jacob Alwin Joy</h5>
            <h5>789 351 5412</h5>
          </div>
          <div>
            <Link
              href="/order"
              style={{
                textDecoration: "none",
                width: "30vw",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <h5>My Orders</h5>
              <h5>{">"}</h5>
            </Link>
          </div>
          <div>
            <h5>Address</h5>

            <h5>edit</h5>
          </div>
          <div>
            <h5>Logout</h5>

            <h5
              onClick={() => {
                localStorage.removeItem(LocalStorageKeys.userToken);
                router.push("/auth");
              }}
            >
              icon
            </h5>
          </div>
        </div>
      </motion.div>
    </nav>
  );
}

export default Header;
