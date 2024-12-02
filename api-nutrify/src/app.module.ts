import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConsultationsModule } from './consultations/consultations.module';
import { GuardService } from './guard/guard.service';
import { AuthService } from './auth/auth.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [UsersModule, MongooseModule.forRoot('mongodb://localhost:27017/'), ConsultationsModule],
  controllers: [AppController],
  providers: [AppService, GuardService, AuthService, JwtService],
})
export class AppModule {}
