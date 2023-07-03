import Button from "./Button";

export const Card = ({ name, brand, price }) => {
  return (
    <section className="Card">
      <section className="Card-img">
        <img src="https://lh3.googleusercontent.com/drive-viewer/AFGJ81ruQy75uuBodC1edDUJ2GCUVF8jw_GeA0abq8q1OtsciYBIwfTvZinWzW9n8sQjhomTtqumORjw6zSANYJFN5kPRzx5Ag=s1600" alt="Device" className="Card-img--size" />
      </section>
      <section className="Card-item">
        <section className="Card-description">
          <h2 className="Card-h">{name}</h2>
          <h3 className="Card-h Card-h--light">{brand}</h3>
        </section>
        <section className="Card-info">
          <h3 className="Card-h Card-h--bold">{price}</h3>
          <Button className="Button" title="Alquilar" />
        </section>
      </section>
    </section>
  );
};
