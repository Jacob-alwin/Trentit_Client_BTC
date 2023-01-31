import React, { Fragment } from "react";
import styles from "@/styles/Footer.module.scss";
// import Logo from "../../images/trentitLogo.png";
// import facebookIcon from "../../images/Icons/facebook.svg";
import { useInView, motion } from "framer-motion";
import Image from "next/image";

function Footer() {
  return (
    <Fragment>
      <div className={styles.footer}>
        <div className={styles.topFooter}>
          <div className={"  d-flex justify-content-between "}>
            <div className={styles.links + " p-4"}>
              <div className="footerText mb-2">Follow Us</div>
              <div className={styles.footerIcons}>
                {/* <a href="https://www.instagram.com/trentit.in/">
                  <motion.img
                    whileHover={{ scale: 1.2, transition: 0.1 }}
                    whileInView={{ scale: 1 }}
                    initial={{ scale: 0 }}
                    transition={{ type: "just" }}
                    src={facebookIcon}
                    alt="facebook"
                  />
                </a> */}
                <a href="https://www.instagram.com/trentit.in/"></a>
                <a href="https://www.instagram.com/trentit.in/">
                  <Image
                    src="/vercel.svg"
                    alt="twitter"
                    width={43}
                    height={43}
                    priority
                  />
                </a>
                <a href="https://www.instagram.com/trentit.in/">
                  <Image
                    id={styles.ytIcon}
                    src="/vercel.svg"
                    alt="youtube"
                    width={43}
                    height={43}
                    priority
                  />
                </a>
              </div>
            </div>
            <div className={styles.footerLine}></div>

            <div className={styles.content}>
              <motion.h6 whileHover={{ scale: 1.05 }}>Contact Us</motion.h6>
              <motion.h6 whileHover={{ scale: 1.05 }}>FAQ's</motion.h6>
              <motion.h6 whileHover={{ scale: 1.05 }}>
                Terms & Conditions
              </motion.h6>
              <motion.h6 whileHover={{ scale: 1.05 }}>Privacy Policy</motion.h6>
            </div>
          </div>
        </div>
        <div className={styles.bottomFooter}>
          <div className={styles.copyWright}>
            <p>@ 2022 all rights reserved - Trentit</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Footer;
