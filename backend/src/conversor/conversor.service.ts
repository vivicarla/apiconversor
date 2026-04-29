import { Injectable } from '@nestjs/common';

@Injectable()
export class ConversorService {
    //Comprimento
    metrosParakm(valor: number) {
        return valor / 1000;
    };
    metrosParaMilhas(valor: number) {
        return valor / 1609;
    };
    metrosParaPes(valor: number) {
        return valor * 3.281;
    };
    //massa
    quilosParaGramas(valor: number) {
        return valor * 1000
    };
    quilosParaLibras(valor: number) {
        return valor * 2.205

    };
    quilosParaOncas(valor: number) {
        return (valor * 35.274).toFixed(2);
    };
    //Área
    metrosParaQuilometros(valor: number) {
        const resultado = valor / 1000000;
        return Number(resultado);
    };
    metrosParaAcres(valor: number) {
        const acre = 4046.86;
        //o acre é aproximadamente 4046.86 metros quadrados  
        return (valor / acre).toFixed(6);
    };
    metrosParaPesQuadrados(valor: number) {
        // 1 m² = 10.76391 ft²
        const pes = 10.76391;
        return (valor * pes).toFixed(9);
    };
    //temperatura
    celsiusParaFarenheit(valor: number) {
        return valor * (9/5) + 32
    };
    //temperatura
    celsiusParaKelvin(valor: number) {
        return valor + 273.15
    };
    //temperatura
    farenheitParaCelsius(valor: number) {
        return ((valor - 32 ) * (5/9)).toFixed(4);
    };
    //velocidade
    kmhParaMs(valor: number) {
        return (valor / 3.6 ).toFixed(2);
    };
    kmhParaMph(valor: number) {
        return (valor * 0.6214 ).toFixed(2);
    };
    nosParaKmh(valor: number) {
        return (valor * 1.852 ).toFixed(2);
    }
}
