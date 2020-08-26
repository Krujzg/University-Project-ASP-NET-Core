import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TevekenysegFormComponent } from './tevekenyseg-form.component';

describe('TevekenysegFormComponent', () => {
  let component: TevekenysegFormComponent;
  let fixture: ComponentFixture<TevekenysegFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TevekenysegFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TevekenysegFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
