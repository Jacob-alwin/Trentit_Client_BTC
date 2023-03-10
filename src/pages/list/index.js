import Image from "next/image";
import React, { Fragment, useState } from "react";
import styles from "@/styles/List.module.scss";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { allproducts } from "@/services/product";
import Link from "next/link";
import { Collapse, Text } from "@nextui-org/react";

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
          <Collapse.Group>
            <div className={styles.filters}>
              <select name="price" id="">
                <option value="phone">Phone</option>
                <option value="lap">Laptop</option>
              </select>
            </div>

            <Collapse title="Grade">
              <div className={styles.filters}>
                <div>
                  <div className={styles.check}>
                    <input
                      type="checkbox"
                      id="vehicle1"
                      name="vehicle1"
                      value="Bike"
                    />
                    <label for="vehicle1"> Open Box</label>
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
                    <input
                      type="checkbox"
                      id="vehicle1"
                      name="vehicle1"
                      value="Bike"
                    />
                    <label for="vehicle1"> D</label>
                    <input
                      type="checkbox"
                      id="vehicle1"
                      name="vehicle1"
                      value="Bike"
                    />
                    <label for="vehicle1"> D</label>
                  </div>
                </div>
                <div></div>
              </div>
            </Collapse>
            <Collapse title="RAM">
              <div className={styles.filters}>
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
                <div></div>
              </div>
            </Collapse>
            <Collapse title="ROM">
              <div className={styles.filters}>
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
            </Collapse>

            <div className={styles.filters + " mt-2 py-1"}>
              {/* <h5>Price Range</h5> */}
              {/* <RangeSlider
                  min={0}
                  max={1000000}
                  defaultValue={[25, 1000]}
                  className="m-2"
                /> */}

              {/* <select name="price" id="">
                <option value="phone">Phone</option>
                <option value="lap">Laptop</option>
              </select> */}
              <h5 className="">per page</h5>
              <div className={styles.radio}>
                <input
                  type="radio"
                  id="html"
                  name="fav_language"
                  value="HTML"
                />
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
          </Collapse.Group>
        </section>

        <section className={styles.itemcontainer}>
          {hold?.products.map((item, index) => {
            if (item.visibility === "Show" && item.status === "Active") {
              return (
                <Link
                  style={{
                    textDecoration: "none",
                    color: "black",
                  }}
                  key={index}
                  href={`/${item._id}`}
                >
                  <div className={styles.item} style={{ marginBottom: "3vw" }}>
                    <Image
                      // src={item.image.key}
                      src="/thirteen.png"
                      alt="13"
                      width={100}
                      height={101}
                      priority
                    />
                    <div>
                      <h3>{item.name}</h3>
                      <h5>{item.grade}</h5>
                      <h5>EMI available</h5>
                      <h5>COD available</h5>
                      <h5>
                        ₹ {item.salePrice} <del>{item.originalPrice}</del>
                      </h5>
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
