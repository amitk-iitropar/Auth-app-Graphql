import * as data from "./users";
import { getProcessedObject, getProcessedObjectList } from "../../utils/getProcessedObject"
import { User, extUser } from "./typedef";
import { USER, EXTUSER } from "./modal";

const USERS: User[] = data.USERS

export const createUser = async (user: User) => {
    user.id = USERS.length + 1;
    USERS.push(user);
    return user;
}

export const getUserList = async () => {
    return getProcessedObjectList(EXTUSER, USERS);
}

export const getUserById = async (id: number) => {
    const result = USERS.find(x => x.id == id);
    const newExtUser = EXTUSER();
    return result ? getProcessedObject(result, newExtUser) : {};
}

export const getUserByEmail = async (email: string) => {
    const result = USERS.find(x => x.email == email);
    const newExtUser = EXTUSER();
    return result ? getProcessedObject(result, newExtUser) : {};
}

