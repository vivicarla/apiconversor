import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConversorService } from './conversor/conversor.service';
import { ComprimentoController } from './comprimento/comprimento.controller';
import { MassaController } from './massa/massa.controller';
import { AreaController } from './area/area.controller';

@Module({
  imports: [],
  controllers: [AppController, ComprimentoController, MassaController, AreaController],
  providers: [AppService, ConversorService],
})
export class AppModule {}
