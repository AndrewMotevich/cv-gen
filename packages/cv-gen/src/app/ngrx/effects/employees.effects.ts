import { Injectable, inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, catchError, of } from 'rxjs';
import * as EmployeesActions from '../actions/employees.actions';
import { employees } from './mock/employees.mock';

@Injectable()
export class EmployeesEffects {
  private actions$ = inject(Actions);

  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EmployeesActions.initEmployees),
      switchMap(() => {
        return of(
          EmployeesActions.loadEmployeesSuccess({ employees: employees })
        );
      }),
      catchError((error) => {
        console.error('Error', error);
        return of(EmployeesActions.loadEmployeesFailure({ error }));
      })
    )
  );
}
