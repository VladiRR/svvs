import {ChangeDetectionStrategy, Component} from '@angular/core'
import {IAuthFacade} from '@svvs/frontend/shared/data-access/auth-store'

@Component({
  selector: 'svvs-auth-ui',
  templateUrl: './auth-block.component.html',
  styleUrls: ['./auth-block.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthBlockComponent {

  constructor(public authFacade: IAuthFacade) {
  }

  onLogin(loginPayload): void {
    console.log('login in login block', loginPayload)
    this.authFacade.signInSet({username: loginPayload.login, password: loginPayload.password})
    this.authFacade.signIn()
  }
}
