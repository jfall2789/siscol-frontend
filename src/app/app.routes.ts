import { Routes } from '@angular/router';

import { Login } from './features/auth/login/login';
import { DashboardLayout } from './layouts/dashboard-layout/dashboard-layout';
import { Home } from './features/dashboard/home/home';

export const routes: Routes = [

  {
    path: '',
    component: Login
  },

  {
    path: 'dashboard',
    component: DashboardLayout,
    children: [

      {
        path: '',
        component: Home
      }

    ]

  }

];