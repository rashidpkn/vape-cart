import { Injectable } from '@nestjs/common';
import { promises as fsPromises } from 'fs';
import { DOMAIN } from 'global/config';
import { join } from 'path';
import * as sharp from 'sharp';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UploadService {
  async processImage(files: any) {
    const result = [];
    try {
      for (const file of files) {
        const imageBuffer = await fsPromises.readFile(file.path);
        const webpBuffer = await sharp(imageBuffer).webp().toBuffer();
        const fileName = `${uuidv4()}.webp`;
        console.log(join(__dirname, `../../../uploads/`));
        await fsPromises.writeFile(
          join(__dirname, `../../../uploads/${fileName}`),
          
          webpBuffer,
        );
        await fsPromises.unlink(file.path);
        // result.push(`http://localhost:3000/uploads/${fileName}`);
        result.push(`${DOMAIN}/uploads/${fileName}`);
      }
      return result;
    } catch (error) {
      throw error;
    }
  }
}
