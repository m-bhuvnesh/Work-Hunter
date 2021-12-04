import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlDetailsComponent } from './fl-details.component';

describe('FlDetailsComponent', () => {
  let component: FlDetailsComponent;
  let fixture: ComponentFixture<FlDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
