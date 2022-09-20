import axios from "axios";

const KEY = "AIzaSyCDx01huNgBAGG4K5Sk8fiRFRvZ36oUSk0";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
