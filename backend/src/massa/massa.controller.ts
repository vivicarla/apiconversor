import { Controller, Get, Param, ParseFloatPipe } from '@nestjs/common';
import { ConversorService } from 'src/conversor/conversor.service';

@Controller('massa')//Decorator de responsabilidade
export class MassaController {
    constructor(private readonly service: ConversorService) { }
    @Get('quilos-para-gramas/:valor')
    getG(@Param('valor', ParseFloatPipe) v: number) {
        return {
            resultado: this.service.quilosParaGramas(v),
            unidade: 'g'
        };
    }
    @Get('quilos-para-libras/:valor')
    getLb(@Param('valor', ParseFloatPipe) v: number) {
        return {
            resultado: this.service.quilosParaLibras(v),
            unidade: 'lb'
        };
    }
    @Get('quilos-para-oncas/:valor')
    getOz(@Param('valor', ParseFloatPipe) v: number) {
        return {
            resultado: this.service.quilosParaOncas(v),
            unidade: 'oz'
        };
    }
}
