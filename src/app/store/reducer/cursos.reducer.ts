import { createReducer, on } from "@ngrx/store";
import { CursosState } from "../cursos.state";
import { CargaCursos, CargaCursoExitosa, CargaIdCursoExitosa } from "../action/curso.action";

export const InitialStateCourse: CursosState = {
    loading: false,
    cursos: []
};

export const CursoReducer = createReducer(
    InitialStateCourse,
    on(CargaCursos, (state) => {
        return { ...state, loading: true };
    }),
    on(CargaCursoExitosa, (state, { cursos }) => {
        let xx = { ...state, loading: false, cursos };
        return xx;
    }),
    on(CargaIdCursoExitosa, (state, { cursos }) => {
        return { ...state, loading: false, cursos };
    })

)
