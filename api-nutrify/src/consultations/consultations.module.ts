import { Module } from '@nestjs/common';
import { ConsultationsController } from './consultations.controller';
import { ConsultationsService } from './consultations.service';
import { ConstultationSchema, Consultation } from './consultation/consultation';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  controllers: [ConsultationsController],
  providers: [ConsultationsService],
  imports: [
    MongooseModule.forFeature(
      [
        {
          name: Consultation.name,
          schema: ConstultationSchema
        }
      ]
    )
  ]
})
export class ConsultationsModule {}
