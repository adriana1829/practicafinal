import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { Cliente } from './entities/cliente.entity';

@Injectable()
export class ClienteService {

  private clientes: Cliente[] = [
    { id: 1, cajaconcepto: 'caja1', descripcion: 'descripcion1' },
    { id: 2, cajaconcepto: 'caja2', descripcion: 'descripcion2' },
  ]

  create(createClienteDto: CreateClienteDto) {
    const cliente = new Cliente();
    cliente.id = Math.max(... this.clientes.map(elemento => elemento.id), 0) + 1;
    cliente.cajaconcepto = createClienteDto.cajaconcepto;
    cliente.descripcion = createClienteDto.descripcion;
    this.clientes.push(cliente);
    return cliente;
  }

  findAll(): Cliente[] {
    return this.clientes;
  }

  findOne(id: number) {
    const cliente = this.clientes.find(cliente => cliente.id === id);
    if (!cliente) throw new NotFoundException(`ID ${id} not found`)
    return cliente;
  }

  update(id2: number, updateClienteDto: UpdateClienteDto) {
    const { id, cajaconcepto, descripcion } = updateClienteDto;
    const cliente = this.findOne(id2);
    if (cajaconcepto) cliente.cajaconcepto = cajaconcepto;
    if (descripcion) cliente.descripcion = descripcion;

    this.clientes = this.clientes.map(elemento => {
      if (elemento.id === id2) return cliente;
      return elemento;
    })

    return cliente;

  }

  remove(id: number) {
    this.findOne(id);
    this.clientes = this.clientes.filter(elemento => elemento.id !== id);
  }
}
