import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import NewsCard from "./Components/NewsBlock/NewsCard";
import Footer from "./Components/Footer/Footer";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <h3 className="section_header latest">Latest happenings</h3>
      <section className="grid line">
        <NewsCard
          title="New silhouettes for a new decade"
          desc="Across fashion we see a different shapes appear across eras. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis."
          img="/resources/image.jpg"
          tag="TRENDS"
        />
        <NewsCard
          title="Our new Essentials Range for everyday wear"
          desc="Across fashion we see a different shapes appear across eras. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis."
          img="/resources/image (1).jpg"
          tag="LOOK BOOK"
        />
        <NewsCard
          title="Mens Autumn Lookbook"
          desc="Our new range of overcoats made from 100% cashmere, ethically sourced and without the price tag of old fashion houses. "
          img="/resources/image (2).jpg"
          tag="LOOK BOOK"
        />
        <NewsCard
          title="Autumn – Vibes"
          desc="Across fashion we see a different shapes appear across eras. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis."
          img="/resources/image (3).jpg"
          tag="LOOK BOOK"
        />
        <div>
          <img src="/resources/image (4).jpg" alt="" />
          <h4 className="heading_4">
            “Our mission is to bring the best of New Yorks local designers to
            the rest of the world.
          </h4>
          <div>
            <button className="more_btn">Learn more about us</button>
          </div>
        </div>
        <NewsCard
          title="Class in simplicity"
          desc="Across fashion we see a different shapes appear across eras. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis."
          img="/resources/image (5).jpg"
          tag="TRENDS"
        />
      </section>
      <section className="testimonial flex">
        <h3 className="heading_3">
          “Beautiful collection of indie American brands at a great price”
        </h3>
        <div className="flex testimonial_grp">
          <img className="img" src="/resources/monocle image.jpg" alt="" />
          <img className="img" src="/resources/gq image.jpg" alt="" />
          <img className="img" src="/resources/highsnobiety image.jpg" alt="" />
          <img className="img" src="/resources/hypebeast image.jpg" alt="" />
        </div>
      </section>
      <section className="section_instagram">
        <h4 className="heading_4" style={{ textAlign: "left" }}>
          On the gram
        </h4>
        <div className="insta_pictures_grp">
          <img src="/resources/mask-group.jpg" alt="" />
          <img src="/resources/mask-group1.jpg" alt="" />
          <img src="/resources/mask-group.jpg" alt="" />
          <img src="/resources/mask-group1.jpg" alt="" />
          <img src="/resources/mask-group.jpg" alt="" />
        </div>
        <a href="" className="follow_btn">
          FOLLOW US ON THE GRAM{" "}
          <svg
            width="31"
            height="31"
            viewBox="0 0 31 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M15.8461 0.208008C7.52439 0.208008 0.77832 6.95407 0.77832 15.2758C0.77832 23.5975 7.52439 30.3435 15.8461 30.3435C24.1678 30.3435 30.9138 23.5975 30.9138 15.2758C30.9138 6.95407 24.1678 0.208008 15.8461 0.208008ZM12.5332 7.28827C13.3904 7.24926 13.6643 7.23971 15.8468 7.23971H15.8443C18.0275 7.23971 18.3004 7.24926 19.1576 7.28827C20.0131 7.32744 20.5974 7.46289 21.1097 7.66162C21.6388 7.86671 22.0858 8.14128 22.5328 8.58829C22.9798 9.03497 23.2544 9.48333 23.4603 10.0119C23.6579 10.5228 23.7935 11.1068 23.8337 11.9623C23.8722 12.8195 23.8822 13.0934 23.8822 15.2759C23.8822 17.4584 23.8722 17.7317 23.8337 18.5889C23.7935 19.4441 23.6579 20.0282 23.4603 20.5393C23.2544 21.0677 22.9798 21.5161 22.5328 21.9627C22.0863 22.4098 21.6386 22.685 21.1102 22.8903C20.5989 23.089 20.0143 23.2244 19.1588 23.2636C18.3016 23.3026 18.0285 23.3122 15.8458 23.3122C13.6635 23.3122 13.3898 23.3026 12.5326 23.2636C11.6772 23.2244 11.0931 23.089 10.5818 22.8903C10.0536 22.685 9.6052 22.4098 9.15869 21.9627C8.71184 21.5161 8.43727 21.0677 8.23184 20.5392C8.03328 20.0282 7.89784 19.4442 7.85849 18.5887C7.81965 17.7315 7.80994 17.4584 7.80994 15.2759C7.80994 13.0934 7.81999 12.8194 7.85833 11.9622C7.89683 11.107 8.03244 10.5228 8.23168 10.0117C8.4376 9.48333 8.71217 9.03497 9.15919 8.58829C9.60587 8.14145 10.0542 7.86687 10.5828 7.66162C11.0937 7.46289 11.6777 7.32744 12.5332 7.28827Z"
              fill="black"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M15.1259 8.68756C15.2659 8.68734 15.4165 8.6874 15.579 8.68748L15.8468 8.68756C17.9925 8.68756 18.2468 8.69526 19.0941 8.73376C19.8777 8.76959 20.3029 8.90052 20.5862 9.01051C20.9612 9.15617 21.2286 9.33029 21.5097 9.61155C21.7909 9.89282 21.9651 10.1607 22.1111 10.5357C22.221 10.8187 22.3521 11.2439 22.3878 12.0274C22.4263 12.8746 22.4347 13.1291 22.4347 15.2737C22.4347 17.4184 22.4263 17.6729 22.3878 18.52C22.352 19.3036 22.221 19.7288 22.1111 20.0118C21.9654 20.3868 21.7909 20.6538 21.5097 20.9349C21.2284 21.2162 20.9614 21.3903 20.5862 21.536C20.3032 21.6465 19.8777 21.7771 19.0941 21.8129C18.247 21.8514 17.9925 21.8598 15.8468 21.8598C13.701 21.8598 13.4467 21.8514 12.5995 21.8129C11.816 21.7767 11.3907 21.6458 11.1073 21.5358C10.7323 21.3901 10.4644 21.216 10.1831 20.9348C9.90185 20.6535 9.72774 20.3863 9.58174 20.0111C9.47175 19.7282 9.34066 19.3029 9.305 18.5194C9.26649 17.6722 9.25879 17.4177 9.25879 15.2717C9.25879 13.1257 9.26649 12.8726 9.305 12.0254C9.34083 11.2419 9.47175 10.8167 9.58174 10.5334C9.7274 10.1584 9.90185 9.89048 10.1831 9.60921C10.4644 9.32794 10.7323 9.15382 11.1073 9.00783C11.3906 8.89733 11.816 8.76675 12.5995 8.73075C13.3409 8.69727 13.6281 8.68722 15.1259 8.68555V8.68756ZM20.1365 10.0221C19.6041 10.0221 19.1721 10.4535 19.1721 10.9861C19.1721 11.5185 19.6041 11.9504 20.1365 11.9504C20.6689 11.9504 21.1008 11.5185 21.1008 10.9861C21.1008 10.4537 20.6689 10.0218 20.1365 10.0218V10.0221ZM11.7198 15.2758C11.7198 12.9968 13.5676 11.149 15.8466 11.1489C18.1257 11.1489 19.973 12.9967 19.973 15.2758C19.973 17.5549 18.1259 19.4019 15.8468 19.4019C13.5677 19.4019 11.7198 17.5549 11.7198 15.2758Z"
              fill="black"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M15.8467 12.5972C17.326 12.5972 18.5254 13.7964 18.5254 15.2759C18.5254 16.7552 17.326 17.9546 15.8467 17.9546C14.3672 17.9546 13.168 16.7552 13.168 15.2759C13.168 13.7964 14.3672 12.5972 15.8467 12.5972V12.5972Z"
              fill="black"
            />
          </svg>
        </a>
      </section>
      <Footer />
    </div>
  );
}

export default App;
