import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessManageComponent } from './business-manage.component';

describe('BusinessManageComponent', () => {
  let component: BusinessManageComponent;
  let fixture: ComponentFixture<BusinessManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
