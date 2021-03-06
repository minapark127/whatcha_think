import { getReviews, searchReview } from "./db";

const resolvers = {
  Query: {
    reviews: (_, { limit }) => getReviews(limit),
    search: (_, { query }) => searchReview(query),
  },
};

export default resolvers;
