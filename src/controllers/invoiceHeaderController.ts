import { Get, JsonController, Put,Post, Delete, Param, Body, QueryParam} from "routing-controllers";
import { Inject, Service } from "typedi";
import { InvoiceHeaderService} from "../services/invoiceHeaderService";

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
