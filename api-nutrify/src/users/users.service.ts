import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './user/user';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {

    constructor(
        @InjectModel(User.name) private userModel: Model<User>){}

    async createUser(user: User): Promise<User> {
        const createdUser = new this.userModel(user);

        return createdUser.save();
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
