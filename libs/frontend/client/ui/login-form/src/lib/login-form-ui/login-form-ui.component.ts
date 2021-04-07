import {Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter} from '@angular/core'
import {FormControl, FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'svvs-login-form-ui',
  templateUrl: './login-form-ui.component.html',
  styleUrls: ['./login-form-ui.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginFormUiComponent implements OnInit {

  loginForm: FormGroup

  @Output()
  login = new EventEmitter()

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      login: new FormControl('', [
        Validators.required
      ]),
      password: new FormControl('', [
        Validators.required
      ])
    })
  }

  onSubmit(): void {
    this.login.emit(this.loginForm.value)
  }

}
