import { Comment, Prisma, Twitte } from "@prisma/client";
import { commentRepositorie } from "./comment.repositorie";
import { twitteRepositorie } from "../twitte/twitte.repositorie";
import { CustomError } from "../../@types/custom.error";
import { errorHelper } from "../../helpers/error.helper";
import { userRepositorie } from "../users/user.repositorie";

class CommentService {
    async create(id: number, data: any): Promise<Twitte> {
        const verifyTwitte = await twitteRepositorie.selectById(id)

        if (!verifyTwitte) {
            throw new CustomError(
                errorHelper.NotFound().message,
                +errorHelper.NotFound().code,
            )
        }

        try {

            const comment = await commentRepositorie.create(verifyTwitte.id, data.user_id, data.comment)

            return comment
            
        } catch (error: any) {
            throw new CustomError(
                errorHelper.ServiceError().message,
                +errorHelper.ServiceError().code
            )
        }
    }
}

export const commentService = new CommentService()