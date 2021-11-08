import { Service } from "typedi";
import { InvoiceDetail, InvoiceCreationDetailAttributes,} from "../models/invoiceDetail";

@Service()
export class InvoiceDetailService{

    async create(invoiceDetail:InvoiceCreationDetailAttributes) : Promise<{}> {

       try{ 
            return await InvoiceDetail.create(invoiceDetail).then((res) => {
            console.log(res.get());
            return({"res": res.get(), "err": null});
            })
            .catch(err => {
                return({"res": null, "err":err});
            });
       } catch(err){
           return({"res":null, "err": err})
       }

    }

    async listAll(){
        return await InvoiceDetail.findAll({raw: true});
    }

    async findById(id: number){
        return await InvoiceDetail.findByPk(id, {raw: true});

    }

    async update(invoiceDetail:InvoiceDetail , id:number) : Promise<{}>{
        try{
        let _invoiceDetail =await this.findById(id);
        if(!_invoiceDetail){
            return({"res":null, "err": "no customer found" , "httpCode":404}); 
        }
        return await InvoiceDetail.update(invoiceDetail,{where: {id:id}}).then((res) => {
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
        
        return await InvoiceDetail.destroy({where:{id:id}});
       
    }
}