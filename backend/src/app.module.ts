import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConversorService } from './conversor/conversor.service';
import { ComprimentoController } from './comprimento/comprimento.controller';

@Module({
  imports: [],
  controllers: [AppController, ComprimentoController],
  providers: [AppService, ConversorService],
})
export class AppModule {}
