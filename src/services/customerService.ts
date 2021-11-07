import { Service } from "typedi";
import { Customer, CustomerCreationAttributes} from "../models/cutomer";

@Service()
export class CustomerService{

    async create(customer:CustomerCreationAttributes) {
       await Customer.create(customer).then((res) => {
            console.log(res);
            return("Success");
        })
        .catch(err => {
            console.log(err);
            return(err);
        });

    }

    async listAll(){
        return await Customer.findAll({raw: true});
    }

    async findById(id: number){
        return await Customer.findByPk(id, {raw: true});

    }

    async update(item:Customer , id:number){
        let _item = this.findById(id);
        if(!_item){
            return("no item");  
        }
        let result = await Customer.update(item,{where: {id:id}})
        return (result);
    }
    async deleteElement( id:number){
        
        return await Customer.destroy({where:{id:id}});
       
    }
}