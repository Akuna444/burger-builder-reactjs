import axios from "axios";

const instance = axios.create({
  baseURL: "https://multipage-react-6e5f7-default-rtdb.firebaseio.com/",
});

export default instance;
