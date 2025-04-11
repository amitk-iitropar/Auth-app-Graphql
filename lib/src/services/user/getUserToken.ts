import JWT from "jsonwebtoken";
import { getUserByEmail } from "./getUser";
import { generateHash } from "../../utils/generateHash"

const JWT_SECRET: any = process.env.JWT_SECRET;

export const getUserToken = async (payload: {email: string; password: string}) => {
    const { email, password } = payload;
    const user = await getUserByEmail(email);
    if (!user) throw new Error("user not found");

    const userSalt = user.salt;
    const usersHashPassword = generateHash(userSalt, password);

    if (usersHashPassword !== user.password)
      throw new Error("Incorrect Password");

    // Gen Token
    const token = JWT.sign({ id: user.id, email: user.email }, JWT_SECRET);
    return token;
}

