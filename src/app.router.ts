import { FastifyInstance } from "fastify";
import { userController } from "./resources/users/user.controller";

export async function appRouter(app: FastifyInstance) {
    app.get('/', () => {
        return { message: `Hello World` }
    })
}
