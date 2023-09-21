import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as TaskActions from '../../store/task.actions';

@Component({
  selector: 'tasks-landing',
  templateUrl: './tasks-landing.component.html',
  styleUrls: ['./tasks-landing.component.scss'],
})
export class TasksLandingComponent implements OnInit {
  constructor(private store: Store) {}

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
