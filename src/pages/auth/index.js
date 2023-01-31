import React, { Fragment, useState } from "react";
import styles from "@/styles/Auth.module.scss";
import { motion } from "framer-motion";

function Auth() {
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
                  />
                  <br />
                </div>
                <div className={styles.signInButton + " "}>Sign In</div>
              </Fragment>
            </div>
          </div>
        </motion.div>
      </div>
    </Fragment>
  );
}

export default Auth;
