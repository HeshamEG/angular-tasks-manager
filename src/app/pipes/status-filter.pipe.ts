import { Pipe, PipeTransform } from '@angular/core';
import { TaskStatus } from '../tasks-manager/models/task.model';

/**
 * A custom Angular pipe for filtering task status labels.
 */
@Pipe({
  name: 'statusFilter',
  pure: true // Set to true for pure pipes
})
export class StatusFilterPipe implements PipeTransform {
  /**
   * Transforms the provided TaskStatus object into a lowercase string.
   * @param status - The TaskStatus object to be transformed.
   * @returns The lowercase label of the TaskStatus.
   */
  transform(status: TaskStatus): string {
    return status.label.toLocaleLowerCase();
  }
}
