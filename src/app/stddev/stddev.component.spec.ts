import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MediaComponent } from '../media/media.component';

import { StddevComponent } from './stddev.component';

describe('StddevComponent', () => {
  let component: StddevComponent;
  let fixture: ComponentFixture<StddevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StddevComponent],
      providers: [MediaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StddevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return stddev = 542.67 for the first input', () => {
    component.calcularStddev();
    expect(component.stddev1).toBe(542.67);
  });

  it('should return stddev = 59.06 for the second input', () => {
    component.calcularStddev();
    expect(component.stddev2).toBe(59.06);
  });
});
