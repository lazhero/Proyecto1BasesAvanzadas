import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterUserInfoComponent } from './register-user-info.component';

describe('RegisterUserInfoComponent', () => {
  let component: RegisterUserInfoComponent;
  let fixture: ComponentFixture<RegisterUserInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterUserInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterUserInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
