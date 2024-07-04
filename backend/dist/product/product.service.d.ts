import { Product } from 'src/model/product.model';
export declare class ProductService {
    createProduct(username: string, storeName: string, userId: string, name: string, subDescription: string, content: string, images: [string], type: string, category: string, tags: [string], parentSku: string, brand: string, attributes: [string], variables: [], SKU: string, track: boolean, quantity: number, regularPrice: number, salePrice: number): Promise<{
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
