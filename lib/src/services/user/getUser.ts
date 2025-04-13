import * as data from "./users";
import { User } from "./modal";

const USERS: User[] = data.USERS

export const createUser = async (user: User) => {
    user.id = USERS.length + 1;
    USERS.push(user);
    return user;
}

export const getUserById = async (id: number) => {
    return USERS.find(x => x.id == id);
}

export const getUserByEmail = async (email: string) => {
    return USERS.find(x => x.email == email);
}