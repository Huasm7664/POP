import { Response } from "express";
import { Get, JsonController, Put,Post, Delete, Param, Body, QueryParam, Res} from "routing-controllers";
import { Inject, Service } from "typedi";
import { ServiceResponse } from "../dto/response";
import {  CustomerService } from "../services/customerService";
import { HttpResponse } from "../services/httpResponse";


@Service()
@JsonController("/customer")
export class CustomerController{

    @Inject() private customerService: CustomerService;
    @Inject() private httpResponse: HttpResponse;

    @Post()
    async create(@Body() customer: any, @Res() res: Response) {
        let response:ServiceResponse =<ServiceResponse> await this.customerService.create(customer);
        
        if(response.err)
            this.httpResponse.sendError(500,response.err,"can not save to database", res)
        
        this.httpResponse.sendResult(200, response.res, res);
    }

    @Put()
    async update(@Body() customer:any, @QueryParam('id') @Res() res: Response, id:number) {
       let response:ServiceResponse = <ServiceResponse> await this.customerService.update(customer, id);

       if(response.err)
            this.httpResponse.sendError(response.httpCode??500,response.err,"can not save to database", res)
        
        this.httpResponse.sendResult(200, response.res, res);
    }
    @Get("/id/:id")
    findById(@Param('id') id: number){
        
        return(this.customerService.findById(id))
    }
    
    @Get("/list-all") //filter using name and description
    listAll(){
        return(this.customerService.listAll());
    }

    @Delete("/:id")
    delete(@Body() customer:any, @Param('id') id: number){
        return(this.customerService.deleteElement(id));
    }  
}