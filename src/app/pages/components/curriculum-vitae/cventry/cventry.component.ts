import {Component, Input} from '@angular/core';
import {CVEntryData} from './cventrydata';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-cventry',
  imports: [
    NgIf,
    NgForOf
  ],
  templateUrl: './cventry.component.html',
  styleUrl: './cventry.component.less'
})
export class CVEntryComponent {
  @Input() public entry!: CVEntryData;
}
