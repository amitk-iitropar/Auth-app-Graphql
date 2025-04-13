export const queries = `#graphql
    getUserToken(email: String!, password: String!): String
    getCurrentLoggedInUser: User
    getUserList: [User]
    getUserById(id: ID!): User
`;
