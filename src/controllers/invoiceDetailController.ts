import { Get, JsonController, Put,Post, Delete, Param, Body, QueryParam} from "routing-controllers";
import { Inject, Service } from "typedi";
import {  InvoiceDetailService } from "../services/invoiceDetailService";

@Service()
@JsonController("/invoice-detail")
export class InvoiceDetailController{

    @Inject() private invoiceDetailService: InvoiceDetailService;

    @Post()
    async create(@Body() invoiceDetail: any) {
        let result = await this.invoiceDetailService.create(invoiceDetail);
        return (result);
    }
    @Put()
    update(@Body() invoiceDetail:any, @QueryParam('id') id:number) {
       return(this.invoiceDetailService.update(invoiceDetail, id));
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