import {CVEntryData} from '../pages/components/curriculum-vitae/cventry/cventrydata';
import {IconsLarge} from '../enums/iconsLarge';
import {IconsSmall} from '../enums/iconsSmall';

const PROJECTS: CVEntryData[] = [
  {
    title: 'Diese Website',
    site: 'Privat',
    technologies: [IconsLarge.Angular, IconsLarge.Typescript],
    teamSize: 1,
    description: 'In Arbeit. Dient als Portfolio und Darstellung meiner Arbeit.',
    link: { logo: IconsSmall.Git, link: 'https://github.com/MyseGaming/AboutMe' }
  },
  {
    title: 'Videospielentwicklung mit Unreal Engine',
    site: 'Privat',
    technologies: [IconsLarge.Unreal, IconsLarge.Cpp],
    teamSize: 1,
    description: 'In Arbeit. Entwicklung und Aufbereitung einer Spielidee sowie Umsetzung dieser in der Unreal Engine 5.',
    link: { logo: IconsSmall.Git, link: 'https://github.com/MyseGaming/Fever' }
  },
  {
    title: 'Embedded Linux Device Lifecycle Management',
    site: 'Cloudflight GmbH',
    technologies: [IconsLarge.Cpp, IconsLarge.Lua],
    teamSize: 8,
    description: 'Behebung von Bugs und Entwicklung neuer Features für ein embedded Linux-Betriebssystem eines im Markt etablierten Küchengerätes.'
  },
  {
    title: 'Entwicklung einer Desktopanwendung zur Steuerung von Hardware',
    site: 'Cloudflight GmbH',
    technologies: [IconsLarge.Angular, IconsLarge.Typescript, IconsLarge.Nest, IconsLarge.Electron],
    teamSize: 4,
    description: 'Es wurde eine Desktopanwendung entwickelt, die mit Hardware kommuniziert und diese konfigurieren kann. Als Schnittstellen wurden dafür FTP und OPC-UA genutzt. Des Weiteren kommuniziert die Software mit der Cloud, um Daten zu übertragen. Dabei wurden die Frameworks NestJS (Backend), Angular (Frontend) und Electron genutzt.'
  },
  {
    title: 'Entwicklung eines Embedded UIs',
    site: 'Cloudflight GmbH',
    technologies: [IconsLarge.React, IconsLarge.Typescript],
    teamSize: 4,
    description: 'Es wurde ein User Interface zur Steuerung von Embedded Hardware entwickelt. Das Frontend wurde mit React umgesetzt. Als Schnittstelle zur Hardware wurde ein Websocket verwendet.'
  }
];

export const ProjectsData = {
  projects: PROJECTS
};
