import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'svvs-navbar-ui',
  templateUrl: './navbar-ui.component.html',
  styleUrls: ['./navbar-ui.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarUiComponent {}
