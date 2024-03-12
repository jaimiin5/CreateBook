import axios from "axios";

const searchImg = async () => {
  const url = "https://api.unsplash.com/search/photos";
  const data = await axios.get(url, {
    headers: {
      Authorization: "Client-ID -VfueLb0YCE00dbo36ATd4skg8d3nFGcuz4BqwwEqcU",
    },
    params: {
      query: "cars",
    },
  });
  console.log(data);
  return data;
};

export default searchImg;
