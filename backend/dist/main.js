"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const express_1 = require("express");
const path_1 = require("path");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, { cors: { origin: '*' } });
    app.use((req, res, next) => {
        res.setHeader('Cache-Control', 'public, max-age=864000');
        next();
    }, (0, express_1.static)((0, path_1.join)(__dirname, '..', '..', 'frontend', 'dist')));
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map