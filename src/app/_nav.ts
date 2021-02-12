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
    name: 'Add Classroom',
    url: '/classrooms/add',
    icon: 'fa fa-plus mr-1',
  },
  // {
  //   name: 'Instructor Dashboard',
  //   url: '/classrooms/instructor-dashboard',
  //   icon: 'fa fa-code',
  // },
  // {
  //   name:'Teaching',
  //   url:'',
  //   icon: 'fas fa-chalkboard-teacher',
  //   children:[]
  // }
  // ,{
  //   name:'Enrolled',
  //   url:'',
  //   icon: 'fas fa-chalkboard',
  //   children:[]
  // }
  // {
  //   name: 'Assignments',
  //   url: '',
  //   icon: 'fa fa-book',
  //   children: [
  //     {
  //       name: 'View Assignments',
  //       url: '/assignments',
  //       icon: 'fa fa-tasks'
  //     },
  //     {
  //       name: 'Create Assignment',
  //       url: '/assignments/create',
  //       icon: 'fa fa-plus'
  //     }
  //   ]
  // }
];
