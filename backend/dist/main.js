"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const express_1 = require("express");
const path_1 = require("path");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors({
        origin: (origin, callback) => {
            if (!origin || [
                'http://monkey.vape-amazon.com',
                'https://monkey.vape-amazon.com',
                'http://vape-amazon.com',
                'https://vape-amazon.com'
            ].includes(origin) || /^http:\/\/localhost(:[0-9]+)?$/.test(origin)) {
                callback(null, true);
            }
            else {
                callback(new Error('Not allowed by CORS'));
            }
        },
    });
    app.use((0, express_1.json)({ limit: '50mb' }));
    app.use((0, express_1.urlencoded)({ extended: true, limit: '50mb' }));
    app.use('/assets', (req, res, next) => {
        res.setHeader('Cache-Control', 'public, max-age=31536000');
        next();
    }, (0, express_1.static)((0, path_1.join)(__dirname, '..', '..', 'frontend', 'dist', 'assets')));
    app.use((0, express_1.static)((0, path_1.join)(__dirname, '..', '..', 'frontend', 'dist')));
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map