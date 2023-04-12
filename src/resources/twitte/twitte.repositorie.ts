import { PrismaClient, Prisma, Twitte } from "@prisma/client";

const prisma = new PrismaClient()

class TwitteRepositorie {

    async create(data: Prisma.TwitteCreateInput): Promise<Twitte> {
        const twitte = await prisma.twitte.create({
            data: {
                twitte: data.twitte,
                user_id: +data.user,
            }
        })

        return twitte
    }

    async selectAll(): Promise<Twitte[]> {
        const twittes = await prisma.twitte.findMany({
            include: {
                comments: true,
            }
        })

        return twittes
    }

    async selectById(id: number): Promise<Twitte | null> {
        const twitte = await prisma.twitte.findUnique({
            where: {
                id,
            },
            include: {
                comments: true,
            }
        })

        return twitte
    }

    async selectByTitle(twitte: string): Promise<Twitte[] | null> {
        const twittes = await prisma.twitte.findMany({
            where: {
                twitte: {
                    startsWith: `${twitte}`,
                }
            },
            include: {
                comments: true,
            }
        })

        return twittes
    }

    async update(id: number, data: Prisma.TwitteUpdateInput): Promise<Twitte> {
        const twitte = await prisma.twitte.update({
            where: {
                id,
            },
            data,
        })

        return twitte
    } 

    async delete(id: number): Promise<Twitte | null> {
        const twitte = await prisma.twitte.delete({
            where: {
                id,
            },
        })

        return twitte
    }
}

export const twitteRepositorie = new TwitteRepositorie()