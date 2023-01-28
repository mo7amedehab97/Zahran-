import "./index.css";

const Location = ({page}) => {
  return (
    <article className="location_container">
      <p>
        الرئيسية /<span> {page}
         </span>
      </p>
    </article>
  );
};

export default Location;
