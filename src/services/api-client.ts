import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "89029331445e475e9fb372952f9b665c",
  },
});
