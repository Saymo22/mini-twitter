import { z } from "zod";


export const TwitteCreateSchema = z.object({
    user: z.number(),
    twitte: z.string()
})