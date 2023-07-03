import { Device } from "../components/Device";
import { ItemGrid } from "../components/ItemGrid";

import devices from "../assets/devices.png";

export const Home = () => {
  return (
    <>
      <Device text="¡Todo en un solo lugar!" device={devices} price="49.99"/>
      <ItemGrid item="item"/>
    </>
  );
};
