import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KlimatyzacjeComponent } from './klimatyzacje.component';

describe('KlimatyzacjeComponent', () => {
  let component: KlimatyzacjeComponent;
  let fixture: ComponentFixture<KlimatyzacjeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KlimatyzacjeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KlimatyzacjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
