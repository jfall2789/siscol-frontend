import { CommonModule } from '@angular/common';
import {
  Component,
  OnInit,
  inject,
  ChangeDetectorRef
} from '@angular/core';

import { RouterLink } from '@angular/router';

import { IncidentService } from '../../../core/incidents/incident.service';
import { IncidentResponse } from '../../../core/incidents/models/incident-response.model';

@Component({
  selector: 'app-incident-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './incident-list.html',
  styleUrl: './incident-list.scss'
})
export class IncidentList implements OnInit {

  private readonly incidentService = inject(IncidentService);

  private readonly cdr = inject(ChangeDetectorRef);

  incidents: IncidentResponse[] = [];

  loading = false;

  ngOnInit(): void {

    this.loadIncidents();

  }

  loadIncidents(): void {

    this.loading = true;

    this.incidentService.findAll().subscribe({

      next: (response: IncidentResponse[]) => {

        this.incidents = [...response];

        this.loading = false;

        this.cdr.detectChanges();

      },

      error: (error) => {

        console.error(error);

        this.loading = false;

      }

    });

  }

}