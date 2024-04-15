import { InvoiceService } from './invoice.service';
import { Request } from 'express';
export declare class InvoiceController {
    private readonly invoiceService;
    constructor(invoiceService: InvoiceService);
    getAllInvoice(req: Request): Promise<import("../model/invoice.model").Invoice[]>;
    getSingleInvoice(req: Request): Promise<import("../model/invoice.model").Invoice>;
    updateInvoice(req: Request): Promise<void>;
    deleteInvoice(req: Request): Promise<{
        message: string;
    }>;
}
