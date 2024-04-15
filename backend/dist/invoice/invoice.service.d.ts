import { Invoice } from 'src/model/invoice.model';
export declare class InvoiceService {
    getAllInvoice(): Promise<Invoice[]>;
    getSingleInvoice(id: number): Promise<Invoice>;
    updateInvoice(): Promise<void>;
    deleteInvoice(id: number): Promise<{
        message: string;
    }>;
}
