import { COMPLETED_STATUS, PENDING_STATUS, Task } from "../models/task.model";

export const TASKS: Task[] = [
  {
    id: 0,
    title: 'Morning Routine',
    body: "Wake up early, exercise, and have a healthy breakfast.",
    status: {
      label: 'COMPLETED',
      id: COMPLETED_STATUS.id
    }
  },
  {
    id: 1,
    title: 'Work Tasks',
    body: "Review emails, attend meetings, and complete project tasks.",
    status: {
      label: 'PENDING',
      id: PENDING_STATUS.id
    }
  },
  {
    id: 2,
    title: 'Lunch Break',
    body: "Take a break, relax, and have a nutritious lunch.",
    status: {
      label: 'COMPLETED',
      id: COMPLETED_STATUS.id
    }
  },
  {
    id: 3,
    title: 'Afternoon Work',
    body: "Continue working on projects and tasks.",
    status: {
      label: 'COMPLETED',
      id: COMPLETED_STATUS.id
    }
  },
  {
    id: 4,
    title: 'Evening Exercise',
    body: "Go for a run or hit the gym for a workout.",
    status: {
      label: 'COMPLETED',
      id: COMPLETED_STATUS.id
    }
  },
  {
    id: 5,
    title: 'Dinner Time',
    body: "Enjoy a delicious dinner with family or friends.",
    status: {
      label: 'COMPLETED',
      id: COMPLETED_STATUS.id
    }
  }
];
