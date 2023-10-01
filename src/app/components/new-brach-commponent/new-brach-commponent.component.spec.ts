import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBrachCommponentComponent } from './new-brach-commponent.component';

describe('NewBrachCommponentComponent', () => {
  let component: NewBrachCommponentComponent;
  let fixture: ComponentFixture<NewBrachCommponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewBrachCommponentComponent]
    });
    fixture = TestBed.createComponent(NewBrachCommponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
