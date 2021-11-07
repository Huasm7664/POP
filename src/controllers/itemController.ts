import { Get, JsonController, Put,Post, Delete, Param, Body, QueryParam} from "routing-controllers";
import { where } from "sequelize/types";
import { Inject, Service } from "typedi";
import { ItemService } from "../services/itemService";

@Service()
@JsonController("/items")
export class ItemController{

    @Inject() private itemService: ItemService;

    @Post()
    async create(@Body() item: any) {
        let result = await this.itemService.create(item);
        console.log("res: ", result);
        return (result);
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