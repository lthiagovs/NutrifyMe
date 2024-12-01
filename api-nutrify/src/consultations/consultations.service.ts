import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Consultation } from './consultation/consultation';
import { Model } from 'mongoose';

@Injectable()
export class ConsultationsService {

    constructor(
        @InjectModel(Consultation.name) private consultationModel: Model<Consultation>){}
    
    async createConsultation(consultation: Consultation): Promise<Consultation>{
        const createdConsultation = new this.consultationModel(consultation);

        return createdConsultation.save();
    }

    async listAllConsultations(): Promise<Consultation[]>{
        return this.consultationModel.find().exec();
    }

}
