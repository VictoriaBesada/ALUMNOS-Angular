import { CursosState } from '../cursos.state';
import { createSelector } from '@ngrx/store';
import { AppStore } from '../app.store';

export const getCourses = (state: AppStore) => state.cursos;

export const selectorLoadingCourses = createSelector(
    getCourses,
    (state: CursosState) => state.loading
);

export const selectorCourses = createSelector(
    getCourses,
    (state: CursosState) => state.cursos
);
export const selectCourseId = createSelector(
    getCourses,
    (state: CursosState) => state.cursos
);
