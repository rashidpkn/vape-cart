import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    servePublicFile(file: string, res: any): any;
}
