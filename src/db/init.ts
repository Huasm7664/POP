import { Item } from '../models/Item'
import {  InvoiceHeader } from '../models/invoiceHeader'
import {  InvoiceDetail } from '../models/invoiceDetail'
import {  Customer } from '../models/cutomer'

const isDev = process.env.NODE_ENV === 'development'

const dbInit = () => {
    Item.sync({alter: isDev})
    InvoiceHeader.sync({alter:isDev})
    InvoiceDetail.sync({alter:isDev})
    Customer.sync({alter:isDev})
}
export default dbInit