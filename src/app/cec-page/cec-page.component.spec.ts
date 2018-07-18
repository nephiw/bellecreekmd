import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CecPageComponent } from './cec-page.component';

describe('CecPageComponent', () => {
  let component: CecPageComponent;
  let fixture: ComponentFixture<CecPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CecPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CecPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
