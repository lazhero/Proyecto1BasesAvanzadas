import {Component, OnInit, AfterViewInit, ViewChild} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';

import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { FormControl,FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-register-club',
  templateUrl: './register-club.component.html',
  styleUrls: ['./register-club.component.css']
})
export class RegisterClubComponent implements OnInit {

  displayedColumns: string[] = ['clubName', 'category', 'favorites'];
  dataSource!: MatTableDataSource<any>;
  location:number=0;
  clubForm:FormGroup=new FormGroup(
    {
      club:new FormControl('',[Validators.required]),
      category:new FormControl('',[Validators.required])
    }
  )
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dialog : MatDialog, private api: ApiService){}

  ngOnInit():void{
    console.log(this.api)
    this.getAllClubs();
  }


  getAllClubs(){
    this.api.getClubLocation(this.location)
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
  add(){

  }
  setLocation(location){
    this.location=location
  }

}
