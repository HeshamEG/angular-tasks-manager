import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

import * as TaskActions from './task.actions';
import { TaskService } from '../services/task.service';

@Injectable()
export class TaskEffects {
  constructor(private actions$: Actions, private taskService: TaskService) { }

  /**
   * Effect to load tasks from the service and dispatch a success action.
   * @returns An observable of the success action or an empty observable in case of an error.
   */
  loadTasks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TaskActions.loadTasks),
      switchMap(() =>
        this.taskService.getTasks().pipe(
          map((tasks) => TaskActions.loadTasksSuccess({ tasks })), // Dispatch a success action
          catchError(() => EMPTY) // Handle errors
        )
      )
    )
  );

  /**
   * Effect to add a task and trigger a task reload.
   * @returns An observable to trigger the task reload or an empty observable in case of an error.
   */
  addTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TaskActions.addTask),
      switchMap(({ task }) =>
        this.taskService.addTask(task).pipe(
          map(() => TaskActions.loadTasks()), // Trigger task reload
          catchError(() => EMPTY) // Handle errors
        )
      )
    )
  );

  /**
   * Effect to toggle the status of a task and trigger a task reload.
   * @returns An observable to trigger the task reload or an empty observable in case of an error.
   */
  toggleTaskStatus$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TaskActions.toggleTaskStatus),
      switchMap(({ taskId }) =>
        this.taskService.toggleTaskStatus(taskId).pipe(
          map(() => TaskActions.loadTasks()), // Trigger task reload
          catchError(() => EMPTY) // Handle errors
        )
      )
    )
  );

  /**
   * Effect to delete a task and trigger a task reload.
   * @returns An observable to trigger the task reload or an empty observable in case of an error.
   */
  deleteTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TaskActions.deleteTask),
      switchMap(({ taskId }) =>
        this.taskService.deleteTask(taskId).pipe(
          map(() => TaskActions.loadTasks()), // Trigger task reload
          catchError(() => EMPTY) // Handle errors
        )
      )
    )
  );
}
