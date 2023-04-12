import { z } from "zod";


export const UserSelectByEmailSchema = z.object({
    email: z.string()
})