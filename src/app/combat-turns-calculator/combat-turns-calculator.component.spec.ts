import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CombatTurnsCalculatorComponent } from './combat-turns-calculator.component';

describe('CombatTurnsCalculatorComponent', () => {
  let component: CombatTurnsCalculatorComponent;
  let fixture: ComponentFixture<CombatTurnsCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CombatTurnsCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CombatTurnsCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
