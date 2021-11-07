import { Service } from "typedi";
import { Item, ItemCreationAttributes} from "../models/Item";

@Service()
export class ItemService{

        async create(item:ItemCreationAttributes) {
           await Item.create(item).then((res) => {
                console.log(res);
                return("Success");
            })
            .catch(err => {
                console.log(err);
                return(err);
            });

        }

        async listAll(){
            return await Item.findAll({raw: true});
        }

        async findById(id: number){
            return await Item.findByPk(id, {raw: true});

        }

        async update(item:Item , id:number){
            let _item = this.findById(id);
            if(!_item){
                return("no item");  
            }
            let result = await Item.update(item,{where: {id:id}})
            return (result);
        }
        async deleteElement( id:number){
            
            return await Item.destroy({where:{id:id}});
           
        }
}