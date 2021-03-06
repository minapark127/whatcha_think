import { getReviews } from "./db";

const resolvers = {
  Query: {
    reviews: (_, { limit }) => getReviews(limit),
  },
};

export default resolvers;
