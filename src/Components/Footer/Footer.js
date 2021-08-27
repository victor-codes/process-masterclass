import React, { useState } from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  const [value, setValue] = useState("");

  return (
    <footer>
      <section className="email_subscribition">
        <h6 className="alternate_heading_6">
          <svg
            style={{ marginRight: "12px" }}
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="7" cy="7" r="7" fill="black" />
            <path
              d="M3 8.5C5.5 10.5 8.5 10.5 11 8.5"
              stroke="white"
              stroke-width="1.5"
            />
            <circle cx="4" cy="5" r="1" fill="white" />
            <circle cx="10" cy="5" r="1" fill="white" />
          </svg>
          We also make emails
        </h6>
        <p className="email_text">
          Recieve updates and offers you’ll actually be interested in.
          Unsubscriber any time.{" "}
        </p>
        <form
          action=""
          onSubmit={() => {
            alert(`Email: ${value} successfully submitted`);
          }}
        >
          <input
            type="email"
            onChange={(e) => {
              setValue(e.target.value);
            }}
            placeholder="Your email"
            value={value}
          />
        </form>
      </section>
      <div className={styles.footer}>
        <div>
          <img src="" alt="" />
        </div>

        <h1>
          <svg
            width="87"
            height="33"
            viewBox="0 0 87 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.57533 4.28099L11.5386 25.0966H13.579L21.3436 4.88761C22.5896 1.64653 23.1313 1.07458 25.1898 0.814601V0H17.8405V0.814601C20.5672 1.16124 20.8561 1.83718 19.7907 4.80095L13.9221 21.1623L7.72849 4.28099C6.80757 1.78519 7.20483 1.10924 9.71479 0.814601V0H0V0.814601C1.96824 1.07458 2.56413 1.64653 3.57533 4.28099Z"
              fill="black"
            />
            <path
              d="M22.5535 16.5867C22.5535 21.9249 26.2552 25.3566 31.2571 25.3566C34.2546 25.3566 36.6201 24.2474 37.7938 22.6875V21.8729C36.7465 22.8955 35.1213 23.5888 33.135 23.5888C29.036 23.5888 26.3094 20.4517 26.1649 15.8414H38.0827C38.1188 15.5814 38.1549 15.2001 38.1549 14.8361C38.1549 10.6071 35.5005 7.76471 30.8598 7.76471C25.8399 7.76471 22.5535 11.4564 22.5535 16.5867ZM30.8417 8.87395C33.4059 8.87395 34.724 11.0751 34.724 14.2988C34.724 14.5068 34.724 14.6801 34.706 14.8535L26.1649 14.8881C26.3274 10.9538 28.1151 8.87395 30.8417 8.87395Z"
              fill="black"
            />
            <path
              d="M41.5316 12.6003C41.5316 15.2001 43.4637 16.6733 46.6599 17.6266L48.0503 18.0425C50.488 18.7532 51.5173 19.6544 51.5173 21.2836C51.5173 22.9648 50.0366 24.1954 47.7252 24.1954C45.2333 24.1954 42.8317 22.5488 42.1456 19.3424H41.3691L41.5497 23.8834C42.7595 24.698 45.0708 25.322 47.7433 25.322C51.2825 25.322 54.5509 23.4501 54.5509 20.3304C54.5509 17.5746 52.691 15.98 49.5129 15.0615L48.1225 14.6628C45.8654 13.9869 44.5652 13.2243 44.5652 11.5951C44.5652 9.96586 45.9737 8.87395 48.2489 8.87395C50.5963 8.87395 52.4562 10.3645 52.9799 13.1723H53.7744L53.6661 8.89128C52.7632 8.302 50.8311 7.76471 48.2308 7.76471C44.3666 7.76471 41.5316 9.51523 41.5316 12.6003Z"
              fill="black"
            />
            <path
              d="M75.9848 16.396C75.9848 10.9191 72.5359 7.76471 68.6536 7.76471C66.0533 7.76471 63.742 9.0126 62.7669 10.9018V7.90336L56.9344 8.54464V9.25525L58.1082 9.58456C59.1194 9.86187 59.2638 10.0699 59.2638 10.9884V30.5562C59.2638 31.6654 58.993 31.9428 56.9344 32.1854V33H65.3672V32.1854C63.0739 31.9254 62.8211 31.6654 62.8211 30.3482V23.3288C63.7059 24.5247 65.3852 25.3566 67.4979 25.3566C72.2108 25.3566 75.9848 21.7516 75.9848 16.396ZM72.265 16.7773C72.265 21.2143 70.0079 24.1087 66.7034 24.1087C64.9157 24.1087 63.3989 23.2595 62.8211 22.1675V11.6297C63.6156 10.2778 65.0241 9.53256 66.9201 9.53256C70.0801 9.53256 72.265 12.3403 72.265 16.7773Z"
              fill="black"
            />
            <path
              d="M82.359 4.66229C83.5688 4.66229 84.5439 3.76103 84.5439 2.63445C84.5439 1.49055 83.5688 0.606618 82.359 0.606618C81.1492 0.606618 80.1741 1.49055 80.1741 2.63445C80.1741 3.76103 81.1492 4.66229 82.359 4.66229ZM84.4898 7.90336L78.6031 8.54464V9.25525L79.7768 9.58456C80.788 9.86187 80.9325 10.0699 80.9325 10.9884V22.5315C80.9325 23.6754 80.6255 23.9527 78.6031 24.2127V25.0273H86.8191V24.2127C84.7967 23.9527 84.4898 23.6754 84.4898 22.5315V7.90336Z"
              fill="black"
            />
          </svg>
        </h1>
        <div className={styles.footer_link_container}>
          <div style={{ width: "fit-content" }}>
            <h6 className={styles.heading_6}>MENS</h6>{" "}
            <p className={styles.footer_link}>
              <span>Tshirts</span>
              <span>Shirts</span>
              <span>Sweaters</span>
              <span>Jeans</span>
              <span>Jackets</span>
              <span>Accessories</span>
              <span>Lookbook</span>
            </p>
          </div>
          <div style={{ width: "fit-content" }}>
            <h6 className={styles.heading_6}>WOMENS</h6>
            <p className={styles.footer_link}>
              <span>Tshirts</span>
              <span>Shirts</span>
              <span>Sweaters</span>
              <span>Jeans</span>
              <span>Jackets</span>
              <span>Accessories</span>
            </p>
          </div>
          <div style={{ width: "fit-content" }}>
            <h6 className={styles.heading_6}>SITE</h6>
            <p className={styles.footer_link}>
              <span>Journal</span>
              <span>About</span>
            </p>
          </div>
          <div style={{ width: "fit-content" }}>
            <h6 className={styles.heading_6}>SUPPORT</h6>{" "}
            <p className={styles.footer_link}>
              <span>Shipping and Delivery</span>
              <span>Returns Policy</span>
              <span>Privacy Policy</span>
            </p>
          </div>
        </div>
      <div className={styles.address_container}>
        <address>
          MANHATTAN STORE
          <span>526 Avenue Of The Americas New York NY</span>
        </address>
        <address>
          BROOKLYN STORE <span>118 Knickerbocker Ave East Williamsburg</span>
        </address>
      </div>
      </div>
    </footer>
  );
}
