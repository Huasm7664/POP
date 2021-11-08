import { Response } from "express";
import { Get, JsonController, Put,Post, Delete, Param, Body, QueryParam, Res} from "routing-controllers";
import { Inject, Service } from "typedi";
import {  InvoiceDetailService } from "../services/invoiceDetailService";
import { ServiceResponse } from "../dto/response";
import { HttpResponse } from "../services/httpResponse";

@Service()
@JsonController("/invoice-detail")
export class InvoiceDetailController{

    @Inject() private invoiceDetailService: InvoiceDetailService;
    @Inject() private httpResponse: HttpResponse;

    @Post()
    async create(@Body() invoiceDetail: any, @Res() res: Response) {
        let response:ServiceResponse =<ServiceResponse> await this.invoiceDetailService.create(invoiceDetail);
        if(response.err)
            this.httpResponse.sendError(500,response.err,"can not save to database", res)
        
        this.httpResponse.sendResult(200, response.res, res);
    }
    @Put()
    async update(@Body() invoiceDetail:any, @QueryParam('id') @Res() res: Response, id:number) {
       let response:ServiceResponse = <ServiceResponse> await this.invoiceDetailService.update(invoiceDetail, id);
       if(response.err)
            this.httpResponse.sendError(response.httpCode??500,response.err,"can not save to database", res)
        
        this.httpResponse.sendResult(200, response.res, res);
    }
    @Get("/id/:id")
    findById(@Param('id') id: number){
        
        return(this.invoiceDetailService.findById(id))
    }
    
    @Get("/list-all") //filter using name and description
    listAll(){
        return(this.invoiceDetailService.listAll());
    }

    @Delete("/:id")
    delete(@Body() invoiceDetail:any, @Param('id') id: number){
        return(this.invoiceDetailService.deleteElement(id));
    }  
}