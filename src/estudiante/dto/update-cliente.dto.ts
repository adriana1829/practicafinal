import { PartialType } from '@nestjs/mapped-types';
import { CreateClienteDto } from './create-cliente.dto';
import { IsBoolean, IsNotEmpty, IsOptional } from 'class-validator';

export class UpdateClienteDto extends PartialType(CreateClienteDto) {
    @IsBoolean()
    @IsOptional()
    estado?: boolean;
    @IsNotEmpty()
    id: string;

    @IsNotEmpty()
    cajaconcepto: string;

    @IsNotEmpty()
    descripcion: string;
}
