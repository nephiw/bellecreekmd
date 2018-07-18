import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticesPageComponent } from './notices-page.component';

describe('NoticesPageComponent', () => {
  let component: NoticesPageComponent;
  let fixture: ComponentFixture<NoticesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoticesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
