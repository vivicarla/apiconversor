import { Controller, Get, Param, ParseFloatPipe } from '@nestjs/common';
import { ConversorService } from 'src/conversor/conversor.service';

@Controller('area')
export class AreaController {
    constructor(private readonly service: ConversorService) { }
    @Get('metrosqua-para-kmqua/:valor')
        getKm(@Param('valor', ParseFloatPipe) v: number) {
            return {
                resultado: this.service.metrosParaQuilometros(v),
                unidade: 'km²'
            };
        }
    @Get('metrosqua-para-acresqua/:valor')
        getAcre(@Param('valor', ParseFloatPipe) v: number) {
            return {
                resultado: this.service.metrosParaAcres(v),
                unidade: 'acres'
            };
        }
    @Get('metrosqua-para-pesqua/:valor')
        getPesQua(@Param('valor', ParseFloatPipe) v: number) {
            return {
                resultado: this.service.metrosParaPesQuadrados(v),
                unidade: 'ft²'
            };
        }
}
