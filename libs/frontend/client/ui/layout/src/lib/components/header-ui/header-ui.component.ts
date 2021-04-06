import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'svvs-header-ui',
  templateUrl: './header-ui.component.html',
  styleUrls: ['./header-ui.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderUiComponent {}
