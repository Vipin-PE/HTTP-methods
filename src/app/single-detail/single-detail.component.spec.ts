import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleDetailComponent } from './single-detail.component';

describe('SingleDetailComponent', () => {
  let component: SingleDetailComponent;
  let fixture: ComponentFixture<SingleDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingleDetailComponent]
    });
    fixture = TestBed.createComponent(SingleDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
