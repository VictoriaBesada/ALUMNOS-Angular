import { LoadStudentIdSuccess, LoadStudents, LoadStudentsInscriptionSuccess, LoadStudentsNoInscriptionSuccess, LoadStudentsSuccess } from '../action/estudiante.action';
import { createReducer, on } from "@ngrx/store";
import { EstudiantesState } from '../estudiantes.state';


export const InitialStateStudent: EstudiantesState = {
    loading: false,
    estudiantes: []
};

export const EstudianteReducer = createReducer(
    InitialStateStudent,
    on(LoadStudents, (state) => {
        return { ...state, loading: true };
    }),
    on(LoadStudentsSuccess, (state, { estudiantes }) => {
        let xx = { ...state, loading: false, estudiantes };
        return xx;
    }),
    on(LoadStudentIdSuccess, (state, { estudiantes }) => {
        return { ...state, loading: false, estudiantes };
    }),
    on(LoadStudentsInscriptionSuccess, (state, { estudiantes }) => {
        return { ...state, loading: false, estudiantes };
    }),
    on(LoadStudentsNoInscriptionSuccess, (state, { estudiantes }) => {
        return { ...state, loading: false, estudiantes };
    }),

)
