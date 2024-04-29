import { Model } from 'sequelize-typescript';
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
    salePrice: number;
    tax: number;
    publish: boolean;
    reviews: {
        rating: number;
        review: string;
        name: string;
        email: string;
    }[];
    type: string;
    attributes: {
        Brand: string[];
        Flavor: string[];
        Puffs: string[];
        "Nicotine Strength": string[];
        "Bottles Size": string[];
        Color: string[];
        Batteries: string[];
        Type: string[];
    };
}
