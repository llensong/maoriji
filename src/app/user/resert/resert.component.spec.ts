import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResertComponent } from './resert.component';

describe('ResertComponent', () => {
  let component: ResertComponent;
  let fixture: ComponentFixture<ResertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
