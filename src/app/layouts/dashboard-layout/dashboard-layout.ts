import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Navbar } from '../../shared/navbar/navbar';
import { Sidebar } from '../../shared/sidebar/sidebar';

@Component({
  selector: 'app-dashboard-layout',
  standalone: true,
  imports: [
    Navbar,
    Sidebar,
    RouterOutlet
  ],
  templateUrl: './dashboard-layout.html',
  styleUrl: './dashboard-layout.scss'
})
export class DashboardLayout {}