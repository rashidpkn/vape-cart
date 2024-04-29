import { Product } from 'src/model/product.model';
export declare class ProductService {
    createProduct(name: string, username: string, storeName: string, userId: string, subDescription: string, content: string, images: [string], SKU: string, quantity: number, category: string, colors: [string], tags: [string], regularPrice: number, salePrice: number, tax: number, publish: boolean, type: string, attributes: {}[]): Promise<{
        product: Product;
        message: string;
    }>;
    getAllProduct(query: any): Promise<any>;
    getById(id: number, count: number): Promise<Product>;
    updateProduct(update: {
        id: number;
    }): Promise<void>;
    deleteProducts(ids: number[]): Promise<{
        message: string;
    }>;
    deleteProduct(id: number): Promise<{
        message: string;
    }>;
    productReview(id: number, rating: number, review: string, name: string, email: string): Promise<{
        message: string;
    }>;
}
