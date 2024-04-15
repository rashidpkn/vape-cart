import { ProductService } from './product.service';
import { Request } from 'express';
import { Product } from 'src/model/product.model';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    createProduct(req: Request): Promise<{
        product: Product;
        message: string;
    }>;
    getAllProduct(req: Request): Promise<any>;
    exportProduct(req: Request): Promise<Product[]>;
    importProduct(req: Request): Promise<string>;
    getById(req: Request): Promise<Product>;
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
