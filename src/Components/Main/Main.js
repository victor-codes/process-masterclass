import React from "react";
import { ArrowRight } from "../../assets/icon/ArrowRight";
import styles from "./Main.module.css";

export default function Main() {
  return (
    <main>
      <div>
        <div>
          <img
            className={styles.main_image}
            src="/resources/main_image.jpg"
            alt=""
          />
        </div>
        <div className={styles.detail}>
          <p className={styles.detail_text}>
            Susie is wearing a Cashmere overcoat{" "}
          </p>
          <ArrowRight />
        </div>
      </div>
      <div className={styles.main_text}>
        <div className={styles.carousel_grp}>
          <div className={styles.carousel}></div>
          <div className={styles.carousel}></div>
          <div className={styles.carousel}></div>
        </div>
        <div className={styles.subtitle}>
          <span>SEBASTIAN</span>
          <span>
            <svg
              width="6"
              height="6"
              viewBox="0 0 6 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                y1="-0.5"
                x2="7"
                y2="-0.5"
                transform="matrix(-0.709811 0.704392 0.709811 0.704392 6 1)"
                stroke="black"
              />
              <line
                y1="-0.5"
                x2="7"
                y2="-0.5"
                transform="matrix(0.709811 0.704392 -0.709811 0.704392 0 1)"
                stroke="black"
              />
            </svg>
          </span>
          <span>TAKAGAWA</span>
        </div>
        <h2 className={styles.heading_1}>Elegance & Comfort</h2>
        <p className={styles.main_paragraph}>
          Our new range of overcoats made from 100% cashmere, ethically sourced
          and without the price tag of old fashion houses.{" "}
        </p>
        <div>
          <svg
            width="49"
            height="49"
            viewBox="0 0 49 49"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M24.5 48.1967C37.5873 48.1967 48.1967 37.5873 48.1967 24.5C48.1967 11.4127 37.5873 0.803279 24.5 0.803279C11.4127 0.803279 0.803279 11.4127 0.803279 24.5C0.803279 37.5873 11.4127 48.1967 24.5 48.1967ZM24.5 49C38.031 49 49 38.031 49 24.5C49 10.969 38.031 0 24.5 0C10.969 0 0 10.969 0 24.5C0 38.031 10.969 49 24.5 49Z"
              fill="black"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6.42617 40.9672L40.9672 6.42626L41.5352 6.99426L6.99418 41.5352L6.42617 40.9672Z"
              fill="black"
            />
            <path
              d="M14.6315 19.2787V18.4739H11.1627L12.3958 17.2219C13.9585 15.6875 14.5044 14.9485 14.5044 14.0543C14.5044 13.0188 13.7749 12.3693 12.6924 12.3693C11.6239 12.3693 10.8991 12.967 10.6167 13.9178L10.8191 13.9931C11.0685 13.3388 11.591 12.9435 12.2829 12.9435C13.0171 12.9435 13.5066 13.4753 13.5066 14.3037C13.5066 15.198 13.0548 15.9605 11.6992 17.5184L10.6591 18.6951V19.2787H14.6315Z"
              fill="black"
            />
            <path
              d="M15.4929 15.8805C15.4929 18.0597 17.1637 19.3917 18.8864 19.3917C20.9432 19.3917 22.2846 17.8196 22.2846 15.8758C22.2846 13.6966 20.609 12.3693 18.8864 12.3693C16.8296 12.3693 15.4929 13.9366 15.4929 15.8805ZM16.6272 15.8005C16.6272 14.059 17.2673 12.6893 18.8346 12.6893C20.2608 12.6893 21.1456 14.1343 21.1456 15.9558C21.1456 17.6973 20.5102 19.0716 18.9429 19.0716C17.5167 19.0716 16.6272 17.622 16.6272 15.8005Z"
              fill="black"
            />
            <path
              d="M29.8937 36.1475V35.3426H26.4249L27.658 34.0907C29.2207 32.5563 29.7666 31.8173 29.7666 30.923C29.7666 29.8876 29.0371 29.238 27.9546 29.238C26.8861 29.238 26.1613 29.8358 25.8789 30.7865L26.0813 30.8619C26.3308 30.2076 26.8532 29.8123 27.5451 29.8123C28.2793 29.8123 28.7688 30.3441 28.7688 31.1725C28.7688 32.0668 28.317 32.8293 26.9614 34.3872L25.9213 35.5639V36.1475H29.8937Z"
              fill="black"
            />
            <path
              d="M30.7551 32.7492C30.7551 34.9284 32.4259 36.2604 34.1486 36.2604C36.2054 36.2604 37.5468 34.6884 37.5468 32.7445C37.5468 30.5653 35.8713 29.238 34.1486 29.238C32.0918 29.238 30.7551 30.8054 30.7551 32.7492ZM31.8894 32.6692C31.8894 30.9277 32.5295 29.5581 34.0968 29.5581C35.523 29.5581 36.4078 31.0031 36.4078 32.8246C36.4078 34.566 35.7724 35.9404 34.2051 35.9404C32.7789 35.9404 31.8894 34.4907 31.8894 32.6692Z"
              fill="black"
            />
          </svg>
        </div>
      </div>
    </main>
  );
}
