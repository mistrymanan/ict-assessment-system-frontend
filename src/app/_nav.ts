import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
  },
  {
    name: 'Code Editor',
    url: '/code-editor',
    icon: 'fa fa-code',
  },
  {
    name: 'Assignments',
    url: '',
    icon: 'fa fa-book',
    children: [
      {
        name: 'View Assignments',
        url: '/assignments',
        icon: 'fa fa-tasks'
      },
      {
        name: 'Create Assignment',
        url: '/assignments/create',
        icon: 'fa fa-plus'
      }
    ]
  }
];
