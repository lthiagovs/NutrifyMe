import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ConsultationModule } from './consultation/consultation.module';

@Module({
  imports: [UsersModule, ConsultationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
