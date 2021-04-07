import {ChangeDetectionStrategy, Component} from '@angular/core'

@Component({
  selector: 'svvs-auth-ui',
  templateUrl: './auth-block.component.html',
  styleUrls: ['./auth-block.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthBlockComponent {

  onLogin(loginPayload: {login: string, password: string}): void {
    console.log('login in login block', loginPayload)
  }
}
