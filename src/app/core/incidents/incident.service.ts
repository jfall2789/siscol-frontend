import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';

import { IncidentRequest } from './models/incident-request.model';
import { IncidentResponse } from './models/incident-response.model';

@Injectable({
  providedIn: 'root'
})
export class IncidentService {

  private readonly http = inject(HttpClient);

  private readonly API = `${environment.apiUrl}/api/incidents`;

  findAll(): Observable<IncidentResponse[]> {

    return this.http.get<IncidentResponse[]>(this.API);

  }

  register(request: IncidentRequest): Observable<IncidentResponse> {

    return this.http.post<IncidentResponse>(
      this.API,
      request
    );

  }

  findById(id: number): Observable<IncidentResponse> {

    return this.http.get<IncidentResponse>(
      `${this.API}/${id}`
    );

  }

  update(
    id: number,
    request: IncidentRequest
  ): Observable<IncidentResponse> {

    return this.http.put<IncidentResponse>(
      `${this.API}/${id}`,
      request
    );

  }

  delete(id: number): Observable<void> {

    return this.http.delete<void>(
      `${this.API}/${id}`
    );

  }

}