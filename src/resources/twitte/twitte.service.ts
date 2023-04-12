import { Prisma, PrismaClient, Twitte } from "@prisma/client";
import { errorHelper } from "../../helpers/error.helper";
import { CustomError } from "../../@types/custom.error";
import { twitteRepositorie } from "./twitte.repositorie";
import { Verify } from "crypto";



export class TwitteService {

    async create(data: Prisma.TwitteCreateInput): Promise<Twitte> {
        try {

            const twitte = await twitteRepositorie.create(data)

            if(!twitte) {
                throw new CustomError(
                    errorHelper.ServiceError().message,
                    errorHelper.ServiceError().code,
                )
            }

            return twitte
            
        } catch (error) {
            console.log(error)
            throw new CustomError(
                errorHelper.ServiceError().message,
                errorHelper.ServiceError().code
            )
        }
    }

    async selectAll(): Promise<Twitte[]> {
        try {

            const twittes = await twitteRepositorie.selectAll()

            if(!twittes) {
                throw new CustomError(
                    errorHelper.NotFound().message,
                    errorHelper.NotFound().code,
                )
            }

            return twittes
            
        } catch (error) {
            console.log(error)
            throw new CustomError(
                errorHelper.ServiceError().message,
                errorHelper.ServiceError().code
            )
        }
    }

    async selectById(id: number): Promise<Twitte | null> {
        const verify = await twitteRepositorie.selectById(id)

            if(!Verify) {
                throw new CustomError(
                    errorHelper.NotFound().message,
                    errorHelper.NotFound().code,
                )
            }

        try {

            const twitte = await twitteRepositorie.selectById(id)

            return twitte
            
        } catch (error) {
            console.log(error)
            throw new CustomError(
                errorHelper.ServiceError().message,
                errorHelper.ServiceError().code
            )
        }
    }

    async selectByTittle(title: string): Promise<Twitte[] | null> {
        try {

            const twittes = await twitteRepositorie.selectByTitle(title)
            
            if(!twittes) {
                throw new CustomError(
                    errorHelper.NotFound().message,
                    errorHelper.NotFound().code,
                )
            }

            return twittes


        } catch (error) {
            console.log(error)
            throw new CustomError(
                errorHelper.ServiceError().message,
                errorHelper.ServiceError().code
            )
        }
    }

    async update(id:number, data: Prisma.TwitteUpdateInput): Promise<Twitte> {
        try {

            const verify = await twitteRepositorie.selectById(id)

            if (!verify) {
                throw new CustomError(
                    errorHelper.NotFound().message,
                    errorHelper.NotFound().code,
                )
            }
            
            const twitte = await twitteRepositorie.update(id, data)
            
            return twitte

        } catch (error) {
            console.log(error)
            throw new CustomError(
                errorHelper.ServiceError().message,
                errorHelper.ServiceError().code
            )
        }
    }

    async delete(id:number): Promise<Twitte | null> {
        try {

            const verify = await twitteRepositorie.selectById(id)

            if (!verify) {
                throw new CustomError(
                    errorHelper.NotFound().message,
                    errorHelper.NotFound().code,
                )
            }
            
            const twitte = await twitteRepositorie.delete(id)
            
            return twitte

        } catch (error) {
            console.log(error)
            throw new CustomError(
                errorHelper.ServiceError().message,
                errorHelper.ServiceError().code
            )
        }
    }
}

export const twitteService = new TwitteService()