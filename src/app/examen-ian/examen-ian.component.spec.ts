import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamenIanComponent } from './examen-ian.component';

describe('ExamenIanComponent', () => {
  let component: ExamenIanComponent;
  let fixture: ComponentFixture<ExamenIanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamenIanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExamenIanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
