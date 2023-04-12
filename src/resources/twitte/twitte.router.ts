import { FastifyInstance } from "fastify";
import { twitteController } from "./twitte.controller";

export async function twitteRouter(app: FastifyInstance) {
    app.post('/twitte', twitteController.create)
    app.get('/twitte', twitteController.selectAll)
    app.get('/twitte/:id', twitteController.selectById)
    app.get('/twitte/find/:title', twitteController.selectByTitle)
    app.patch('/twitte', twitteController.update)
    app.delete('/twitte/:id', twitteController.delete)
}