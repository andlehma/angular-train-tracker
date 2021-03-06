import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StopSelectorComponent } from './stop-selector.component';

describe('StopSelectorComponent', () => {
  let component: StopSelectorComponent;
  let fixture: ComponentFixture<StopSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StopSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StopSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
