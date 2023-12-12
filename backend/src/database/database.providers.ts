import { Sequelize } from 'sequelize-typescript';
import { Orders } from 'src/model/orders.model';
import { Product } from 'src/model/product.model';


export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: '12345',
        database: 'vapecart',
        define:{
          timestamps:true,
        },
        logging:false
      });
      sequelize.addModels([Product,Orders]);
      try {
        await sequelize.authenticate();
        console.log('Database connection has been established successfully.');
      } catch (error) {
        console.log('Unable to connect to the database: ', error.message);
        throw new Error('Error on database');
      }
      await sequelize.sync({alter:true});
      return sequelize;
    },
  },
];