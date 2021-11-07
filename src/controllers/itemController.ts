import { Res, Get, JsonController, Put,Post, Delete, Param, Body, QueryParam} from "routing-controllers";
import { where } from "sequelize/types";
import { Inject, Service } from "typedi";
import { ItemService } from "../services/itemService";
import { ServiceResponse } from "../dto/response";
import { Response } from 'express';
import { HttpResponse } from "../services/httpResponse"; 

@Service()
@JsonController("/items")
export class ItemController{

    @Inject() private itemService: ItemService;
    @Inject() private httpResponse: HttpResponse;

    @Post()
    async create(@Body() item: any, @Res() res: Response) {
        
        let response:ServiceResponse = <ServiceResponse>await this.itemService.create(item);
        
        if(response.err)
            this.httpResponse.sendError(500,response.err,"Can not save to database", res)
        
        this.httpResponse.sendResult(200, response.res, res);
    }

    @Put()
    update(@Body() item:any, @QueryParam('id') id:number) {
       return(this.itemService.update(item, id));
    }

    @Get("/id/:id")
    findById(@Param('id') id: number){
        
        return(this.itemService.findById(id))
    }
    
    @Get("/list-all") //filter using name and description
    listAll(){
        return(this.itemService.listAll());
    }

    @Delete("/:id")
    delete(@Body() item:any, @Param('id') id: number){
        return(this.itemService.deleteElement(id));
    }  
}