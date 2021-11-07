import { Service } from "typedi";
import { InvoiceHeader, InvoiceCreationHeaderAttributes } from "../models/invoiceHeader";

@Service()
export class InvoiceHeaderService{

        async create(invoiceHeader:InvoiceCreationHeaderAttributes) {
           await InvoiceHeader.create(invoiceHeader).then((res) => {
                console.log(res);
                return("Success");
            })
            .catch(err => {
                console.log(err);
                return(err);
            });

        }

        async listAll(){
            return await InvoiceHeader.findAll({raw: true});
        }

        async findById(id: number){
            return await InvoiceHeader.findByPk(id, {raw: true});

        }

        async update(invoiceHeader:InvoiceHeader , id:number){
            let _invoiceHeader = this.findById(id);
            if(!_invoiceHeader){
                return("no invoiceHeader");  
            }
            let result = await InvoiceHeader.update(invoiceHeader,{where: {id:id}})
            return (result);
        }
        async deleteElement( id:number){
            
            return await InvoiceHeader.destroy({where:{id:id}});
           
        }
}