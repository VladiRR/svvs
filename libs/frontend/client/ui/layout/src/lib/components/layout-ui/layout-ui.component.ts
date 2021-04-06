import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'svvs-base-layout-ui',
  templateUrl: './layout-ui.component.html',
  styleUrls: ['./layout-ui.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutUiComponent {}
