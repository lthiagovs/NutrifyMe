import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './user/user';
import { AuthService } from 'src/auth/auth.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  
  controllers: [UsersController],
  providers: [UsersService, AuthService, JwtService],
  imports: [
    MongooseModule.forFeature(
      [
        {
          name: User.name,
          schema: UserSchema
        }
      ]
    )
  ]
})
export class UsersModule {}
