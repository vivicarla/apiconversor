import { Controller, Get, Param, ParseFloatPipe } from '@nestjs/common';
import { ConversorService } from 'src/conversor/conversor.service';

@Controller('temperatura')
export class TemperaturaController {
    constructor(private readonly service: ConversorService) { }
    @Get('celsius-para-farenheit/:valor')
    getC(@Param('valor', ParseFloatPipe) v: number) {
        return {
            resultado: this.service.celsiusParaFarenheit(v),
            unidade: 'F°'
        };
    }
    @Get('celsius-para-kelvin/:valor')
    getK(@Param('valor', ParseFloatPipe) v: number) {
        return {
            resultado: this.service.celsiusParaKelvin(v),
            unidade: 'K°'
        };
    }
    @Get('farenheit-para-celsius/:valor')
    getF(@Param('valor', ParseFloatPipe) v: number) {
        return {
            resultado: this.service.farenheitParaCelsius(v),
            unidade: 'C°'
        };
    }
}
