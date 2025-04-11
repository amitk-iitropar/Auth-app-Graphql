const { USERS } = require("./user");

export const getUserById = async (id: string) => {
    return USERS.filter(x => x.id == id);
}

export const getUserByEmail = async (email: string) => {
    return USERS.filter(x => x.email == email);
}