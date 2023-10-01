import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostafaIbrahimBranchComponent } from './mostafa-ibrahim-branch.component';

describe('MostafaIbrahimBranchComponent', () => {
  let component: MostafaIbrahimBranchComponent;
  let fixture: ComponentFixture<MostafaIbrahimBranchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MostafaIbrahimBranchComponent]
    });
    fixture = TestBed.createComponent(MostafaIbrahimBranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
