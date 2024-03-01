import axios from "axios";

export const fetchProducts = async () => {
  const response = await axios.get("https://v2.api.noroff.dev/online-shop");
  return response.data.data;
};
