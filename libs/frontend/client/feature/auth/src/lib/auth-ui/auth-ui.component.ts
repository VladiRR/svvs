import {ChangeDetectionStrategy, Component} from '@angular/core'

@Component({
  selector: 'svvs-auth-ui',
  templateUrl: './auth-ui.component.html',
  styleUrls: ['./auth-ui.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthUiComponent {
}
