import {Component} from '@angular/core';
import {NgForOf} from '@angular/common';
import {Router} from '@angular/router';
import {routes} from '../../../../app-routing.module';

@Component({
  selector: 'app-linklist',
  imports: [
    NgForOf
  ],
  templateUrl: './linklist.component.html',
  styleUrl: './linklist.component.less'
})
export class LinklistComponent {
  constructor(private router: Router) {
  }
  readonly pages: {name: string, path?: string }[] = [
    {name: 'Home', path: routes[0].path},
    {name: 'AboutMe', path: routes[1].path},
    {name: 'JobExperience', path: routes[2].path},
    {name: 'Projects', path: routes[3].path}
  ];

  public routeTo(path: string = '') {
    this.router.navigate([path]);
  }
}
