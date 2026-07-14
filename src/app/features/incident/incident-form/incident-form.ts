import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  FormBuilder,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

import { Router, RouterLink } from '@angular/router';

import { IncidentService } from '../../../core/incidents/incident.service';

import { IncidentRequest } from '../../../core/incidents/models/incident-request.model';

import { IncidentType } from '../../../core/incidents/models/incident-type.enum';
import { IncidentUrgency } from '../../../core/incidents/models/incident-urgency.enum';

@Component({
  selector: 'app-incident-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './incident-form.html',
  styleUrl: './incident-form.scss'
})
export class IncidentForm {

  private readonly fb = inject(FormBuilder);

  private readonly router = inject(Router);

  private readonly incidentService = inject(IncidentService);

  incidentForm = this.fb.group({

    title: this.fb.nonNullable.control(

      '',

      [

        Validators.required,

        Validators.maxLength(100)

      ]

    ),

    description: this.fb.nonNullable.control(

      '',

      [

        Validators.required,

        Validators.maxLength(1000)

      ]

    ),

    location: this.fb.nonNullable.control(

      '',

      [

        Validators.required,

        Validators.maxLength(100)

      ]

    ),

    type: this.fb.control<IncidentType | null>(

      null,

      Validators.required

    ),

    urgency: this.fb.control<IncidentUrgency | null>(

      null,

      Validators.required

    )

  });

  save(): void {

    if (this.incidentForm.invalid) {

      this.incidentForm.markAllAsTouched();

      return;

    }

    const request = this.incidentForm.getRawValue() as IncidentRequest;

    this.incidentService.register(request).subscribe({

      next: () => {

        this.router.navigate(['/dashboard/incidents']);

      },

      error: (error) => {

        console.error('Error registrando incidencia', error);

      }

    });

  }

  cancel(): void {

    this.router.navigate(['/dashboard/incidents']);

  }

}