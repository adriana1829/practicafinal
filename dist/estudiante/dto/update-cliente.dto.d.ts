import { CreateClienteDto } from './create-cliente.dto';
declare const UpdateClienteDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateClienteDto>>;
export declare class UpdateClienteDto extends UpdateClienteDto_base {
    estado?: boolean;
    id: string;
    cajaconcepto: string;
    descripcion: string;
}
export {};
