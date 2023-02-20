import Image from "next/image";
import React, { Fragment, useState } from "react";
import styles from "@/styles/List.module.scss";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { allproducts } from "@/services/product";
import Link from "next/link";

export default function Index() {
  const queryClient = useQueryClient();

  // const product = useQuery("productsData", () => allproducts(), {
  //   onSuccess: (data) => {
  //     console.log("data", data);
  //   },
  // });

  const product = useQuery({
    queryKey: ["productsData"],
    queryFn: () => allproducts(),
  });

  const hold = product.data?.data;

  console.log("product", hold?.products);

  return (
    <Fragment>
      <section className={styles.list}>
        <section className={styles.filtercontainer}>
          <div className={styles.filters}>
            <h5>Price Range</h5>
            <RangeSlider
              min={0}
              max={1000000}
              defaultValue={[25, 1000]}
              className="m-2"
            />

            <h5>Category</h5>
            <select name="price" id="">
              <option value="phone">Phone</option>
              <option value="lap">Laptop</option>
            </select>
            <h5>Number per page</h5>
            <div className={styles.radio}>
              <input type="radio" id="html" name="fav_language" value="HTML" />
              <label for="html">25</label>
              <br />
              <input type="radio" id="css" name="fav_language" value="CSS" />
              <label for="css">20</label>
              <br />
              <input
                type="radio"
                id="javascript"
                name="fav_language"
                value="JavaScript"
              />
              <label for="javascript">15</label>
            </div>
          </div>
          <div className={styles.filters}>
            <div>
              <h5>Grade</h5>
              <div className={styles.check}>
                <input
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value="Bike"
                />
                <label for="vehicle1"> A</label>
                <input
                  type="checkbox"
                  id="vehicle2"
                  name="vehicle2"
                  value="Car"
                />
                <label for="vehicle2"> B</label>
                <input
                  type="checkbox"
                  id="vehicle3"
                  name="vehicle3"
                  value="Boat"
                />
                <label for="vehicle3"> C</label>
                <input
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value="Bike"
                />
                <label for="vehicle1"> D</label>
              </div>
            </div>
            <div>
              <h5>Brand</h5>
              <div className={styles.checkbox}>
                <div>
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                  />
                  <label for="vehicle1"> Apple</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="vehicle2"
                    name="vehicle2"
                    value="Car"
                  />
                  <label for="vehicle2"> Samsung</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="vehicle3"
                    name="vehicle3"
                    value="Boat"
                  />
                  <label for="vehicle3"> Vivo</label>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.filters}>
            <div>
              <h5>RAM</h5>
              <div className={styles.checkbox}>
                <div>
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                  />
                  <label for="vehicle1"> Apple</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="vehicle2"
                    name="vehicle2"
                    value="Car"
                  />
                  <label for="vehicle2"> Samsung</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="vehicle3"
                    name="vehicle3"
                    value="Boat"
                  />
                  <label for="vehicle3"> Vivo</label>
                </div>
              </div>
            </div>
            <div>
              <h5>ROM</h5>
              <div className={styles.checkbox}>
                <div>
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                  />
                  <label for="vehicle1"> Apple</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="vehicle2"
                    name="vehicle2"
                    value="Car"
                  />
                  <label for="vehicle2"> Samsung</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="vehicle3"
                    name="vehicle3"
                    value="Boat"
                  />
                  <label for="vehicle3"> Vivo</label>
                </div>
              </div>
            </div>
          </div>
        </section>

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
