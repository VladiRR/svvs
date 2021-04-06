import {ChangeDetectionStrategy, Component} from '@angular/core'

@Component({
  selector: 'svvs-home-page-ui',
  templateUrl: './home-page-block.component.html',
  styleUrls: ['./home-page-block.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageBlockComponent {
}
