import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('users')
export class UsersController {

    @Get()
    async getAllUsers(@Param('id') id: string): Promise<any>{
        return 1
    }

    @Post()
    async createUser(@Body() user: any): Promise<any>{

    }

    @Put(':id')
    async updateUser(@Param('id') id: string, @Body() user: any): Promise<any>{
        
    }

    @Delete(':id')
    async deleteUser(@Param('id') id: string): Promise<any>{
        
    }

}
