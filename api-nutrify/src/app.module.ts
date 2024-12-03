import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule, MongooseModuleOptions } from '@nestjs/mongoose';
import { ConsultationsModule } from './consultations/consultations.module';
import { GuardService } from './guard/guard.service';
import { AuthService } from './auth/auth.service';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import Configuration from './config/Configuration';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, envFilePath: '.env' }), // Globalmente disponível
    UsersModule,
    MongooseModule.forRootAsync({
      imports: [ConfigModule], // Importa o ConfigModule para uso local
      inject: [ConfigService], // Garante que o ConfigService seja injetado
      useFactory: (configService: ConfigService): MongooseModuleOptions => {
        return {
          uri: configService.get<string>('DATABASE_URL'), // Certifique-se de que 'database.url' está definido no .env
        };
      },
    }),
    ConsultationsModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'nutrifyme', // Define a chave secreta para JWT
      signOptions: { expiresIn: '60s' }, // Ajusta o tempo de expiração
    }),
  ],
  controllers: [AppController],
  providers: [AppService, GuardService, AuthService, JwtService],
})
export class AppModule {}