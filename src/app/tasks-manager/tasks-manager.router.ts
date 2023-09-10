import { Routes } from "@angular/router";
import { TasksListComponent } from "./pages/tasks-list/tasks-list.component";

// Define the routes for the Tasks Manager module
export const tasksManagerRoutes: Routes = [
  {
    path: '', // The default path for the module
    component: TasksListComponent, // The component to be displayed for this route
    children: [
      {
        path: '', // The child route path (empty in this case)
        redirectTo: '', // Redirect to the default path
        pathMatch: 'full' // Match the full path
      }
    ]
  },
];
