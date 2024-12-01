import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { Document } from 'mongoose';

@Schema()
export class Consultation extends Document{

    @Prop()
    @ApiProperty()
    number : string

    @Prop()
    @ApiProperty()
    name : string

    @Prop()
    @ApiProperty()
    email : string

    @Prop()
    @ApiProperty()
    bodyType : string

    @Prop()
    @ApiProperty()
    start : string

    @Prop()
    @ApiProperty()
    end : string

}

export const ConstultationSchema = SchemaFactory.createForClass(Consultation);