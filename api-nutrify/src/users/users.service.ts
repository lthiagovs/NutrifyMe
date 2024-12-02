import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './user/user';
import { Model } from 'mongoose';
import { UserLogin } from './user/userLogin';

@Injectable()
export class UsersService {

    constructor(
        @InjectModel(User.name) private userModel: Model<User>){}

    async createUser(user: User): Promise<User> {
        const createdUser = new this.userModel(user);

        return createdUser.save();
    }

    async getLogin(login: UserLogin): Promise<string>{

        const user = await this.userModel.findOne({ email: login.email });

        if (!user) {
            return null;
        }

        if (login.password !== user.password) {
            return null;
        }

        return user._id.toString();
    }

    async listAllUsers(): Promise<User[]>{
        return this.userModel.find().exec();
    }

    async updateUser(id: string, user: User): Promise<User>{
        return this.userModel.findByIdAndUpdate(id, user).exec();
    }

    async removeUser(id: string){
        const removedUser = this.userModel.findOneAndDelete({ _id: id }).exec();
        
        return removedUser;
    }

}
