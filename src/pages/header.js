import React, { useEffect, useState, useRef } from "react";
import styles from "@/styles/Header.module.scss";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { LocalStorageKeys } from "@/core/localStorageKeys";
import { useRouter } from "next/router";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { allproducts } from "@/services/product";
import { useSelector } from "react-redux";

import { InsertCart } from "@/redux/reducers/cart";
import { dispatch } from "@/redux/store";
import { GetCart } from "@/services/cart";
import {
  Modal,
  Button,
  Text,
  Input,
  Row,
  Checkbox,
  Textarea,
  Dropdown,
  Avatar,
} from "@nextui-org/react";
import { getUserProfile, signin } from "@/services/auth";
import { RecaptchaVerifier } from "firebase/auth";
import { authentication } from "@/services/firebase-config";
import { signInWithPhoneNumber } from "firebase/auth";

const Mail = ({ fill, size, height, width, ...props }) => {
  return (
    <svg
      width={size || width || 24}
      height={size || height || 24}
      viewBox="0 0 24 24"
      {...props}
    >
      <g
        fill="none"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      >
        <path d="M12 20.5H7c-3 0-5-1.5-5-5v-7c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5v3" />
        <path d="M17 9l-3.13 2.5a3.166 3.166 0 01-3.75 0L7 9M19.21 14.77l-3.539 3.54a1.232 1.232 0 00-.3.59l-.19 1.35a.635.635 0 00.76.76l1.35-.19a1.189 1.189 0 00.59-.3l3.54-3.54a1.365 1.365 0 000-2.22 1.361 1.361 0 00-2.211.01zM18.7 15.28a3.185 3.185 0 002.22 2.22" />
      </g>
    </svg>
  );
};
const Password = ({ fill, size, height, width, ...props }) => {
  return (
    <svg
      width={size || width || 24}
      height={size || height || 24}
      viewBox="0 0 24 24"
      {...props}
    >
      <g fill={fill}>
        <path d="M18.75 8v2.1a12.984 12.984 0 00-1.5-.1V8c0-3.15-.89-5.25-5.25-5.25S6.75 4.85 6.75 8v2a12.984 12.984 0 00-1.5.1V8c0-2.9.7-6.75 6.75-6.75S18.75 5.1 18.75 8z" />
        <path d="M18.75 10.1a12.984 12.984 0 00-1.5-.1H6.75a12.984 12.984 0 00-1.5.1C2.7 10.41 2 11.66 2 15v2c0 4 1 5 5 5h10c4 0 5-1 5-5v-2c0-3.34-.7-4.59-3.25-4.9zM8.71 16.71A1.052 1.052 0 018 17a1 1 0 01-.38-.08 1.032 1.032 0 01-.33-.21A1.052 1.052 0 017 16a1 1 0 01.08-.38 1.155 1.155 0 01.21-.33 1.032 1.032 0 01.33-.21 1 1 0 011.09.21 1.155 1.155 0 01.21.33A1 1 0 019 16a1.052 1.052 0 01-.29.71zm4.21-.33a1.155 1.155 0 01-.21.33A1.052 1.052 0 0112 17a1.033 1.033 0 01-.71-.29 1.155 1.155 0 01-.21-.33A1 1 0 0111 16a1.033 1.033 0 01.29-.71 1.047 1.047 0 011.42 0A1.033 1.033 0 0113 16a1 1 0 01-.08.38zm3.79.33a1.014 1.014 0 01-1.42 0 1.014 1.014 0 010-1.42 1.047 1.047 0 011.42 0c.04.05.08.1.12.16a.556.556 0 01.09.17.636.636 0 01.06.18 1.5 1.5 0 01.02.2 1.052 1.052 0 01-.29.71z" />
      </g>
    </svg>
  );
};

