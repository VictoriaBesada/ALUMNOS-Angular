import { createAction, props } from "@ngrx/store";
import { Curso } from "src/app/core/models/courses";

export const CargaCursos = createAction(
    "[Curso] Carga curso"
);

export const CargaCursoExitosa = createAction(
    "[Curso] Carga curso exitosa",
    props<{ cursos: Curso[] }>()
);


export const CargaIdCursoExitosa = createAction(
    "[Curso] Carga Id de curso exitosa",
    props<{ cursos: Curso[] }>()
);