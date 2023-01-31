import Image from "next/image";
import React, { Fragment } from "react";
import styles from "@/styles/List.module.scss";

export default function list() {
  return (
    <Fragment>
      <section className={styles.list}>
        <section className={styles.filtercontainer}>
          <div>filter1</div>
          <div>filter2</div>
          <div>fiter3</div>
        </section>
        <section className={styles.itemcontainer}>
          <div className={styles.item}>
            <Image
              src="/thirteen.svg"
              alt="13"
              width={100}
              height={101}
              priority
            />
            <div>
              <h3>ProductName</h3>
              <h5>CO</h5>
              <h5>16GB ROM</h5>
              <h5>6 Waranty</h5>
            </div>
          </div>
        </section>
      </section>
    </Fragment>
  );
}
