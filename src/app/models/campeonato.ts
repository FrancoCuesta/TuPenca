import { Partido } from "./partido";

export interface Campeonato{
    id: string|null,
    nombre: string|null,
    descripcion: string|null,
    fechaInicio: string|null,
    fechaFin: string|null,
    partidos: Partido[]
}