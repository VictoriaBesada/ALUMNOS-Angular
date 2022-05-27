import { Estudiantes } from "./alumno";
import { Profesor } from "./profesores";

export class Curso {
    constructor(
        public id: string,
        public camada: number,
        public nombre: string,
        public descripcion: string,
        public turno: string,
        public fechaInicio: Date,
        public fechaFin: Date,
        public imagen: ImageData,
        public active: boolean = false,
        public estudiantes: Estudiantes[] = [],
        public profesor: Profesor[] = [],
    ) { }
}

export interface Curso {
    id: string;
    nombre: string;
    camada: number;
    descripcion: string;
    turno: string;
    fechaInicio: Date;
    fechaFin: Date;
    imagen: ImageData;
    profesor: Profesor[];
    active: boolean;
    estudiantes: Estudiantes[];
}