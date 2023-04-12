import { z } from "zod";


export const UserCreateSchema = z.object({
    name: z.string(),
    last_name: z.string(),
    email: z.string(),
    password_hash: z.string().min(6)
})