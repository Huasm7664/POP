import { Service } from "typedi";
import { Customer, CustomerCreationAttributes} from "../models/cutomer";

@Service()
export class CustomerService{

    async create(customer:CustomerCreationAttributes) : Promise<{}> {

        try{
            return await Customer.create(customer).then((res) => {
            console.log(res.get());
            return({"res": res.get(), "err": null});
            })
            .catch(err => {
            return({"res": null, "err":err});
            });
        } catch(err){
            return ({"res":null, "err": err});
            }

    }

    async listAll(){
        return await Customer.findAll({raw: true});
    }

    async findById(id: number){
        return await Customer.findByPk(id, {raw: true});

    }

    async update(customer:Customer , id:number): Promise<{}>{
        
        try{
        let _customer = await this.findById(id);
        if(!_customer){
            return({"res":null, "err": "no customer found" , "httpCode":404});  
        }
        return await Customer.update(customer,{where: {id:id}}).then((res) => {
            console.log(res.push());
            return({"res": res.push(), "err": null});  
            })
            .catch(err => {
            return({"res":null , "err":err})
            });
        }catch(err){
            return ({"res":null, "err": err});
            }

    }
    async deleteElement( id:number){
        
        return await Customer.destroy({where:{id:id}});
       
    }
}