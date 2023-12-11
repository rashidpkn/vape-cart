import {  Controller, Post, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { UploadService } from './upload.service';
import {  FilesInterceptor } from '@nestjs/platform-express';

@Controller('upload')
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}
  @Post('')
  @UseInterceptors(FilesInterceptor('images',10))
  async uploadFiles(@UploadedFiles() files: any) {
    try {
      const result = await this.uploadService.processImage(files);
      return result;
    } catch (error) {
      throw error
    }
  }

}
