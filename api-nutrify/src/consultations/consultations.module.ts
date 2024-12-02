import { Module } from '@nestjs/common';
import { ConsultationsController } from './consultations.controller';
import { ConsultationsService } from './consultations.service';
import { ConstultationSchema, Consultation } from './consultation/consultation';
import { MongooseModule } from '@nestjs/mongoose';
import { GuardService } from 'src/guard/guard.service';
import { AuthService } from 'src/auth/auth.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  controllers: [ConsultationsController],
  providers: [ConsultationsService, GuardService, AuthService, JwtService],
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
