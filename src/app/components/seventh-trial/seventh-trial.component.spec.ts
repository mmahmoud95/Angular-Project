import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeventhTrialComponent } from './seventh-trial.component';

describe('SeventhTrialComponent', () => {
  let component: SeventhTrialComponent;
  let fixture: ComponentFixture<SeventhTrialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeventhTrialComponent]
    });
    fixture = TestBed.createComponent(SeventhTrialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
