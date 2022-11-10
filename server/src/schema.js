const { gql } = require('apollo-server');

const typeDefs = gql`
  "Query to get tracks array for homepage grid"
  type Query {
    tracksForHome: [Track!]!
  }

  "A track is a group of Modules that teaches about a specific topic"
  type Track {
    id: ID!
    title: String!
    author: Author!
    thumbnail: String
    length: Int
    modulesCount: Int
  }

  "Author of a complete Track"
  type Author {
    id: ID!
    "Author's first and last name"
    name: String!
    photo: String
  }
`;

module.exports = typeDefs;
