import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdkDragDropDisabledSortingExample } from './clubs-list.component';

describe('ClubsListComponent', () => {
  let component: CdkDragDropDisabledSortingExample;
  let fixture: ComponentFixture<CdkDragDropDisabledSortingExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CdkDragDropDisabledSortingExample ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CdkDragDropDisabledSortingExample);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
