import { ItemGrid } from "../components/ItemGrid";
import { useFetch } from "../util/useFetch";

const apiURL = import.meta.env.VITE_API;

export const Phone = () => {
  const URL = `${apiURL}phone`;
  const items = useFetch(URL);

  return (
    <>
      <ItemGrid item="phone"/>
    </>
  );
};