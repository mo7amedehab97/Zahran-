import "./index.css";
import Title from "../Title/Title";
import gold from "../../assets/gold.svg";
import silver from "../../assets/silver.svg";
import SingleOffer from "./SingleOffer";

const offersList = [{}];
const Offers = () => {
  return (
    <section className="offers_container">
      <Title title="أحدث العروض" />
      <section className="offers_holder_list">
        <article className="offers_col1">
          <div className="offers_title">
            <img src={gold} alt="ايقونة العرض الذهبي موقع زهران" />
            <h2>العرض الذهبي من زهران</h2>
          </div>
          <article className="offer_details1">
            <div className="offer_description">
              <h3> احصل على أفضل العاملات مع شركة زهران بسعر خرافي</h3>
              <p>_ العرض لمدة سنتين </p>
              <p>_ ستةأشهر منها تجريبية </p>
              <p>_ بالاضافى الي شهر واحد بشكل مجاني بالكامل </p>
              <h3> زهران خيارك الافضل </h3>
            </div>
            <div className="offer_prices_list">
              <SingleOffer bg="single_offer_holder_gold" />
              <SingleOffer bg="single_offer_holder_gold" />
              <SingleOffer bg="single_offer_holder_gold" />
              <SingleOffer bg="single_offer_holder_gold" />
            </div>
          </article>
        </article>
        <article className="offers_col2">
          <div className="offers_title2">
            <img src={silver} alt="ايقونة العرض الفضي موقع زهران" />
            <h2>العرض الفضي من زهران</h2>
          </div>
          <article className="offer_details1">
            <div className="offer_description">
              <h3> احصل على أفضل العاملات مع شركة زهران بسعر خرافي</h3>
              <p>
                العرض لمدة سنتين ستةأشهر منها تجريبية + شهر واحد بشكل مجاني
                بالكامل{" "}
              </p>
            </div>
            <div className="offer_prices_list">
              <SingleOffer bg="single_offer_holder_grey" />
              <SingleOffer bg="single_offer_holder_grey" />
              <SingleOffer bg="single_offer_holder_grey" />
              <SingleOffer bg="single_offer_holder_grey" />
            </div>
          </article>
        </article>
      </section>
    </section>
  );
};

export default Offers;
