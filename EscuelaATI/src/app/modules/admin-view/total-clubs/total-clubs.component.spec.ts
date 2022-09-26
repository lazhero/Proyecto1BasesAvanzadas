import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalClubsComponent } from './total-clubs.component';

describe('TotalClubsComponent', () => {
  let component: TotalClubsComponent;
  let fixture: ComponentFixture<TotalClubsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalClubsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotalClubsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
