import {ChangeDetectionStrategy, Component, Input} from '@angular/core'
import {IUser} from '@svvs/shared/utils/interfaces'
import {ApolloError} from '@apollo/client/core'

@Component({
  selector: 'svvs-user-profile-ui',
  templateUrl: './user-profile-ui.component.html',
  styleUrls: ['./user-profile-ui.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserProfileUiComponent {

  @Input()
  user: IUser

  @Input()
  failure: ApolloError
}
