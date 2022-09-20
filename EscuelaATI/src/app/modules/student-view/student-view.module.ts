import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentViewRoutingModule } from './student-view-routing.module';
import { CdkDragDropDisabledSortingExample} from './clubs-list/clubs-list.component';
import { DragDropModule} from '@angular/cdk/drag-drop';


@NgModule({
  declarations: [
    CdkDragDropDisabledSortingExample
  ],
  imports: [
    CommonModule,
    StudentViewRoutingModule,
    DragDropModule
  ],

  bootstrap: [CdkDragDropDisabledSortingExample]
})
export class StudentViewModule { }
