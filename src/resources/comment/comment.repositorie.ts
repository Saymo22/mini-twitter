import { PrismaClient, Prisma, Comment, Twitte } from "@prisma/client";

const prisma = new PrismaClient()

export class CommentRepositorie {

    async create(twitte_id: number, user_id: number, newComment: string): Promise<Twitte> {
        const comment = await prisma.twitte.update({
            where: {
                id: twitte_id,
            },
            data: {
                comments: {
                    create: {
                        user_id,
                        comment: newComment,
                    }
                }
            },
            include: {
                comments: true,
            }
        })

        return comment
    }

    async selectById(id: number): Promise<Comment | null> {
        const comment = await prisma.comment.findUnique({
            where: {
                id,
            },
        })

        return comment
    }

    async selectByTwitteId(id: number): Promise<Comment[] | null> {
        const comment = await prisma.comment.findMany({
            where: {
                twitte_id: id,
            },
        })

        return comment
    }

    async update(id: number, data: Prisma.CommentUpdateInput): Promise<Comment> {
        const comment = await prisma.comment.update({
            where: {
                id,
            },
            data,
        })

        return comment
    }

    async delete(id: number): Promise<Comment | null> {
        const comment = await prisma.comment.delete({
            where: {
                id,
            },
        })

        return comment
    }
}

export const commentRepositorie = new CommentRepositorie()