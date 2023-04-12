import { z } from "zod";


export const TwitteSelectByTitleSchema = z.object({
    title: z.string()
})