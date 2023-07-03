import { useParams } from "react-router-dom";

import { ItemGrid } from "../components/ItemGrid";
import { Device } from "../components/Device";

import laptopImg from "../assets/laptop.png";
import phoneImg from "../assets/Phones.png";
import tabletImg from "../assets/tablet.png";
import vidImg from "../assets/videogameconsole.png";

export const Land = () => {
  const { item } = useParams();

  const ITEM = {
    laptop: { text: "Laptops", device: laptopImg, price: "99.99" },
    phone: { text: "Celulares", device: phoneImg, price: "49.99" },
    tablet: { text: "Tablets", device: tabletImg, price: "69.99" },
    videogameconsole: {
      text: "Consolas de Videojuegos",
      device: vidImg,
      price: "199.99",
    },
  };

  return (
    <>
      <Device text={ITEM[item].text} device={ITEM[item].device} price={ITEM[item].price} />
      <ItemGrid item={item} />
    </>
  );
};
