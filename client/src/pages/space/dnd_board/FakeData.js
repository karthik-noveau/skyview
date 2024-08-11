export const tasks = [
  {
    id: 1,
    col_id: 1,
    name: "Remove unused tests",
    priority_id: 1,
    following: true,
    assignees_ids: [],
  },
  {
    id: 2,
    col_id: 2,
    name: "Integrate Ant Design",
    priority_id: 2,
    assignees_ids: [1],
  },
  {
    id: 3,
    col_id: 2,
    name: "Fix typo in config",
    priority_id: 3,
    assignees_ids: [2],
  },
];

export const columns = [
  { id: 1, name: "Backlog", order: 1 },
  { id: 2, name: "To-Do", order: 2 },
  { id: 3, name: "In progress", order: 3 },
];
