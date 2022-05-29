import { Cursos } from "src/app/featured/cursos-folder/cursos-component/cursos-component.component";
// import { Personas } from "src/app/shared/clases/personas";

export class Estudiantes {
    constructor(
        public cursos: Array<Cursos>,
        public id: number,
        public nombre: string,
        public apellido: string,
        public correo: string,
        // public persona: Personas,
        public legajo: number,
        public asistencias: number,
        public imagen: string,
        public telefono: number,
        public direccion: string,

    ) { }
}

export interface Estudiantes {
    cursos: Array<Cursos>;
    id: number;
    nombre: string;
    apellido: string;
    correo: string;
    // persona: Personas;
    legajo: number;
    asistencias: number;
    imagen: string;
    telefono: number;
    direccion: string;
}


