import { ErrorCode } from "../../constant/ErrorCode";

export default class ResponseDTO<T> {
    errorCode: string;
    errorDesc: string;
    data?: T
    constructor(data?: T) {
        this.errorCode = ErrorCode.SUCCESS.code
        this.errorDesc = ErrorCode.SUCCESS.desc
        this.data = data;
    }
}