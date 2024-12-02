import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConsultationsModule } from './consultations/consultations.module';
import { GuardService } from './guard/guard.service';
import { AuthService } from './auth/auth.service';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot( {isGlobal: true, envFilePath: '.env'} ),  // Carrega o arquivo .env
    UsersModule,
    MongooseModule.forRoot('mongodb://localhost:27017/'),
    ConsultationsModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'nutrifyme', // Certifique-se de definir essa chave
      signOptions: { expiresIn: '60s' }, // Opcional: ajuste o tempo de expiração
    }),
  ],
  controllers: [AppController],
  providers: [AppService, GuardService, AuthService, JwtService],
  
})
export class AppModule {}