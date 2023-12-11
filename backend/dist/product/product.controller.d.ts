import { ProductService } from './product.service';
import { Request } from 'express';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    createProduct(req: Request): Promise<{
        product: import("../model/product.model").Product;
        message: string;
    }>;
    getAllProduct(req: Request): Promise<any>;
    getById(req: Request): Promise<import("../model/product.model").Product>;
    updateProduct(req: Request): Promise<void>;
    deleteProducts(req: Request): Promise<{
        message: string;
    }>;
    deleteProduct(req: Request): Promise<{
        message: string;
    }>;
    productReview(req: Request): Promise<{
        message: string;
    }>;
}
