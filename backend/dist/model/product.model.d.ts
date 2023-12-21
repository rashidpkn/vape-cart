import { Model } from "sequelize-typescript";
export declare class Product extends Model {
    name: string;
    username: string;
    storeName: string;
    userId: string;
    subDescription: string;
    content: string;
    images: string[];
    SKU: string;
    quantity: number;
    category: string;
    colors: string[];
    tags: string[];
    regularPrice: number;
    salePrice: Number;
    tax: Number;
    publish: Boolean;
    reviews: {
        rating: number;
        review: string;
        name: string;
        email: string;
    }[];
}
