"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadService = void 0;
const common_1 = require("@nestjs/common");
const fs_1 = require("fs");
const path_1 = require("path");
const sharp = require("sharp");
const uuid_1 = require("uuid");
let UploadService = class UploadService {
    async processImage(files) {
        const result = [];
        try {
            for (const file of files) {
                const imageBuffer = await fs_1.promises.readFile(file.path);
                const webpBuffer = await sharp(imageBuffer).webp().toBuffer();
                const fileName = `${(0, uuid_1.v4)()}.webp`;
                await fs_1.promises.writeFile((0, path_1.join)(__dirname, `../../uploads/${fileName}`), webpBuffer);
                await fs_1.promises.unlink(file.path);
                result.push(`https://delhi-vape.com/uploads/${fileName}`);
            }
            return result;
        }
        catch (error) {
            throw error;
        }
    }
};
UploadService = __decorate([
    (0, common_1.Injectable)()
], UploadService);
exports.UploadService = UploadService;
//# sourceMappingURL=upload.service.js.map