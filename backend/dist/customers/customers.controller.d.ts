import { CustomersService } from './customers.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
export declare class CustomersController {
    private readonly customersService;
    constructor(customersService: CustomersService);
    create(createCustomerDto: CreateCustomerDto): Promise<{
        message: string;
        customer: import("../model/customers.model").Customers;
    }>;
    findAll(): Promise<import("../model/customers.model").Customers[]>;
    update(id: string, updateCustomerDto: UpdateCustomerDto): Promise<{
        message: string;
    }>;
    remove(id: string): Promise<void>;
}
