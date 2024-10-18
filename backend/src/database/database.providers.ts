import { DATABASE } from 'global/config';
import { Sequelize } from 'sequelize-typescript';
import { Attributes } from 'src/model/attributes.model';
import { Customers } from 'src/model/customers.model';
import { Invoice } from 'src/model/invoice.model';
import { Notifications } from 'src/model/notifications.model';
import { Orders } from 'src/model/orders.model';
import { Payout } from 'src/model/payout.model';
import { Product } from 'src/model/product.model';
import { StoreAnalytics } from 'src/model/storeAnalytics.model';
import { Support } from 'src/model/support.model';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize(DATABASE);
      sequelize.addModels([
        Product,
        Orders,
        Invoice,
        StoreAnalytics,
        Payout,
        Customers,
        Attributes,
        Notifications,
        Support
      ]);
      try {
        await sequelize.authenticate();
        console.log('Database connection has been established successfully.');
      } catch (error) {
        console.log('Unable to connect to the database: ', error.message);
        throw new Error('Error on database');
      }
      await sequelize.sync({ alter: true });
      return sequelize;
    },
  },
];
