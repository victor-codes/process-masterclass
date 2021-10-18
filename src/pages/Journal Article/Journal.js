import React from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import NewsCard from "../../Components/NewsBlock/NewsCard";

export default function Journal() {
  return (
    <div className="App">
      <Header />
      <div>
        <div></div>
        <section>
          <img src="" alt="" />
          <div></div>
          <h2>New silhouettes for a new decade</h2>
          <span>Written by Claire Khan</span>
          <p>
            <span>A </span>cross fashion we see a different shapes appear across
            eras. At vero eos et accusamus et iusto
          </p>
          <p>
            odio dignissimos ducimus qui blanditiis praesentium voluptatum
            deleniti atque corrupti quos dolores et uas molestias excepturi sint
            occaecati cupiditate non provident, similique sunt in culpa qui
            officia deserunt mollitia animi, id est laborum et dolorum fuga. Et
            harum quidem rerum facilis est et expedita distinctio. Nam libero
            tempore, cum soluta nobis est eligendi optio cumque nihil impedit
            quo minus id quod maxime placeat facere possimus, omnis voluptas
            assumenda est, omnis dolor repellendus. Temporibus autem quibusdam
            et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et
            voluptates repudiandae sint et molestiae non recusandae. Itaque
            earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
            voluptatibus maiores alias consequatur aut perferendis doloribus
            asperiores repellat. Fuas molestias excepturi sint occaecati
            cupiditate non provident, similique sunt in culpa qui officia
            deserunt mollitia animi, id est laborum et dolorum fuga. Et harum
            quidem rerum facilis est et expedita distinctio. Nam libero tempore,
            cum soluta nobis est eligendi optio cumque nihil impedit quo minus
            id quod maxime placeat facere possimus, omnis voluptas assumenda
            est, omnis dolor repellendus. Temporibus autem quibusdam et aut
            officiis debitis aut rerum necessitatibus saepe eveniet ut et
            voluptates repudiandae sint et molestiae non recusandae. Itaque
            earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
            voluptatibus maiores alias consequatur aut perferendis doloribus
            asperiores repellat. Nam libero tempore, cum soluta nobis est
            eligendi optio cumque nihil impedit quo minus id quod maxime placeat
            facere possimus, omnis voluptas assumenda est, omnis dolor
            repellendus. Temporibus autem quibusdam et aut officiis debitis aut
            rerum necessitatibus saeprepellat.
          </p>
          <p>
            “ Apart from materials, fit is everything when it comes to clothes
            to well made clothing ”
          </p>
          <figure>
            <img src="" alt="" />
            <figcaption>
              Fuas molestias excepturi sint occaecati cupiditate non provident
            </figcaption>
          </figure>
          <h3>Shapes change with the times</h3>
          <p>
            Fuas molestias excepturi sint occaecati cupiditate non provident,
            similique sunt in culpa qui officia deserunt mollitia animi, id est
            laborum et dolorum fuga. Et harum quidem rerum facilis est et
            expedita distinctio. Nam libero tempore, cum soluta nobis est
            eligendi optio cumque nihil impedit quo minus id quod maxime placeat
            facere possimus, omnis voluptas assumenda est, omnis dolor
            repellendus. Temporibus autem quibusdam et aut officiis debitis aut
            rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint
            et molestiae non recusandae. Itaque earum rerum hic tenetur a
            sapiente delectus, ut aut reiciendis voluptatibus maiores alias
            consequatur aut perferendis doloribus asperiores repellat. Nam
            libero tempore, cum soluta nobis est eligendi optio cumque nihil
            impedit quo minus id quod maxime placeat facere possimus, omnis
            voluptas assumenda est, omnis dolor repellendus. Temporibus autem
            quibusdam et aut officiis debitis aut rerum necessitatibus.
          </p>
          <div>
            <h6>Dig this article? SHARE THE LOVE</h6>
            <div className="flex">
              <div>
                <svg></svg>
              </div>
              <div>
                <svg></svg>
              </div>
              <div>
                <svg></svg>
              </div>
            </div>
            <h4>12 comments +</h4>
          </div>
        </section>
      </div>
      <section className="next_story_container">
        <div>
          <img src="" alt="" />
          <div>
            <h6>NEXT Story</h6>
            <p>
              New collection launches — a collaboration between two great
              designers
            </p>
          </div>
        </div>
        <div>
          <img src="" alt="" />
          <div>
            <h6>PREVIOUS Story</h6>
            <p>
              New collection launches — a collaboration between two great
              designers
            </p>
          </div>
        </div>
      </section>
      <section className="related_stories">
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
      </section>
      <Footer />
    </div>
  );
}