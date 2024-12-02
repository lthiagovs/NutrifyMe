import { Body, Controller, Delete, Get, Param, Post, Put, UnauthorizedException, UseGuards, Headers } from '@nestjs/common';
import { User } from './user/user';
import { UsersService } from './users.service';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { AuthService } from 'src/auth/auth.service';
import { UserLogin } from './user/userLogin';
import { GuardService } from 'src/guard/guard.service';

@ApiTags('Users')
@Controller('users')
export class UsersController {

    constructor(private readonly userService: UsersService,
                private readonly authService: AuthService
    ){}

    @UseGuards(GuardService)
    @ApiCreatedResponse({type: User, isArray: true, description: "Get All Users from DB"})
    @Get()
    async getAllUsers(): Promise<User[]>{
        return this.userService.listAllUsers();
    }

    @ApiCreatedResponse()
    @Post("check-token")
    async checkToken(@Headers("Authorization") token: string) {
        const isValid = await this.authService.checkToken(token);

        return { valid: isValid };
    }

    @ApiCreatedResponse()
    @Post()
    async getLogin(@Body() login: UserLogin){
        const id = await this.userService.getLogin(login);

        if(id ==  null)
            throw new UnauthorizedException;

        const token = await this.authService.createToken(id);

        return { auth: true, token: token };

    }

    @ApiCreatedResponse({type: User, description: "Create a user"})
    @Post()
    async createUser(@Body() user: User): Promise<User>{
        return this.userService.createUser(user);
    }

    @UseGuards(GuardService)
    @ApiCreatedResponse({type: User, description: "Update a user"})
    @Put(':id')
    async updateUser(@Param('id') id: string, @Body() user: User): Promise<User>{
        return this.userService.updateUser(id,user);
    }

    @UseGuards(GuardService)
    @ApiCreatedResponse({type: User, description: "Delete a user"})
    @Delete(':id')
    async deleteUser(@Param('id') id: string): Promise<User>{
        return this.userService.removeUser(id);
    }

}
