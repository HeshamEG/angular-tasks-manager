import { createReducer, on } from '@ngrx/store';
import * as TaskActions from './task.actions';
import { Task, TaskStatus } from '../models/task.model';

// Define the shape of the Task State
export interface TaskState {
  tasks: Task[]; // An array of tasks
  currentStatus: TaskStatus | null; // The current status filter
}

// Define the initial state of the Task State
export const initialState: TaskState = {
  tasks: [], // Initially, there are no tasks
  currentStatus: null, // Initially, no status filter is applied
};

// Create the taskReducer using NgRx's createReducer function
export const taskReducer = createReducer(
  initialState,
  // Define how the state should be updated for each action
  on(TaskActions.loadTasksSuccess, (state, { tasks }) => ({
    ...state,
    tasks, // Update the tasks array when tasks are loaded successfully
  })),
  on(TaskActions.filterTasksByStatus, (state, { status }) => ({
    ...state,
    currentStatus: status, // Update the currentStatus when tasks are filtered by status
  }))
);
