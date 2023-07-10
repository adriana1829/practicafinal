import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateClienteDto {
    @IsString()
    @IsNotEmpty()
    id: string;

    @IsString()
    @IsNotEmpty()
    cajaconcepto: string;

    @IsString()
    @IsNotEmpty()
    descripcion: string;
}
