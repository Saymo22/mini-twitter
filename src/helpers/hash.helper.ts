import { compare, hash } from "bcryptjs";

class HashHelper {
    async generate(password_hash: any) {
        const genHash = await hash(password_hash, 6)
        return genHash
    }

    async compare(password: string, password_hash: string): Promise<Boolean> {
        const result = await compare(password, password_hash)
        return result
    }
}

export const hashHelper = new HashHelper()