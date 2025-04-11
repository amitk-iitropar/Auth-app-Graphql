import { createHmac, randomBytes } from "node:crypto";

export const generateHash = (salt: string, password: string) => {
    const hashedPassword = createHmac("sha256", salt)
      .update(password)
      .digest("hex");
    return hashedPassword;
}