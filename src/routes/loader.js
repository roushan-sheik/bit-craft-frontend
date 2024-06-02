import axios from "axios";

//NOTE - loader function
const homeLoader = async () => {
  const products = await fetchData("./products.json");
  return { products };
};
export default homeLoader;

//  fetch function
async function fetchData(url) {
  const data = await axios.get(url, { withCredentials: true });
  return data.data;
}
