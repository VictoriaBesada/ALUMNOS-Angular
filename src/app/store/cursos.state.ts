import { Curso } from "../core/models/courses";

export interface CursosState {
    cursos: Curso[];
    loading: boolean;
}