import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PENDING_STATUS, Task } from '../models/task.model';
import { TASKS } from '../data/tasks.data';
import { cloneAndAddTask, cloneAndRemoveTask, cloneAndToggleTaskStatus, generateTaskId } from './task.helper';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks: Task[] = TASKS; // Initial tasks data

  constructor() { }

  /**
   * Get the list of tasks.
   * @returns An observable that emits the list of tasks.
   */
  getTasks(): Observable<Task[]> {
    return of(this.tasks);
  }

  /**
   * Add a new task.
   * @param newTask - The new task to be added.
   * @returns An observable that emits the added task.
   */
  addTask(newTask: Omit<Task, 'id' | 'status'>): Observable<Task> {
    const task: Task = {
      id: generateTaskId(), // Generate a unique task ID
      status: PENDING_STATUS,
      ...newTask,
    };
    this.tasks = cloneAndAddTask(task, this.tasks); // Add the new task to the tasks list
    return of(task);
  }

  /**
   * Delete a task by its ID.
   * @param taskId - The ID of the task to be deleted.
   * @returns An observable indicating the success of the deletion.
   */
  deleteTask(taskId: number): Observable<null> {
    const taskIndex = this.tasks.findIndex((task) => task.id === taskId);
    if (taskIndex !== -1) {
      this.tasks = cloneAndRemoveTask(taskId, this.tasks); // Remove the task from the tasks list
    }
    return of(null);
  }

  /**
   * Toggle the status of a task by its ID (between pending and completed).
   * @param taskId - The ID of the task to toggle.
   * @returns An observable indicating the success of the status toggle.
   */
  toggleTaskStatus(taskId: number): Observable<null> {
    const taskIndex = this.tasks.findIndex((task) => task.id === taskId);
    if (taskIndex !== -1) {
      this.tasks = cloneAndToggleTaskStatus(taskId, this.tasks); // Toggle the task's status in the tasks list
    }
    return of(null);
  }
}
