import Image from "next/image";
import React, { Fragment, useState } from "react";
import styles from "@/styles/List.module.scss";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { allproducts } from "@/services/product";
import Link from "next/link";
import { useRouter } from "next/router";

export default function List() {
  const queryClient = useQueryClient();

  const router = useRouter();
  const { query } = router;
  console.log("query", query.query);
  // const product = useQuery("productsData", () => allproducts(), {
  //   onSuccess: (data) => {
  //     console.log("data", data);
  //   },
  // });

  const product = useQuery({
    queryKey: ["productsData", query],
    queryFn: () => allproducts(query.query),
    enabled: !!query,
  });

  const hold = product.data?.data;

  console.log("product", hold?.products);

  return (
    <Fragment>
      <section className={styles.list}>
        <section className={styles.itemcontainer}>
          {hold?.products.map((item, index) => {
            if (item.visibility === "Show" && item.status === "Active") {
              return (
                <Link key={index} href={`/details/${item._id}`}>
                  <div className={styles.item}>
                    <Image
                      src="/thirteen.svg"
                      alt="13"
                      width={100}
                      height={101}
                      priority
                    />
                    <div>
                      <h3>{item.name}</h3>
                      <h5>{item.grade}</h5>
                      <h5>16GB ROM</h5>
                      <h5>6 Waranty</h5>
                      <h5>{item.salePrice}</h5>
                    </div>
                  </div>
                </Link>
              );
            }
          })}
        </section>
      </section>
    </Fragment>
  );
}
