import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { Customers } from 'src/model/customers.model';
export declare class CustomersService {
    create(createCustomerDto: CreateCustomerDto): Promise<{
        message: string;
        customer: Customers;
    }>;
    findAll(): Promise<Customers[]>;
    findOne(id: number): Promise<Customers>;
    update(id: number, updateCustomerDto: UpdateCustomerDto): Promise<{
        message: string;
    }>;
    remove(id: number): Promise<void>;
}
