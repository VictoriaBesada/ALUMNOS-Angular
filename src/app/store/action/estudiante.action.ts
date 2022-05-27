import { Estudiantes } from 'src/app/core/models/alumno';
import { createAction, props } from "@ngrx/store";

export const LoadStudents = createAction(
    "[Student] Load Students"
);

export const LoadStudentsSuccess = createAction(
    "[Student] Load Students Success",
    props<{ estudiantes: Estudiantes[] }>()
);

export const LoadStudentIdSuccess = createAction(
    "[Student] Load Student Id Success",
    props<{ estudiantes: Estudiantes[] }>()
);

export const LoadStudentsInscriptionSuccess = createAction(
    "[Student] Load Students Inscription Success",
    props<{ estudiantes: Estudiantes[] }>()
);

export const LoadStudentsNoInscriptionSuccess = createAction(
    "[Student] Load Students NO Inscription Success",
    props<{ estudiantes: Estudiantes[] }>()
);