import { StatusCodes } from "http-status-codes";


class ErrorHelper {
    Unauthorized() {
        return {
            message: `This is a unauthorized request`,
            code: StatusCodes.UNAUTHORIZED,
        }
    }

    NotFound() {
        return {
            message: `We don't found this in our basedata`,
            code: StatusCodes.NOT_FOUND,
        }
    }

    AlreadyExist() {
        return {
            message: `This account already exists`,
            code: StatusCodes.CONFLICT,
        }
    }

    ServiceError() {
        return {
            message: `This is a service error`,
            code: StatusCodes.EXPECTATION_FAILED
        }
    }
}



export const errorHelper = new ErrorHelper()


