import {Component, OnInit, AfterViewInit, ViewChild} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';
import { DialogComponent } from '../dialog/dialog.component';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
/**
 * @title Drag&Drop disabled sorting
 */
@Component({
  selector: 'clubs-list-component',
  templateUrl: './clubs-list.component.html',
  styleUrls: ['./clubs-list.component.css'],
})
export class ClubsListComponent implements OnInit {
  displayedColumns: string[] = ['clubName', 'category', 'favorites'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dialog : MatDialog, private api: ApiService){}

  ngOnInit():void{
    
    this.getAllClubs();
  }

  openDialog() {
    this.dialog.open(DialogComponent, {
      width: '30%'
    }).afterClosed().subscribe(()=>{
      this.getAllClubs();
    })

  }
  getAllClubs(){
    this.api.getClub()
    .subscribe({
      next:(res)=>{
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error:(err)=>{
        alert("Error obteniendo los datos")
      }
    })
  }

  addToFavorites(){
    console.log("Se agregó a favoritos")
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

