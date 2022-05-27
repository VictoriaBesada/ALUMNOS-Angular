import { Roles } from "./roles";

export class Personas {
    constructor(
        public id: number,
        public nombre: string,
        public apellido: string,
        public correo: string,
        public contrasena: string,
        public rol: Roles,
        public imagen: ImageData,
        public active: boolean = false
    ) { }


}

export interface Personas {

    id: number;
    nombre: string;
    apellido: string;
    correo: string;
    contrasena: string;
    rol: Roles;
    imagen: ImageData;
    active: boolean;



}