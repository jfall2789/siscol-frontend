import { IncidentPriority } from './incident-priority.enum';
import { IncidentStatus } from './incident-status.enum';
import { IncidentType } from './incident-type.enum';
import { IncidentUrgency } from './incident-urgency.enum';

export interface IncidentResponse {

  id: number;

  code: string;

  title: string;

  description: string;

  location: string;

  status: IncidentStatus;

  type: IncidentType;

  urgency: IncidentUrgency;

  priority: IncidentPriority;

}