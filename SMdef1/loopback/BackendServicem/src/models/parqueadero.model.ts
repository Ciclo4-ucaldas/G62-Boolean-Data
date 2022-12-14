import {Entity, model, property, belongsTo, hasMany} from '@loopback/repository';
import {Apartamento} from './apartamento.model';
import {TipoVehiculo} from './tipo-vehiculo.model';

@model()
export class Parqueadero extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id_parqueadero?: string;

  @property({
    type: 'string',
    required: true,
  })
  no_garage: string;

  @property({
    type: 'string',
    required: true,
  })
  id_tipo_vehiculo: string;

  @property({
    type: 'string',
    required: true,
  })
  placa_id: string;

  @property({
    type: 'string',
    required: true,
  })
  color_vehiculo: string;

  @belongsTo(() => Apartamento)
  apartamentoId: string;

  @hasMany(() => TipoVehiculo)
  susTiposVehiculos: TipoVehiculo[];

  constructor(data?: Partial<Parqueadero>) {
    super(data);
  }
}

export interface ParqueaderoRelations {
  // describe navigational properties here
}

export type ParqueaderoWithRelations = Parqueadero & ParqueaderoRelations;
