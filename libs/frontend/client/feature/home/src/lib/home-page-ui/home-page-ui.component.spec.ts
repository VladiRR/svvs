import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageUiComponent } from './home-page-ui.component';

describe('HomePageUiComponent', () => {
  let component: HomePageUiComponent;
  let fixture: ComponentFixture<HomePageUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePageUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
