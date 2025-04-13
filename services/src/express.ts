import express from "express";
import cors from "cors";
import { expressMiddleware } from "@apollo/server/express4";
import createApolloGraphqlServer from "./graphql";
import { userService } from "Auth-app-Graphql"


export const startExpressApp = async (PORT: number) => {

    const app = express();
    app.use(express.json());
    app.use(cors());

    app.get("/", (req, res) => {
        res.json({ message: "Server is up and running" });
    });

    app.use("/graphql", expressMiddleware(await createApolloGraphqlServer(), {
          context: async ({ req }) => {
            // @ts-ignore
            const token = req.headers["token"];
    
            try {
              const user = userService.decodeJWTToken(token as string);
              return { user };
            } catch (error) {
              return {};
            }
          },
        })
    );

}

