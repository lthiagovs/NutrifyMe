import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ConsultationsService } from './consultations.service';
import { ApiCreatedResponse } from '@nestjs/swagger';
import { Consultation } from './consultation/consultation';
import { GuardService } from 'src/guard/guard.service';

@Controller('consultations')
export class ConsultationsController {

    constructor(private readonly consultationsService: ConsultationsService){}

    @UseGuards(GuardService)
    @ApiCreatedResponse({type: Consultation, isArray: true})
    @Get()
    async getAllConsultations(): Promise<Consultation[]>{
        return this.consultationsService.listAllConsultations();
    }
    
    @UseGuards(GuardService)
    @ApiCreatedResponse({type: Consultation})
    @Post()
    async createConsultation(@Body() consultation: Consultation): Promise<Consultation>{
        return this.consultationsService.createConsultation(consultation);
    }

}
