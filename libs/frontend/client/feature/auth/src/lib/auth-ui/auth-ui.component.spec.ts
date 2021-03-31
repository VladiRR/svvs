import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthUiComponent } from './auth-ui.component';

describe('AuthUiComponent', () => {
  let component: AuthUiComponent;
  let fixture: ComponentFixture<AuthUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
