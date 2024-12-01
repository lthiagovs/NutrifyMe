import { Body, Controller, Get, Post } from '@nestjs/common';
import { ConsultationsService } from './consultations.service';
import { ApiCreatedResponse } from '@nestjs/swagger';
import { Consultation } from './consultation/consultation';

@Controller('consultations')
export class ConsultationsController {

    constructor(private readonly consultationsService: ConsultationsService){}

    @ApiCreatedResponse({type: Consultation, isArray: true})
    @Get()
    async getAllConsultations(): Promise<Consultation[]>{
        return this.consultationsService.listAllConsultations();
    }
    
    @ApiCreatedResponse({type: Consultation})
    @Post()
    async createConsultation(@Body() consultation: Consultation): Promise<Consultation>{
        return this.consultationsService.createConsultation(consultation);
    }

}
