import {Component, Input} from '@angular/core';
import {CVEntryData} from './cventrydata';

@Component({
  selector: 'app-cventry',
  imports: [],
  templateUrl: './cventry.component.html',
  styleUrl: './cventry.component.less'
})
export class CVEntryComponent {
  @Input() public entry!: CVEntryData;
}
