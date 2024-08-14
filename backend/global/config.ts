const DOMAIN =  "https://vape-amazon.com"
// const DOMAIN =  "http://localhost:3000"

const DATABASE:{} = {
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
}




export {DOMAIN,DATABASE}