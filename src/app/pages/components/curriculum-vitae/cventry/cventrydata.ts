import {Icons} from '../../../../enums/icons';

export interface CVEntryData {
  title: string,
  site: string,
  location?: string,
  startDate?: string,
  endDate?: string,
  description: string,
  grade?: number
  technologies?: Icons[]
  teamSize?: number
}
