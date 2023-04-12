import { StatusCodes } from "http-status-codes"
import { TwitteService, twitteService } from "./twitte.service"
import { CustomError } from "../../@types/custom.error"
import { FastifyReply, FastifyRequest } from "fastify"
import { twitteRepositorie } from "./twitte.repositorie"
import { TwitteCreateSchema } from "./dto/twitteCreate.schema"
import { TwitteSelectByIdSchema } from "./dto/twitteSelectById.schema"
import { TwitteSelectByTitleSchema } from "./dto/twitteSelectByTitle.schema"



class TwitteController {
    async create(request: FastifyRequest, reply: FastifyReply) {
        
        const data: any = TwitteCreateSchema.parse(request.body)

        try {
            const twitte = await twitteService.create(data)
            reply.status(StatusCodes.ACCEPTED).send(twitte)
        } catch (error: any | CustomError) {
           reply.status(error?.code).send({ message: error?.message })
        }
    }

    async selectAll(request: FastifyRequest, reply: FastifyReply) {
        try {

            const twittes = await twitteService.selectAll()

            reply.status(StatusCodes.OK).send(twittes)
            
        } catch (error: any) {
            reply.status(error?.code).send({ message: error?.message })
        }
    }

    async selectById(request: FastifyRequest, reply: FastifyReply) {

        const { id } = TwitteSelectByIdSchema.parse(request.params)

        try {
            
            const twitte = await twitteService.selectById(+id)
            
            reply.status(StatusCodes.OK).send(twitte)
            
        } catch (error: any) {
            reply.status(error?.code).send({ message: error?.message })
        }
    }

    async selectByTitle(request: FastifyRequest, reply: FastifyReply) {

        const { title } = TwitteSelectByTitleSchema.parse(request.params)

        try {
            
            const twitte = await twitteService.selectByTittle(title)           
            reply.status(StatusCodes.OK).send(twitte)
            
        } catch (error: any) {
            reply.status(error?.code).send({ message: error?.message })
        }
    }

    async update(request: FastifyRequest, reply: FastifyReply) {
        const { id } = TwitteSelectByIdSchema.parse(request.params)
        const { data }: any = TwitteCreateSchema.parse(request.body)

        try {
            
            const twitte = await twitteService.update(+id, data)

            return twitte

        } catch (error: any) {
            reply.status(error?.code).send({ message: error?.message })
        }
    }

    async delete(request: FastifyRequest, reply: FastifyReply) {
        const { id } = TwitteSelectByIdSchema.parse(request.params)
        try
         {
            
            const twitte = await twitteRepositorie.delete(+id)

            return twitte

        } catch (error: any) {
            reply.status(error?.code).send({ message: error?.message })
        }
    }
}

export const twitteController = new TwitteController()