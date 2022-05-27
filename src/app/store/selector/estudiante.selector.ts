import { EstudiantesState } from '../estudiantes.state';
import { createSelector } from '@ngrx/store';
import { AppStore } from '../app.store';

export const getStudents = (state: AppStore) => state.estudiantes;


export const selectorLoadingStudents = createSelector(
    getStudents,
    (state: EstudiantesState) => state.loading
);

export const selectStudents = createSelector(
    getStudents,
    (state: EstudiantesState) => state.estudiantes
);

export const selectStudentId = createSelector(
    getStudents,
    (state: EstudiantesState) => state.estudiantes
);

// export const selectStudentInscriptos = createSelector(
//     getStudents,
//     (state: EstudiantesState) => state.estudiantes
// );

// export const selectStudentNoInscriptos = createSelector(
//     getStudents,
//     (state: EstudiantesState) => state.estudiantes
// );
