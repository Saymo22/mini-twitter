import { FastifyInstance } from "fastify";
import { commentController } from "./comment.controller";


export async function commentRouter(app: FastifyInstance) {
    app.post('/twitte/:id/comment', commentController.create)
}