import { Res, Get, JsonController, Put,Post, Delete, Param, Body, QueryParam, InternalServerError, HttpError, HttpCode} from "routing-controllers";
import { Response } from 'express';
import { Service } from "typedi";

@Service()
export class HttpResponse {

    async sendResult(httpCode: number, result: {}, res: Response) {
        res.status(httpCode).send({"status":httpCode, "result":result});
    }

    async sendError(httpCode: number, err: {}, message: {}, res: Response) {
        res.status(httpCode).send({"status":httpCode,"erro_message":message,"err":err});
    }

}

// @Service()
// export class ClientResponse {

//     async sendResult(httpCode: number, result:{}, res:Response) {
//       res.status(httpCode).send({"status":httpCode, "result":result})
//     }

//     async sendError(httpcode: number, err: {}, message:{}, res: Response){
//         res.status(httpcode).send({"status":httpcode, "error_message":message, "err":err});
//     }

// }