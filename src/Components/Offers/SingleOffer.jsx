import "./single.css";

const SingleOffer = ({ data, bg }) => {
  return (
    <article className={`single_offer_holder ${bg}`}>
      <section className="offer_national">
        <h3>الجنسية </h3>
        <p>اوغندي</p>
      </section>
      <section className="offer_before">
        <h3>قبل الخصم</h3>
        <p>22 ر.س</p>
      </section>
      <section className="offer_after">
        <h3>بعد الخصم </h3>
        <p>ر.س 33</p>
      </section>
    </article>
  );
};

export default SingleOffer;
