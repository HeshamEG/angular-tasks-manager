import { createAction, props } from '@ngrx/store';
import { TaskStatus, Task } from '../models/task.model';

export const loadTasks = createAction('[Task] Load Tasks');
export const loadTasksSuccess = createAction('[Task] Load Tasks Success', props<{ tasks: Task[] }>());
export const addTask = createAction('[Task] Add Task', props<{ task: Omit<Task, 'id' | 'status'> }>());
export const deleteTask = createAction('[Task] Delete Task', props<{ taskId: number }>());
export const toggleTaskStatus = createAction('[Task] Toggle TaskTaskStatus', props<{ taskId: number }>());
export const filterTasksByStatus = createAction('[Task] Filter Tasks byTaskStatus', props<{ status: TaskStatus }>());
