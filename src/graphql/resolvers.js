import { getReviews, searchReview, searchReviewer } from "./db";

const resolvers = {
  Query: {
    reviews: (_, { limit }) => getReviews(limit),
    search: (_, { query }) => searchReview(query),
    reviewer: (_, { reviewer }) => searchReviewer(reviewer),
  },
};

export default resolvers;
