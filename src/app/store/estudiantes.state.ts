import { Estudiantes } from "../core/models/alumno";


export interface EstudiantesState {
    estudiantes: Estudiantes[];
    loading: boolean;
}