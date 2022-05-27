import { ActionReducerMap } from "@ngrx/store";
import { CursosState } from "./cursos.state";
import { EstudiantesState } from "./estudiantes.state";
import { CursoReducer } from "./reducer/cursos.reducer";
import { EstudianteReducer } from "./reducer/estudiantes.reducer";


export interface AppStore {
    cursos: CursosState;
    estudiantes: EstudiantesState;
}

export const ROOT_REDUCERS: ActionReducerMap<AppStore> = {
    cursos: CursoReducer,
    estudiantes: EstudianteReducer,
}