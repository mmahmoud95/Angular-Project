import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostafaIbrahimComponent } from './mostafa-ibrahim.component';

describe('MostafaIbrahimComponent', () => {
  let component: MostafaIbrahimComponent;
  let fixture: ComponentFixture<MostafaIbrahimComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MostafaIbrahimComponent]
    });
    fixture = TestBed.createComponent(MostafaIbrahimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
