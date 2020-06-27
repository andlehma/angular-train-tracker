import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtaCardComponent } from './eta-card.component';

describe('EtaCardComponent', () => {
  let component: EtaCardComponent;
  let fixture: ComponentFixture<EtaCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtaCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
