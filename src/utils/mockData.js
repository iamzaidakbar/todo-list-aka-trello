export const mockData = {
    columns: [
      {
        id: 'column-1',
        title: 'Backlog',
        tickets: [
          {
            id: 'ticket-1',
            title: 'Setup project environment',
            description: 'Install necessary packages and set up the project structure.',
            assignee: 'John Doe',
            priority: 'High',
            dueDate: '2024-08-20',
            labels: ['Setup', 'Development'],
            comments: [
              { user: 'Jane Smith', comment: 'Make sure to use the latest version of Node.js.' },
              { user: 'John Doe', comment: 'Environment setup completed.' },
            ],
          },
          {
            id: 'ticket-2',
            title: 'Design UI mockups',
            description: 'Create the initial design mockups for the dashboard.',
            assignee: 'Alice Johnson',
            priority: 'Medium',
            dueDate: '2024-08-22',
            labels: ['Design', 'UI/UX'],
            comments: [
              { user: 'Alice Johnson', comment: 'Started working on the mockups.' },
              { user: 'John Doe', comment: 'Please ensure the mockups are mobile-responsive.' },
            ],
          },
        ],
      },
      {
        id: 'column-2',
        title: 'To Do',
        tickets: [
          {
            id: 'ticket-3',
            title: 'Implement login functionality',
            description: 'Develop the login page and integrate authentication.',
            assignee: 'Jane Smith',
            priority: 'High',
            dueDate: '2024-08-25',
            labels: ['Development', 'Authentication'],
            comments: [
              { user: 'Jane Smith', comment: 'Starting implementation of the login feature.' },
            ],
          },
          {
            id: 'ticket-4',
            title: 'Create database schema',
            description: 'Design the database schema for the application.',
            assignee: 'John Doe',
            priority: 'Low',
            dueDate: '2024-08-28',
            labels: ['Database', 'Backend'],
            comments: [
              { user: 'John Doe', comment: 'Planning out the database schema.' },
            ],
          },
        ],
      },
      {
        id: 'column-3',
        title: 'In Progress',
        tickets: [
          {
            id: 'ticket-5',
            title: 'Build the dashboard component',
            description: 'Develop the main dashboard component with data visualization.',
            assignee: 'Alice Johnson',
            priority: 'High',
            dueDate: '2024-08-23',
            labels: ['Development', 'UI/UX'],
            comments: [
              { user: 'Alice Johnson', comment: 'Working on the dashboard layout.' },
              { user: 'John Doe', comment: 'Make sure to include real-time data updates.' },
            ],
          },
        ],
      },
      {
        id: 'column-4',
        title: 'Review',
        tickets: [
          {
            id: 'ticket-6',
            title: 'Code review for login feature',
            description: 'Conduct a code review for the login feature before merging.',
            assignee: 'Jane Smith',
            priority: 'Medium',
            dueDate: '2024-08-26',
            labels: ['Code Review', 'Authentication'],
            comments: [
              { user: 'John Doe', comment: 'Please address the comments on the pull request.' },
            ],
          },
        ],
      },
      {
        id: 'column-5',
        title: 'Completed',
        tickets: [
          {
            id: 'ticket-7',
            title: 'Setup CI/CD pipeline',
            description: 'Implement CI/CD pipeline for automated testing and deployment.',
            assignee: 'Alice Johnson',
            priority: 'High',
            dueDate: '2024-08-15',
            labels: ['DevOps', 'CI/CD'],
            comments: [
              { user: 'Alice Johnson', comment: 'CI/CD pipeline is now live.' },
              { user: 'Jane Smith', comment: 'Great work, this will streamline our deployments!' },
            ],
          },
        ],
      },
    ],
  };
  