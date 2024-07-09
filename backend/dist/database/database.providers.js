"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const attributes_model_1 = require("../model/attributes.model");
const customers_model_1 = require("../model/customers.model");
const invoice_model_1 = require("../model/invoice.model");
const orders_model_1 = require("../model/orders.model");
const payout_model_1 = require("../model/payout.model");
const product_model_1 = require("../model/product.model");
const storeAnalytics_model_1 = require("../model/storeAnalytics.model");
exports.databaseProviders = [
    {
        provide: 'SEQUELIZE',
        useFactory: async () => {
            const sequelize = new sequelize_typescript_1.Sequelize({
                dialect: 'postgres',
                host: 'localhost',
                port: 5432,
                username: 'postgres',
                password: '12345',
                database: 'vapecart',
                define: {
                    timestamps: true,
                },
                logging: false,
            });
            sequelize.addModels([
                product_model_1.Product,
                orders_model_1.Orders,
                invoice_model_1.Invoice,
                storeAnalytics_model_1.StoreAnalytics,
                payout_model_1.Payout,
                customers_model_1.Customers,
                attributes_model_1.Attributes
            ]);
            try {
                await sequelize.authenticate();
                console.log('Database connection has been established successfully.');
            }
            catch (error) {
                console.log('Unable to connect to the database: ', error.message);
                throw new Error('Error on database');
            }
            await sequelize.sync({ alter: true });
            return sequelize;
        },
    },
];
//# sourceMappingURL=database.providers.js.map