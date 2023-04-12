import { FastifyReply, FastifyRequest } from "fastify";
import { StatusCodes } from "http-status-codes";
import { userService } from "./user.service";
import { CustomError } from "../../@types/custom.error";
import { UserCreateSchema } from "./dto/userCreate.schema";
import { UserSelectByIdSchema } from "./dto/userSelectById.schema";
import { UserSelectByEmailSchema } from "./dto/userSelectByEmail.schema";

class UserController {
    async create(request: FastifyRequest, reply: FastifyReply) {
        
        const data = UserCreateSchema.parse(request.body)

        try {
            const user = await userService.create(data)
            reply.status(StatusCodes.ACCEPTED).send(user)
        } catch (error: any | CustomError) {
           reply.status(error?.code).send({ message: error?.message })
        }
    }

    async selectById(request: FastifyRequest, reply: FastifyReply) {

        const { id } = UserSelectByIdSchema.parse(request.params)

        try {
            const user = await userService.selectById(+id)
            reply.status(StatusCodes.OK).send(user)
        } catch (error: any) {
            reply.status(error?.code).send({ message: error?.message })
        }

    }

    async selectByEmail(request: FastifyRequest, reply: FastifyReply) {

        const { email } = UserSelectByEmailSchema.parse(request.params)

        try {
            const user = await userService.selectByEmail(email)
            reply.status(StatusCodes.OK).send(user)
        } catch (error: any) {
            reply.status(error?.code).send({ message: error?.message })
        }
    }

    async update(request: FastifyRequest, reply: FastifyReply) {
        
        const { id } = UserSelectByIdSchema.parse(request.params)
        const data = UserCreateSchema.parse(request.body)

        try {
            
            const user = await userService.update(+id, data)

            return user

        } catch (error: any) {
            reply.status(error?.code).send({ message: error?.message })
        }

    }

    async delete(request: FastifyRequest, reply: FastifyReply) {

        const { id } = UserSelectByIdSchema.parse(request.params)

        try {
            const user = await userService.delete(+id)
            reply.status(StatusCodes.OK).send(user)
        } catch (error: any) {
            reply.status(error?.code).send({ message: error?.message })
        }

    }
}

export const userController = new UserController()