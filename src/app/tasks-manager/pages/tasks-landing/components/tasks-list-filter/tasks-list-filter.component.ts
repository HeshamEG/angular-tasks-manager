import { MatSelectChange } from '@angular/material/select';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { filterTasksByStatus } from 'src/app/tasks-manager/store/task.actions';
import { STATUS } from 'src/app/tasks-manager/models/task.model';

@Component({
  selector: 'tasks-list-filter',
  templateUrl: './tasks-list-filter.component.html',
  styleUrls: ['../../tasks-landing.component.scss'],
})
export class TasksListFilterComponent {
  statusOptions = STATUS; // Available task status options

  constructor(private store: Store) {}

  /**
   * Handler for the change event of the status filter dropdown.
   * @param event - The MatSelectChange event containing the selected value.
   */
  onChangeStatus(event: MatSelectChange): void {
    const status = event.value; // Get the selected status
    this.store.dispatch(filterTasksByStatus({ status })); // Dispatch action to filter tasks by status
  }
}
