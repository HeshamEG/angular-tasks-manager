import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Task } from '../../../../models/task.model';
import { addTask } from '../../../../store/task.actions';

@Component({
  selector: 'add-task-modal',
  templateUrl: './add-task-modal.component.html',
  styleUrls: ['./add-task-modal.component.scss'],
})
export class AddTaskModalComponent implements OnInit {
  // The form group for managing task input fields.
  taskForm!: FormGroup;

  constructor(private fb: FormBuilder, private store: Store) {}

  /**
   * Triggers the addition of a new task.
   * @param task - The task object to add.
   */
  triggerAddTask(task: Omit<Task, 'id' | 'status'>): void {
    this.store.dispatch(addTask({ task }));
  }

  /**
   * Recursively marks all form fields in a form group as touched.
   * @param formGroup - The form group to mark as touched.
   */
  markFormFieldsAsTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach((control) => {
      if (control instanceof FormGroup) {
        this.markFormFieldsAsTouched(control);
      } else {
        control.markAsTouched();
      }
    });
  }

  /**
   * Handles the form submission.
   * If the form is valid, it triggers the addition of a new task.
   * If the form is invalid, it marks all form fields as touched to display validation messages.
   */
  onSubmit() {
    if (this.taskForm.valid) {
      // Form is valid, perform the submission logic here.
      this.triggerAddTask(this.taskForm.value);
    } else {
      // Form is invalid, mark all form fields as touched to display validation messages.
      this.markFormFieldsAsTouched(this.taskForm);
    }
  }

  ngOnInit(): void {
    // Initialize the taskForm with form controls for 'title' and 'body'.
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      body: ['', Validators.required],
    });
  }
}
