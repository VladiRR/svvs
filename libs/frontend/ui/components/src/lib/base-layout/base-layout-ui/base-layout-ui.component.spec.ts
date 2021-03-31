import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseLayoutUiComponent } from './base-layout-ui.component';

describe('BaseLayoutUiComponent', () => {
  let component: BaseLayoutUiComponent;
  let fixture: ComponentFixture<BaseLayoutUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseLayoutUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseLayoutUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
