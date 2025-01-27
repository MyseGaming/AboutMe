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
  },
  {
    title: 'Wissenschaftlicher Mitarbeiter',
    site: 'Institut für Nachrichtentechnik - TU-Braunschweig',
    location: 'Braunschweig',
    startDate: '01.03.2020',
    endDate: '30.04.2021',
    description: 'Als Wissenschaftlicher Mitarbeiter am Institut für Nachrichtentechnik war ich in der Abteilung Mobilfunk, Ltg. Prof. Kürner, tätig. Mein Forschungsgebiet galt der Untersuchung von V2X-Kommunikation (Vehicle-to-X). Schwerpunkte meiner Arbeit waren die Betreuung von Studenten bei verschiedenen studentischen Tätigkeiten und die Erstellung von Simulations- und Messszenarien und dessen Implementierung in die Institutseigene Simulationssoftware (.NET/ C#) für Mobilfunk SiMoNe (Simulator for Mobile Networks).'
  }
];

const EDUCATION: CVEntryData[] = [
  {
    title: 'Weiterbildung Automatisierung und Robotics',
    site: 'IU-Akademie',
    location: 'Online',
    startDate: 'März 2023',
    endDate: 'September 2023',
    description: 'Die Weiterbildung thematisiert Bereiche der Automatisierung, Messtechnik und Robotics. Neben diesen Feldern wird die Verwendung von Sensoren behandelt sowie Grundlagen der Regelungs- und Steuerungstechnik vermittelt. Abgeschlossen wird der Kurs mit Industriellen Robotern und einer kinematischen Betrachtung dieser.',
    grade: 1.7
  },
  {
    title: 'Master of Science in Medientechnik und Kommunikation',
    site: 'Technische Universität Braunschweig',
    location: 'Braunschweig',
    startDate: '2017',
    endDate: '2020',
    description: 'Aufbauend auf den Bachelor vertieft dieser Studiengang nachrichtenund medientechnische Themen. Darüber hinaus werden kommunikationswissenschaftliche Themen behandelt. In Wahlfächern fokussierte ich mich in meinem Studium auf Bereiche der Signalübertragung und der digitalen Signalverarbeitung. Konkrete, behandelte Themen sind bspw. Sprachkommunikation, Sprachdialogsysteme oder digitale Filter. In Rechnerübungen und dem medientechnischen Projektmodul wurde das Wissen durch praktische Aufgaben vertieft. - Titel der Masterarbeit: Reduktion des OFDM-Schutzintervalls für die Datenübertragung in Kabelnetzen',
    grade: 1.7
  },
  {
    title: '2-Fächer-Bachelor in Medienwissenschaften und Informationssystemtechnik',
    site: 'HBK-Braunschweig & TU-Braunschweig',
    location: 'Braunschweig',
    startDate: '2012',
    endDate: '2017',
    description: 'Im Hauptfach Medienwissenschaften wurden zum einen Grundlagen der Medientheorie und Kommunikationswissenschaften vermittelt. Zum anderen wurden technische Themen wie Nachrichtentechnik und Informationstechnik behandelt. Mit Informations-Systemtechnik als Nebenfach wurden die technischen Grundlagen mit Inhalten der Elektrotechnik und Informatik ergänzt. - Titel der Bachelorarbeit: Übertragung des Gothic mode von Gothic literature auf Videospiele',
    grade: 1.7
  }
]

export const CVData = {
  jobExperience: JOBEXPERIENCE,
  education: EDUCATION
};
