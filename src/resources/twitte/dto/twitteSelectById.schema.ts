import { z } from "zod";


export const TwitteSelectByIdSchema = z.object({
    id: z.string()
})