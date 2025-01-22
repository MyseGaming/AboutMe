import {CVEntryData} from '../pages/components/curriculum-vitae/cventry/cventrydata';

const JOBEXPERIENCE: CVEntryData[] = [
  {
    title: 'Anwendungsentwickler',
    site: 'Öffentliche Sachversicherung Braunschweig',
    location: 'Braunschweig',
    startDate: '01.06.2024',
    endDate: '09.12.2024',
    description: 'Als Anwendungsentwickler im Bereich Outputmanagement gehört es zu meinen Tätigkeiten unser Outputmanagementsystem zu betreuen, miteigenen Softwarelösungen zu erweitern und die verschiedenen Fachbereiche bei der Erstellung von Dokumententemplates zuunterstützen.'
  },
  {
    title: 'Softwareentwickler',
    site: 'Cloudflight GmbH',
    location: 'Hamburg',
    startDate: '01.05.2021',
    endDate: '31.05.2024',
    description: 'Als Softwareentwickler gehörte es neben der Implementierung verschiedenster Funktionalitäten zu meiner alltäglichen Arbeit, die technische Umsetzbarkeit von Anforderungen zu beurteilen und Lösungen dafür zu finden. Dabei arbeiteten wir agil, basierend auf dem SCRUM- oder Kanban-Modell. Bei den Zielplattformen der Softwarelösungen handelt es sich meist um eingebettete Systeme.'
  }
];

const EDUCATION: CVEntryData[] = [
  {
    title: 'Education 1',
    site: 'Site 1',
    location: 'Location 1',
    startDate: '2017-01-01',
    endDate: '2017-01-01',
    description: 'Education 1 description',
    grade: 1
  },
  {
    title: 'Education 2',
    site: 'Site 2',
    location: 'Location 2',
    startDate: '2027-02-02',
    endDate: '2027-02-02',
    description: 'Education 2 description',
    grade: 1
  }
]

export const CVData = {
  jobExperience: JOBEXPERIENCE,
  education: EDUCATION
};
