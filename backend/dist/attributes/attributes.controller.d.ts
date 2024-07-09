import { AttributesService } from './attributes.service';
import { Attributes } from 'src/model/attributes.model';
export declare class AttributesController {
    private readonly attributesService;
    constructor(attributesService: AttributesService);
    add({ username, attribute, value }: {
        username: any;
        attribute: any;
        value: any;
    }): Promise<{
        message: string;
    }>;
    get(): Promise<Attributes[]>;
}
