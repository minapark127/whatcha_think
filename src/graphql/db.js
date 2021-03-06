import axios from "axios";

const BASE_REVIEW_URL = `https://api.nytimes.com/svc/movies/v2/reviews/picks.json?`;
const BASE_SEARCH_URL = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?`;

export const getReviews = async (limit) => {
  try {
    const {
      data: { results },
    } = await axios(BASE_REVIEW_URL, {
      params: {
        offset: limit,
        order: "by-publication-date",
        "api-key": process.env.NYT_KEY,
      },
    });
    return results;
  } catch (error) {
    console.error(error);
  }
};
