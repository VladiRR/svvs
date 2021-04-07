import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginFormUiComponent } from './login-form-ui.component';

describe('LoginFormUiComponent', () => {
  let component: LoginFormUiComponent;
  let fixture: ComponentFixture<LoginFormUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginFormUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginFormUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
