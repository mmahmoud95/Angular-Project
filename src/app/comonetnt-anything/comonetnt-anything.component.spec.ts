import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComonetntAnythingComponent } from './comonetnt-anything.component';

describe('ComonetntAnythingComponent', () => {
  let component: ComonetntAnythingComponent;
  let fixture: ComponentFixture<ComonetntAnythingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComonetntAnythingComponent]
    });
    fixture = TestBed.createComponent(ComonetntAnythingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
