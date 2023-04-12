import { z } from "zod";


export const CommentCreateSchema = z.object({
    user_id: z.number(),
    comment: z.string()
})