import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChlodnictwoComponent } from './chlodnictwo.component';

describe('ChlodnictwoComponent', () => {
  let component: ChlodnictwoComponent;
  let fixture: ComponentFixture<ChlodnictwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChlodnictwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChlodnictwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
