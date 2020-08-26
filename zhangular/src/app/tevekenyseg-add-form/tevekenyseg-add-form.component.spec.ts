import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TevekenysegAddFormComponent } from './tevekenyseg-add-form.component';

describe('TevekenysegAddFormComponent', () => {
  let component: TevekenysegAddFormComponent;
  let fixture: ComponentFixture<TevekenysegAddFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TevekenysegAddFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TevekenysegAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
