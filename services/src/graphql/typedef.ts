import { User } from "./user";

export const typeDefs = `#graphql
    ${User.typeDefs}
    type Query {
        ${User.queries}
    }
    type Mutation {
        ${User.mutations}
    }
`
