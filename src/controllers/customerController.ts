import { Get, JsonController, Put,Post, Delete, Param, Body, QueryParam} from "routing-controllers";
import { Inject, Service } from "typedi";
import {  CustomerService } from "../services/customerService";


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