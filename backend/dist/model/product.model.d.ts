import { Model } from 'sequelize-typescript';
export declare class Product extends Model {
    username: string;
    storeName: string;
    userId: string;
    name: string;
    subDescription: string;
    content: string;
    images: string[];
    type: string;
    category: string;
    tags: string[];
    parentSku: string;
    brand: string;
    attributes: [string];
    variables: {};
    SKU: string;
    track: boolean;
    quantity: number;
    regularPrice: number;
    salePrice: number;
    productGroup: string;
    reviews: {
        rating: number;
        review: string;
        name: string;
        email: string;
    }[];
}
