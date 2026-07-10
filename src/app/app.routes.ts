import { Routes } from '@angular/router';

import { authGuard } from './core/guards/auth-guard';

import { Login } from './features/auth/login/login';

import { DashboardLayout } from './layouts/dashboard-layout/dashboard-layout';

import { Home } from './features/dashboard/home/home';

import { IncidentList } from './features/incident/incident-list/incident-list';

export const routes: Routes = [

  {
    path: '',
    component: Login
  },

  {
    path: 'dashboard',

    canActivate: [authGuard],

    component: DashboardLayout,

    children: [

      {
        path: '',
        component: Home
      },

      {
        path: 'incidents',
        component: IncidentList
      }

    ]

  },

  {
    path: '**',
    redirectTo: ''
  }

];