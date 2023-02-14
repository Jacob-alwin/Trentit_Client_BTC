import React, { Fragment, useState } from "react";
import styles from "@/styles/Auth.module.scss";
import { motion } from "framer-motion";
import { signInWithPhoneNumber } from "firebase/auth";
import { RecaptchaVerifier } from "firebase/auth";
import { authentication } from "@/services/firebase-config";
function Auth() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setotp] = useState("");
  const [signIn, setSignIn] = useState(false);

 const queryClient = useQueryClient();

  const product = useQuery("productsData", () => homedata(), {
    onSuccess: (data) => {
      console.log("data", data);
    },
  });

  //mutation to post data to server
  const mutation = useMutation((data) => postdata(data), {
    onSuccess: (data) => {
      console.log("data", data);
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
          console.log("3");
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
        setSignIn(true);
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
      .confirm(otp)
      .then((result) => {
        // User signed in successfully.
        const user = result.user;
        console.log("Logged in");
        console.log(user);
        mutation.mutate(user);

        // usequery to post data to server

        // ...
      })
      .catch((error) => {
        console.log("Error");
        // User couldn't sign in (bad verification code?)
        // ...
      });
  };

  return (
    <Fragment>
      <div className={styles.authBackground + " "}>
        {/* <motion.div
          // animate={backbuttonPosition}
          initial={{ opacity: 1 }}
          transition={{ type: "just", duration: 0.8 }}
          className={styles.backbuttonContainer}
        >
          <i className="bi bi-house"></i>
        </motion.div> */}

        <motion.div
          // animate={authContainerPosition}
          initial={{ opacity: 1 }}
          transition={{ type: "just", duration: 0.8 }}
          className={styles.authContainer}
        >
          {/* <div className={styles.Imagecontainer}>
            <img src={Geo} alt={"geo"} />
            <p>India's No:1 Trusted MarketPlace</p>
          </div> */}
          <div className={styles.signInContainer + "  "}>
            <div className={styles.lapUserInfo}>
              <Fragment>
                <h1 className={styles.signInText}>Log In .</h1>
                <div id="recaptcha"></div>

                <div className={styles.Step1}>
                  {/* <input
                    className={styles.nameInput}
                    placeholder="Name"
                    type="text"
                  /> */}
                  <br />
                  <input
                    className={styles.nameInput}
                    placeholder="Phone"
                    type="number"
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                  <input
                    style={signIn ? { display: "block" } : { display: "none" }}
                    className={styles.nameInput}
                    placeholder="OTP"
                    type="number"
                    onChange={(e) => setotp(e.target.value)}
                  />
                  <br />
                </div>
                <div
                  style={signIn ? { display: "none" } : { display: "block" }}
                  className={styles.signInButton + " "}
                  onClick={requestOTP}
                >
                  Sign In
                </div>
                <div id="recaptcha-container" class="justify-center flex"></div>
                <div
                  style={signIn ? { display: "block" } : { display: "none" }}
                  className={styles.signInButton + " "}
                  onClick={verifyOTP}
                >
                  Verify
                </div>
              </Fragment>
            </div>
          </div>
        </motion.div>
      </div>
    </Fragment>
  );
}

export default Auth;
