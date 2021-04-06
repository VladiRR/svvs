import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageBlockComponent } from './home-page-block.component';

describe('HomePageUiComponent', () => {
  let component: HomePageBlockComponent;
  let fixture: ComponentFixture<HomePageBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePageBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
