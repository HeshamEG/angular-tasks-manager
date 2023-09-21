import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksLandingComponent } from './pages/tasks-landing/tasks-landing.component';
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NgFor } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { StatusFilterPipe } from '../pipes/status-filter.pipe';
import { MatDialogModule } from '@angular/material/dialog';
import { AddTaskModalComponent } from './pages/tasks-landing/components/add-task-modal/add-task-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { tasksManagerRoutes } from './tasks-manager.router';
import { ConfirmationModalComponent } from './components/confirmation-modal/confirmation-modal.component';
import { TasksListFilterComponent } from './pages/tasks-landing/components/tasks-list-filter/tasks-list-filter.component';
import { TasksListComponent } from './pages/tasks-landing/components/tasks-list/tasks-list.component';

@NgModule({
  declarations: [
    ConfirmationModalComponent,
    TasksListFilterComponent,
    AddTaskModalComponent,
    TasksLandingComponent,
    TasksListComponent,
    StatusFilterPipe,
  ],
  imports: [
    RouterModule.forChild(tasksManagerRoutes),
    MatSlideToggleModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatDialogModule,
    MatSelectModule,
    MatButtonModule,
    MatInputModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    CommonModule,
    FormsModule,
    NgFor,
  ],
})
export class TasksManagerModule {}
