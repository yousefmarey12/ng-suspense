import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuspenseComponent } from './suspense.component';

describe('SuspenseComponent', () => {
  let component: SuspenseComponent;
  let fixture: ComponentFixture<SuspenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuspenseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuspenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
