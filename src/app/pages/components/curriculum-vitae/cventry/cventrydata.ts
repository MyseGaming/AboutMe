import {IconsLarge} from '../../../../enums/iconsLarge';

export interface CVEntryData {
  title: string,
  site: string,
  location?: string,
  startDate?: string,
  endDate?: string,
  description: string,
  grade?: number
  technologies?: IconsLarge[]
  teamSize?: number
  link?: { logo?: string; link: string }
}
