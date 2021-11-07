import { Controller, createExpressServer, useContainer } from "routing-controllers";
import { Container } from 'typedi';
import "reflect-metadata"
import { ItemController } from "./controllers/itemController";

import { InvoiceHeaderController} from "./controllers/invoiceHeaderController";
import {  InvoiceDetailController} from "./controllers/invoiceDetailController";
import { CustomerController } from "./controllers/customerController";
import dbInit from "./db/init";


require("dotenv").config();

useContainer(Container);

const app = createExpressServer ({
    controllers: [ItemController, InvoiceHeaderController, InvoiceDetailController, CustomerController]
   
});


const port = process.env.PORT || 3000
app.listen(port, async () => {
    console.log("Sever started on port %d", 3000);
    dbInit();
});