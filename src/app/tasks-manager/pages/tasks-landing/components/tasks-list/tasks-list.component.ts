import { MatDialog } from '@angular/material/dialog';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  COMPLETED_STATUS,
  Task,
} from 'src/app/tasks-manager/models/task.model';
import { selectFilteredTasks } from 'src/app/tasks-manager/store/task.selectors';
import {
  deleteTask,
  toggleTaskStatus,
} from 'src/app/tasks-manager/store/task.actions';
import { ConfirmationModalComponent } from 'src/app/tasks-manager/components/confirmation-modal/confirmation-modal.component';
import { AddTaskModalComponent } from 'src/app/tasks-manager/pages/tasks-landing/components/add-task-modal/add-task-modal.component';

@Component({
  selector: 'tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['../../tasks-landing.component.scss'],
})
export class TasksListComponent {
  tasks$: Observable<Task[]>; // Observable to store the list of tasks
  COMPLETED_STATUS = COMPLETED_STATUS; // Predefined status for completed tasks

  constructor(public dialog: MatDialog, private store: Store) {
    // Initialize Observables by selecting data from the store
    this.tasks$ = this.store.select(selectFilteredTasks);
  }

  /**
   * Handler for deleting a task.
   * @param task - The task to be deleted.
   */
  onDeleteTask(task: Task) {
    // Open the confirmation dialog
    const dialogRef = this.dialog.open(ConfirmationModalComponent, {
      data: {
        message: 'Are you sure you want to delete this task?', // Pass a message to the confirmation delete dialog
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result === true) {
        // User confirmed the deletion
        this.store.dispatch(deleteTask({ taskId: task.id })); // Dispatch action to delete a task
      }
      // If result is false or undefined, user canceled the deletion
    });
  }

  /**
   * Handler for toggling the status of a task.
   * @param task - The task to toggle.
   */
  onToggleStatus(task: Task) {
    this.store.dispatch(toggleTaskStatus({ taskId: task.id })); // Dispatch action to toggle task status
  }

  /**
   * Opens the dialog to add a new task.
   */
  openAddTaskDialog(): void {
    this.dialog.open(AddTaskModalComponent, {});
  }

  /**
   * Track by function for task list rendering.
   * @param _index - The index of the task.
   * @param task - The task object.
   * @returns The unique ID of the task.
   */
  trackTaskById(_index: number, task: Task): number {
    return task.id; // Use the unique identifier of the item
  }
}
