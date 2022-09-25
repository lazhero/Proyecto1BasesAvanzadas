import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomClubsComponent } from './bottom-clubs.component';

describe('BottomClubsComponent', () => {
  let component: BottomClubsComponent;
  let fixture: ComponentFixture<BottomClubsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottomClubsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BottomClubsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
