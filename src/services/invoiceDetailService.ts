import { Service } from "typedi";
import { InvoiceDetail, InvoiceCreationDetailAttributes,} from "../models/invoiceDetail";

@Service()
export class InvoiceDetailService{

    async create(invoiceDetail:InvoiceCreationDetailAttributes) {
       await InvoiceDetail.create(invoiceDetail).then((res) => {
            console.log(res);
            return("Success");
        })
        .catch(err => {
            console.log(err);
            return(err);
        });

    }

    async listAll(){
        return await InvoiceDetail.findAll({raw: true});
    }

    async findById(id: number){
        return await InvoiceDetail.findByPk(id, {raw: true});

    }

    async update(item:InvoiceDetail , id:number){
        let _item = this.findById(id);
        if(!_item){
            return("no item");  
        }
        let result = await InvoiceDetail.update(item,{where: {id:id}})
        return (result);
    }
    async deleteElement( id:number){
        
        return await InvoiceDetail.destroy({where:{id:id}});
       
    }
}