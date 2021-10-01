import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Maps, MapsSchema } from 'src/schema/maps.schema';
import { WayfindingService } from './wayfinding.service';

@Module({
  imports: [MongooseModule.forFeature([{
    name: Maps.name,
    schema: MapsSchema
  }])],
  providers: [WayfindingService],
  exports: [WayfindingService],
})
export class WayfindingModule {}
