import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { MapsService } from './maps.service';

@Module({
  imports: [
    ClientsModule.register([{
      name: 'wayfinding-service',
      transport: Transport.TCP
  }])],
  providers: [MapsService],
  exports: [MapsService],
})
export class MapsModule {}
