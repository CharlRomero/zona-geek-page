import { Device } from "../components/Device";
import { ItemGrid } from "../components/ItemGrid";
import { Card } from "../components/Card";

export const Home = () => {
  return (
    <>
      <Device />
      <Card name="Phone" brand="Apple" price="440"/>
      <ItemGrid item="item"/>
    </>
  );
};
