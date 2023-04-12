import { z } from "zod";


export const UserSelectByIdSchema = z.object({
    id: z.string()
})