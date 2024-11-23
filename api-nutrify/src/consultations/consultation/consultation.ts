import { Prop, Schema } from "@nestjs/mongoose";

@Schema()
export class Consultation extends Document{

    @Prop()
    name : string

    @Prop()
    email : string

    @Prop()
    number : string

    @Prop()
    bodyType : string

    @Prop()
    start : Date

    @Prop()
    end : Date

}
