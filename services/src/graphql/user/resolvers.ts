import { userService } from "Auth-app-Graphql"

const queries = {

  getUserToken: async ( _: any, payload: { email: string; password: string }) => {
    const token = await userService.getUserToken({
      email: payload.email,
      password: payload.password,
    });
    return token;
  },

  getCurrentLoggedInUser: async (_: any, parameters: any, context: any) => {
    if (context && context.user) {
      const id = context.user.id;
      const user = await userService.getUserById(id);
      return user;
    }
    throw new Error("Unable to find the user!");
  }

};

const mutations = {
  createUser: async (_: any, payload: {
    name: string
    email: string
    password: string
    role: string
  }) => {
    const res = await userService.createUser(payload);
    return res.id;
  },
};

export const resolvers = { queries, mutations };
