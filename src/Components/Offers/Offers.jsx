import "./index.css";
import Title from "../Title/Title";
import gold from "../../assets/gold.svg";
import silver from "../../assets/silver.svg";
import SingleOffer from "./SingleOffer";
import whatsApp from "../../assets/whatsapp.svg";
import SingleOffer2 from "./SingleOffer2";
const offersList = [
  { country: "اندونيسيا", after: "16900", before: "18500" },
  { country: "الفلبين", after: "16000", before: "18000" },
  { country: "اوغندا", after: "16200", before: "17500" },
  { country: "كينيا", after: "16500", before: "17800" },
];
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
              <div className="whatsapp_holder">
                <h3> زهران خيارك الافضل </h3>
                <a href="http://wa.me/+966570222064" target="_blank">
                  <img src={whatsApp} alt="زر تواصل مع زهران واتس اب" />
                </a>
              </div>{" "}
            </div>
            <div className="offer_prices_list">
              {offersList.map((item) => {
                return (
                  <SingleOffer
                    bg="single_offer_holder_gold"
                    data={item}
                    key={item.country}
                  />
                );
              })}
            </div>
          </article>
        </article>
        <article className="offers_col2">
          <div className="offers_title2">
            <img src={silver} alt="ايقونة العرض الفضي موقع زهران" />
            <h2> العرض الفضي من زهران</h2>
          </div>
          <article className="offer_details1">
            <div className="offer_description">
              <h3> احصل على أفضل العاملات مع شركة زهران بسعر خرافي</h3>
              <p>_العرض لمدة شهر</p>
              <p>_سعر منافس </p>
              <p>_ جنسيات مختلفة ومتنوعة (المغرب, اثيوبيا , باكستان,الهند)</p>
              <div className="whatsapp_holder">
                <h3> زهران خيارك الافضل </h3>
                <a href="http://wa.me/+966570222064" target="_blank">
                  <img src={whatsApp} alt="زر تواصل مع زهران واتس اب" />
                </a>
              </div>
            </div>
            <div className="offer_prices_list">
              <SingleOffer2 />
            </div>
          </article>
        </article>
      </section>
    </section>
  );
};

export default Offers;