function Header() {
  const [visible, setVisible] = useState(false);
  const [addressModel, setAddressModel] = useState(false);
  const [authorised, setAuthorised] = useState(false);

  const [phoneNumber, setPhoneNumber] = useState("");
  const [OTP, setOTP] = useState("");
  const [signIn, setSignIn] = useState(true);

  const cartlist = useSelector((state) => state.cart);
  const searchKey = useRef(null);
  const queryClient = useQueryClient();
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem(LocalStorageKeys.userToken);

    if (token) {
      setAuthorised(true);
    }
  }, []);

  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };

  const addresscloseHandler = () => {
    setAddressModel(false);
    console.log("closed");
  };

  const profiledetails = useQuery({
    queryKey: ["profileDetails"],
    queryFn: () => getUserProfile(),
    onSuccess: (data) => {
      if (data.success) {
      }
    },
  });

  const cartData = useQuery({
    queryKey: ["cartData"],
    queryFn: () => GetCart(),
    onSuccess: (data) => {
      if (data.success) {
        dispatch(InsertCart(data?.data));
      }
    },
  });

  //auth start

  //mutation to post data to server
  const mutation = useMutation((data) => signin(data), {
    onSuccess: (data) => {
      console.log("data", data?.token);
      localStorage.setItem(LocalStorageKeys.userToken, data?.token);
      router.replace("/");
    },
  });
  const generateRecaptcha = () => {};

  const requestOTP = () => {
    // if (phoneNumber.length) {
    console.log("1");

    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha",
      {
        size: "invisible",
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
        },
      },
      authentication
    );
    console.log("4");
    const appVerifier = window.recaptchaVerifier;
    console.log(appVerifier);
    const num = "+91" + phoneNumber;
    signInWithPhoneNumber(authentication, num, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        // ...
        console.log("OTP sent");
        setSignIn(false);
      })
      .catch((error) => {
        // Error; SMS not sent
        // ...
        console.log(error);
      });
    // } else {
    // console.log("Enter a valid phone number");
    // }
  };

  const verifyOTP = (e) => {
    confirmationResult
      .confirm(OTP)
      .then((result) => {
        // User signed in successfully.
        const user = result.user;
        console.log("Logged in");
        console.log(user);
        const token = { ftoken: user.accessToken };
        console.log(token);
        mutation.mutate(token);
        setVisible(false);
        // window.location.reload(false);

        // usequery to post data to server

        // ...
      })
      .catch((error) => {
        console.log("Error");
        alert("Invalid OTP");
        window.location.reload(false);

        // User couldn't sign in (bad verification code?)
        // ...
      });
  };
  // auth end

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
                ? router.push("/list/" + searchKey.current.value)
                : router.push("/list");
            }}
            className="bi bi-search pt-1 pt-1"
          ></motion.i>
        </div>

        <div className={styles.icons + " d-flex "}>
          {authorised ? (
            <Link href="/cart">
              <motion.i
                animate={{ scale: 0.75 }}
                whileHover={{
                  scale: 1,
                  transition: { duration: 0.5 },
                }}
                className="bi bi-cart2 mb-1"
              >
                {cartlist.totalCount > 0 && (
                  <span className={styles.cartCount}></span>
                )}
              </motion.i>
            </Link>
          ) : null}

          <Dropdown placement="bottom-left">
            {authorised ? (
              <Dropdown.Trigger>
                <motion.i
                  whileHover={{ scale: 1.5 }}
                  className={
                    "bi bi-person-circle  position-relative  " +
                    styles.profileIcon
                  }
                />
              </Dropdown.Trigger>
            ) : (
              <motion.i
                onClick={() => {
                  setVisible(true);
                }}
                whileHover={{ scale: 1.5 }}
                className={
                  "bi bi-person-circle  position-relative  " +
                  styles.profileIcon
                }
              />
            )}

            <Dropdown.Menu
              onAction={(key) => {
                if (key == "item_address") {
                  setAddressModel(true);
                }
                if (key == "logout") {
                  localStorage.removeItem(LocalStorageKeys.userToken);
                  router.push("/");
                  window.location.reload(false);
                }
              }}
              color="secondary"
              aria-label="Avatar Actions"
            >
              <Dropdown.Item key="profile" css={{ height: "$18" }}>
                <Text b color="inherit" css={{ d: "flex" }}>
                  Jacob Alwin Joy
                </Text>
                <Text color="inherit" css={{ d: "flex" }}>
                  7306096941
                </Text>
              </Dropdown.Item>
              <Dropdown.Item key="settings" withDivider>
                <Link href="/order" style={{ textDecoration: "none" }}>
                  My Orders
                </Link>
              </Dropdown.Item>
              <Dropdown.Item key="item_address">Addrees</Dropdown.Item>
              <Dropdown.Item key="help_and_feedback">
                Help & Feedback
              </Dropdown.Item>
              <Dropdown.Item key="logout" color="error" withDivider>
                Log Out
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </motion.div>

      <div style={{ display: "none" }} id="recaptcha"></div>

      {/* Details */}
      <Modal
        closeButton
        aria-labelledby="modal-title"
        open={addressModel}
        onClose={addresscloseHandler}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            <Text b size={18}>
              Details
            </Text>
          </Text>
        </Modal.Header>

        <Modal.Body>
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Email"
            contentLeft={<Mail fill="currentColor" />}
          />

          <Textarea placeholder="Address" rows={4} />

          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="State"
            // contentLeft={<Password fill="currentColor" />}
          />

          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="City"
            // contentLeft={<Password fill="currentColor" />}
          />
          <Input
            clearable
            bordered
            fullWidth
            color="secondary"
            size="lg"
            placeholder="Pincode"
            // contentLeft={<Password fill="currentColor" />}
          />
        </Modal.Body>

        <Modal.Footer>
          <Button auto color={"gradiant"} onPress={closeHandler}>
            Change
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Login */}
      <Modal
        closeButton
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            <Text b size={18}>
              Login
            </Text>
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Phone Number"
            onChange={(e) => setPhoneNumber(e.target.value)}

            // contentLeft={<Mail fill="currentColor" />}
          />

          {signIn ? null : (
            <Input
              clearable
              bordered
              fullWidth
              color="primary"
              size="lg"
              placeholder="######"
              onChange={(e) => setOTP(e.target.value)}
              contentLeft={<Password fill="currentColor" />}
            />
          )}
        </Modal.Body>
        <Modal.Footer>
          {signIn ? (
            <Button auto onPress={requestOTP}>
              Sign in
            </Button>
          ) : (
            <Button auto flat color="secondary" onPress={verifyOTP}>
              Verify
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </nav>
  );
}

export default Header;
