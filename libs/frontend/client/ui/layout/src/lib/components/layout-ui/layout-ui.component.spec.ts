import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutUiComponent } from './layout-ui.component';

describe('BaseLayoutUiComponent', () => {
  let component: LayoutUiComponent;
  let fixture: ComponentFixture<LayoutUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LayoutUiComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
