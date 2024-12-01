import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { Document } from 'mongoose';

@Schema()
export class User extends Document{
    
    @Prop()
    @ApiProperty()
    name: string

    @Prop()
    @ApiProperty()
    email: string

    @Prop()
    @ApiProperty()
    password: string

    @Prop()
    @ApiProperty()
    age: number

}

export const UserSchema = SchemaFactory.createForClass(User);
