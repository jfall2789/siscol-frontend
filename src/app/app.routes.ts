import { Routes } from '@angular/router';

import { Login } from './features/auth/login/login';
import { DashboardLayout } from './layouts/dashboard-layout/dashboard-layout';
import { Home } from './features/dashboard/home/home';
import { IncidentList } from './features/incident/incident-list/incident-list';

export const routes: Routes = [

  // Login
  {
    path: '',
    component: Login
  },

  // Dashboard
  {
    path: 'dashboard',
    component: DashboardLayout,
    children: [

      // Home
      {
        path: '',
        component: Home
      },

      // Gestión de Incidencias
      {
        path: 'incidents',
        component: IncidentList
      }

    ]
  },

  // Redirección para rutas inexistentes
  {
    path: '**',
    redirectTo: ''
  }

];