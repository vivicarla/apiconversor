import { Controller, Get, Param, ParseFloatPipe } from '@nestjs/common';
import { ConversorService } from 'src/conversor/conversor.service';

@Controller('velocidade')
export class VelocidadeController {
    constructor(private readonly service: ConversorService) { }
        @Get('kmh-para-ms/:valor')
        getMs(@Param('valor', ParseFloatPipe) v: number) {
            return {
                resultado: this.service.kmhParaMs(v),
                unidade: 'm/s'
            };
        }
        @Get('kmh-para-mph/:valor')
        getMph(@Param('valor', ParseFloatPipe) v: number) {
            return {
                resultado: this.service.kmhParaMph(v),
                unidade: 'mph'
            };
        }
        @Get('nos-para-kmh/:valor')
        getKmh(@Param('valor', ParseFloatPipe) v: number) {
            return {
                resultado: this.service.nosParaKmh(v),
                unidade: 'km/h'
            };
        }
}
