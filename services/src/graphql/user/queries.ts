export const queries = `#graphql
    getUserToken(email: String!, password: String!): String
    getCurrentLoggedInUser: User
    getUsers: [User]
    getUserById(id: ID!): User
`;
