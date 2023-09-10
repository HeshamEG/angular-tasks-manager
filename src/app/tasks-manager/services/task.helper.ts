import { COMPLETED_STATUS, PENDING_STATUS, Task } from "../models/task.model";

/**
 * Generate a unique task ID based on the current timestamp.
 * @returns A unique task ID.
 */
export function generateTaskId(): number {
  return Date.now();
}

/**
 * Clone the tasks array and add a new task.
 * @param newTask - The task to be added.
 * @param tasks - The existing tasks array.
 * @returns A new array with the added task.
 */
export function cloneAndAddTask(newTask: Task, tasks: Task[]): Task[] {
  return [newTask, ...tasks];
}

/**
 * Clone the tasks array and remove a task by ID.
 * @param taskId - The ID of the task to be removed.
 * @param tasks - The existing tasks array.
 * @returns A new array with the specified task removed.
 */
export function cloneAndRemoveTask(taskId: number, tasks: Task[]): Task[] {
  return tasks.filter((task) => task.id !== taskId);
}

/**
 * Clone the tasks array and toggle a task's status by ID.
 * @param taskId - The ID of the task to toggle.
 * @param tasks - The existing tasks array.
 * @returns A new array with the task's status toggled.
 */
export function cloneAndToggleTaskStatus(taskId: number, tasks: Task[]): Task[] {
  return tasks.map((task) => {
    if (task.id !== taskId) return task;
    return {
      ...task,
      status: task.status.id === COMPLETED_STATUS.id
        ? PENDING_STATUS
        : COMPLETED_STATUS,
    };
  });
}
