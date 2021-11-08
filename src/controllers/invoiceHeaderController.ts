import { Response } from "express";
import { Get, JsonController, Put,Post, Delete, Param, Body, QueryParam, Res} from "routing-controllers";
import { Inject, Service } from "typedi";
import { ServiceResponse } from "../dto/response";
import { InvoiceHeaderService} from "../services/invoiceHeaderService";
import { HttpResponse } from "../services/httpResponse";

@Service()
@JsonController("/invoice-header")
export class InvoiceHeaderController{

    @Inject() private invoiceHeaderService: InvoiceHeaderService;
    @Inject() private httpResponse: HttpResponse;

    @Post()
    async create(@Body() invoiceHeader: any, @Res() res: Response) {
        let response:ServiceResponse=<ServiceResponse> await this.invoiceHeaderService.create(invoiceHeader);
        
        if(response.err)
        this.httpResponse.sendError(500,response.err,"can not save to database", res)
        
        this.httpResponse.sendResult(200, response.res, res);
    }
    @Put()
    async update(@Body() invoiceHeader:any, @QueryParam('id') @Res() res: Response, id:number) {
        let response:ServiceResponse = <ServiceResponse> await this.invoiceHeaderService.update(invoiceHeader, id);

        if(response.err)
            this.httpResponse.sendError(response.httpCode??500,response.err,"can not save to database", res)
        
        this.httpResponse.sendResult(200, response.res, res);
    }
    @Get("/id/:id")
    findById(@Param('id') id: number){
        
        return(this.invoiceHeaderService.findById(id))
    }
    
    @Get("/list-all") //filter using name and description
    listAll(){
        return(this.invoiceHeaderService.listAll());
    }

    @Delete("/:id")
    delete(@Body() invoiceHeader:any, @Param('id') id: number){
        return(this.invoiceHeaderService.deleteElement(id));
    }  
}
