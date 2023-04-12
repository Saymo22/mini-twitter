import { FastifyReply, FastifyRequest } from "fastify";
import { commentService } from "./comment.service";
import { CommentCreateSchema } from "./dto/commentCreate.schema";

class CommentController {
    async create(request: FastifyRequest, reply: FastifyReply) {

        const { id }: any = request.params
        const data = CommentCreateSchema.parse(request.body)

        try {

            const comment =  await commentService.create(+id, data)

            return comment

        } catch (error: any) {
            reply.status(error?.code).send({ message: error?.message })
        }
    }
}

export const commentController = new CommentController()