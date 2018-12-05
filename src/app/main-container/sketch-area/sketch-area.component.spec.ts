import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SketchAreaComponent } from './sketch-area.component';

describe('SketchAreaComponent', () => {
  let component: SketchAreaComponent;
  let fixture: ComponentFixture<SketchAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SketchAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SketchAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
