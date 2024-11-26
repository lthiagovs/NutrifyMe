import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { User } from './user/user';
import { UsersService } from './users.service';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Users')
@Controller('users')
export class UsersController {

    constructor(private readonly userService: UsersService){}

    @ApiCreatedResponse({type: User, isArray: true, description: "Get All Users from DB"})
    @Get()
    async getAllUsers(): Promise<User[]>{
        return this.userService.listAllUsers();
    }

    @ApiCreatedResponse({type: User, description: "Create a user"})
    @Post()
    async createUser(@Body() user: User): Promise<User>{
        return this.userService.createUser(user);
    }

    @ApiCreatedResponse({type: User, description: "Update a user"})
    @Put(':id')
    async updateUser(@Param('id') id: string, @Body() user: User): Promise<User>{
        return this.userService.updateUser(id,user);
    }

    @ApiCreatedResponse({type: User, description: "Delete a user"})
    @Delete(':id')
    async deleteUser(@Param('id') id: string): Promise<User>{
        return this.userService.removeUser(id);
    }

}
