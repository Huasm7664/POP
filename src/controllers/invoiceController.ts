import { Get, JsonController, Put,Post, Delete, Param, Body, QueryParam} from "routing-controllers";
import { where } from "sequelize/types";
import { Inject, Service } from "typedi";
import { InvoiceHeaderService, InvoiceDetailService, CustomerService } from "../services/invoiceService";

@Service()
@JsonController("/invoice-header")
export class InvoiceHeaderController{

    @Inject() private invoiceHeaderService: InvoiceHeaderService;

    @Post()
    async create(@Body() invoiceHeader: any) {
        let result = await this.invoiceHeaderService.create(invoiceHeader);
        return ({"status":"success"});
    }
    @Put()
    update(@Body() invoiceHeader:any, @QueryParam('id') id:number) {
       return(this.invoiceHeaderService.update(invoiceHeader, id));
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

@Service()
@JsonController("/invoice-deatail")
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

@Service()
@JsonController("/customer")
export class CustomerController{

    @Inject() private customerService: CustomerService;

    @Post()
    async create(@Body() customer: any) {
        let result = await this.customerService.create(customer);
        return (result);
    }
    @Put()
    update(@Body() customer:any, @QueryParam('id') id:number) {
       return(this.customerService.update(customer, id));
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