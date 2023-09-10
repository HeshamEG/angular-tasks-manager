import { MatSelectChange } from '@angular/material/select';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { ConfirmationModalComponent } from '../../components/confirmation-modal/confirmation-modal.component';
import { AddTaskModalComponent } from '../../components/add-task-modal/add-task-modal.component';
import { TaskStatus, Task, STATUS, COMPLETED_STATUS } from '../../models/task.model';
import * as TaskActions from '../../store/task.actions';
import * as fromTask from '../../store/task.selectors';

@Component({
  selector: 'tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss']
})
export class TasksListComponent implements OnInit {
  tasks$: Observable<Task[]>; // Observable to store the list of tasks
  currentStatus$: Observable<TaskStatus | null>; // Observable to store the current task status filter
  statusOptions = STATUS; // Available task status options
  COMPLETED_STATUS = COMPLETED_STATUS; // Predefined status for completed tasks

  constructor(public dialog: MatDialog, private store: Store) {
    // Initialize Observables by selecting data from the store
    this.tasks$ = this.store.select(fromTask.selectFilteredTasks);
    this.currentStatus$ = this.store.select(fromTask.selectCurrentStatus);
  }

  /**
   * Handler for the change event of the status filter dropdown.
   * @param event - The MatSelectChange event containing the selected value.
   */
  onChangeStatus(event: MatSelectChange): void {
    const status = event.value; // Get the selected status
    this.store.dispatch(TaskActions.filterTasksByStatus({ status })); // Dispatch action to filter tasks by status
  }

  /**
   * Handler for deleting a task.
   * @param task - The task to be deleted.
   */
  onDeleteTask(task: Task) {
    // Open the confirmation dialog
    const dialogRef = this.dialog.open(ConfirmationModalComponent, {
      data: {
        message: 'Are you sure you want to delete this task?' // Pass a message to the confirmation delete dialog
      }
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result === true) {
        // User confirmed the deletion
        this.store.dispatch(TaskActions.deleteTask({ taskId: task.id })); // Dispatch action to delete a task
      }
      // If result is false or undefined, user canceled the deletion
    });
  }

  /**
   * Handler for toggling the status of a task.
   * @param task - The task to toggle.
   */
  onToggleStatus(task: Task) {
    this.store.dispatch(TaskActions.toggleTaskStatus({ taskId: task.id })); // Dispatch action to toggle task status
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

  /**
   * Dispatches an action to load tasks from the store.
   */
  triggerLoadTasks(): void {
    this.store.dispatch(TaskActions.loadTasks());
  }

  /**
   * Triggers the loading of tasks when the component is initialized.
   */
  ngOnInit(): void {
    this.triggerLoadTasks(); // Call the function to load tasks
  }
}
