import { Injectable } from '@nestjs/common';

@Injectable()
export class ConversorService {
    //Comprimento
    metrosParakm(valor:number){
        return valor/1000;
    }
}
