import { Service } from "typedi";
import { InvoiceHeader,InvoiceDetail,Customer, InvoiceCreationHeaderAttributes, InvoiceCreationDetailAttributes,CustomerCreationAttributes} from "../models/Invoice";

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