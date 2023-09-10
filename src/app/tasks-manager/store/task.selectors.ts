import { createSelector, createFeatureSelector } from '@ngrx/store';
import { TaskState } from './task.reducer';

/**
 * Select the task state from the global application state.
 * @param state - The global application state.
 * @returns The task state slice from the global state.
 */
export const selectTaskState = createFeatureSelector<TaskState>('tasks');

/**
 * Select the list of tasks from the task state.
 * @param state - The task state.
 * @returns The list of tasks.
 */
export const selectTasks = createSelector(selectTaskState, (state) => state.tasks);

/**
 * Select the current status filter from the task state.
 * @param state - The task state.
 * @returns The current status filter.
 */
export const selectCurrentStatus = createSelector(selectTaskState, (state) => state.currentStatus);

/**
 * Select the filtered tasks based on the current status filter.
 * @param tasks - The list of all tasks.
 * @param currentStatus - The current status filter.
 * @returns The filtered tasks based on the current status.
 */
export const selectFilteredTasks = createSelector(
  selectTasks,
  selectCurrentStatus,
  (tasks, currentStatus) => {
    if (currentStatus === null)
      return tasks; // If no filter is applied, return all tasks
    return tasks.filter((task) => task.status.label === currentStatus.label);
  }
);
