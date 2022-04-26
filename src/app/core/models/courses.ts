import { Estudiante } from "./alumno";
import { Profesor } from "./profesores";

export interface Curso {
    id: string;
    nombre: string;
    camada: number;
    descripcion: string;
    turno: string;
    fechaInicio: Date;
    fechaFin: Date;
    profesor: Profesor;
    estudiantes: Estudiante[];
}