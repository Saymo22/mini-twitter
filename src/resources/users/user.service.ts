import { Prisma, User } from "@prisma/client";
import { CustomError } from "../../@types/custom.error";
import { errorHelper } from "../../helpers/error.helper";
import { hashHelper } from "../../helpers/hash.helper";
import { userRepositorie } from "./user.repositorie";

class UserService {
    async   create(data: Prisma.UserCreateInput): Promise<User> {
        const verify = await userRepositorie.selectByEmail(data.email)

        if (verify != null) {
            throw new CustomError(
                errorHelper.AlreadyExist().message,
                errorHelper.AlreadyExist().code
            )
        }

        data.password_hash = await hashHelper.generate(data.password_hash)

        try {
            
            const user = await userRepositorie.create(data)
            
            return user
            
        } catch (error) {
            console.log(error)
            throw new CustomError(
                errorHelper.ServiceError().message,
                errorHelper.ServiceError().code
            )
        }
    }
    
    async selectById(id: number): Promise<User | null> {
        const verify = await userRepositorie.selectById(id)

        if (!verify) {
            throw new CustomError(
                errorHelper.NotFound().message,
                errorHelper.NotFound().code,
            )
        }

        try {

            const user = await userRepositorie.selectById(id)
            
            return user
            
        } catch (error) {
            console.log(error)
            throw new CustomError(
                errorHelper.ServiceError().message,
                errorHelper.ServiceError().code
            )
        }
    }

    async selectByEmail(email: string): Promise<User | null> {
        const verify = await userRepositorie.selectByEmail(email)

        if (!verify) {
            throw new CustomError(
                errorHelper.NotFound().message,
                errorHelper.NotFound().code,
            )
        }

        try {

            const user = await userRepositorie.selectByEmail(email)

            return user
            
        } catch (error) {
            console.log(error)
            throw new CustomError(
                errorHelper.ServiceError().message,
                errorHelper.ServiceError().code
            )
        }

    }

    async update(id: number, data: Prisma.UserUpdateInput): Promise<User> {
        const verify = await userRepositorie.selectById(id)

        if (!verify) {
            throw new CustomError(
                errorHelper.NotFound().message,
                errorHelper.NotFound().code,
            )
        }

        data.password_hash = await hashHelper.generate(data.password_hash)

        try {

            const user = await userRepositorie.update(id, data)

            return user
            
        } catch (error) {
            console.log(error)
            throw new CustomError(
                errorHelper.ServiceError().message,
                errorHelper.ServiceError().code
            )
        }
    }

    async delete(id: number): Promise<User | null> {
        const verify = await userRepositorie.selectById(id)

        if (verify != null) {
            throw new CustomError(
                errorHelper.NotFound().message,
                errorHelper.NotFound().code,
            )
        }

        try {

            const user = await userRepositorie.delete(id)

            return user
            
        } catch (error) {
            console.log(error)
            throw new CustomError(
                errorHelper.ServiceError().message,
                errorHelper.ServiceError().code
            )
        }
    }


}

export const userService = new UserService()