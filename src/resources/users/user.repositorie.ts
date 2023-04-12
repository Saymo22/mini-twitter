import { PrismaClient, Prisma, User } from "@prisma/client";

const prisma = new PrismaClient()

class UserRepositorie {

    async create(data: Prisma.UserCreateInput): Promise<User> {
        const user = await prisma.user.create({
            data,
        })

        return user
    }


    async selectById(id: number): Promise<User | null> {
        const user = await prisma.user.findUnique({
            where: { id },
            include: {
                twittes: true
            }
        })

        return user
    }

    async selectByEmail(email: string): Promise<User | null> {
        const user = await prisma.user.findUnique({
            where: { email },
            include: {
                twittes: true
            }
        })

        return user
    }

    async update(id:number, data: Prisma.UserUpdateInput): Promise<User> {
        const user = await prisma.user.update({
            where: {
                id,
            },
            data,
        })

        return user
    }

    async delete(id: number): Promise<User | null> {
        const user = await prisma.user.delete({
            where: {
                id,
            },
        })

        return user
    }
}

export const userRepositorie = new UserRepositorie()