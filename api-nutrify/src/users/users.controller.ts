import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { User } from './user/user';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(private readonly userService: UsersService){}


    @Get()
    async getAllUsers(): Promise<User[]>{
        return this.userService.listAllUsers();
    }

    @Post()
    async createUser(@Body() user: User): Promise<User>{
        return this.userService.createUser(user);
    }

    @Put(':id')
    async updateUser(@Param('id') id: string, @Body() user: User): Promise<User>{
        return this.userService.updateUser(id,user);
    }

    @Delete(':id')
    async deleteUser(@Param('id') id: string): Promise<User>{
        return this.userService.removeUser(id);
    }

}
