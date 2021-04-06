import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileUiComponent } from './user-profile-ui.component';

describe('UserProfileUiComponent', () => {
  let component: UserProfileUiComponent;
  let fixture: ComponentFixture<UserProfileUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserProfileUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfileUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
