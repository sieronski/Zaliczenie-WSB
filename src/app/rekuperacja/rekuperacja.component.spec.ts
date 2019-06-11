import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RekuperacjaComponent } from './rekuperacja.component';

describe('RekuperacjaComponent', () => {
  let component: RekuperacjaComponent;
  let fixture: ComponentFixture<RekuperacjaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RekuperacjaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RekuperacjaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
