/**
 * Represents the possible labels for task statuses.
 */
type TaskStatusLabels = 'COMPLETED' | 'PENDING';

/**
 * Represents a task in the application.
 */
export type Task = {
  id: number;           // Unique identifier for the task.
  title: string;        // Title of the task.
  body: string;         // Description or body of the task.
  status: TaskStatus;   // The status of the task.
};

/**
 * Represents a task status with an ID and a label.
 */
export type TaskStatus = {
  id: number;           // Unique identifier for the status.
  label: TaskStatusLabels; // The label for the status ('COMPLETED' or 'PENDING').
};

/**
 * An array of all possible task statuses.
 * This is marked as readonly to prevent accidental modifications.
 */
export const STATUS: Readonly<TaskStatus[]> = [
  {
    id: 0,
    label: 'COMPLETED',
  },
  {
    id: 1,
    label: 'PENDING',
  },
] as const;

/**
 * A constant representing the 'COMPLETED' task status.
 * It is marked as readonly to prevent modifications.
 */
export const COMPLETED_STATUS: Readonly<TaskStatus> = STATUS[0];

/**
 * A constant representing the 'PENDING' task status.
 * It is marked as readonly to prevent modifications.
 */
export const PENDING_STATUS: Readonly<TaskStatus> = STATUS[1];
