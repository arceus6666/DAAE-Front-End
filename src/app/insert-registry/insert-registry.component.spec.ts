import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertRegistryComponent } from './insert-registry.component';

describe('InsertRegistryComponent', () => {
  let component: InsertRegistryComponent;
  let fixture: ComponentFixture<InsertRegistryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertRegistryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertRegistryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
