import { IncidentType } from './incident-type.enum';
import { IncidentUrgency } from './incident-urgency.enum';

export interface IncidentRequest {

  title: string;

  description: string;

  location: string;

  type: IncidentType;

  urgency: IncidentUrgency;

}