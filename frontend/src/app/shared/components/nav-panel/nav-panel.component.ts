import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nav-panel',
  templateUrl: './nav-panel.component.html',
  styleUrls: ['./nav-panel.component.less']
})
export class NavPanelComponent {

  constructor(private router: Router) {
  }

  navigate(uri: string) {
    this.router.navigate([uri]);
  }
}
