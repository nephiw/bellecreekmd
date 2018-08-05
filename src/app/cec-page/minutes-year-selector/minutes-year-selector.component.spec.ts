import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinutesYearSelectorComponent } from './minutes-year-selector.component';

describe('MinutesYearSelectorComponent', () => {
  let component: MinutesYearSelectorComponent;
  let fixture: ComponentFixture<MinutesYearSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinutesYearSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinutesYearSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
