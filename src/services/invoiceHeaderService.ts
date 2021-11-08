import { Service } from "typedi";
import { InvoiceHeader, InvoiceCreationHeaderAttributes } from "../models/invoiceHeader";

@Service()
export class InvoiceHeaderService{

        async create(invoiceHeader:InvoiceCreationHeaderAttributes) : Promise<{}> {
           try{ 
                return await InvoiceHeader.create(invoiceHeader).then((res) => {
                    console.log(res.get());
                    return({"res" : res.get(), "err": null});
                })
                .catch(err => {
                return({"res": null , "err":err});
                });
           }catch(err){
                return({"res": null, "err": err})
           }
        }
        
        async listAll(){
            return await InvoiceHeader.findAll({raw: true});
        }

        async findById(id: number){
            return await InvoiceHeader.findByPk(id, {raw: true});

        }

        async update(invoiceHeader:InvoiceHeader , id:number) : Promise<{}>{

            try{
            let _invoiceHeader = await this.findById(id);
            if(!_invoiceHeader){
                return({"res":null, "err": "no customer found" , "httpCode":404}); 
            }
            return await InvoiceHeader.update(invoiceHeader,{where: {id:id}}).then((res) => {
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
            
            return await InvoiceHeader.destroy({where:{id:id}});
           
        }
}