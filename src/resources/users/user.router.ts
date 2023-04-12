import { FastifyInstance } from "fastify";
import { userController } from "./user.controller";


export async function userRouter(app: FastifyInstance) {
    app.post('/user', userController.create)
    app.get('/user/:id', userController.selectById)
    app.get('/user/find/:email', userController.selectByEmail)
    app.patch('/user/:id', userController.update)
    app.delete('/users/', userController.delete)
}