import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ClubsRankingInterface } from 'src/models/requestObjects';

@Component({
  selector: 'app-top-clubs',
  templateUrl: './top-clubs.component.html',
  styleUrls: ['./top-clubs.component.css']
})
export class TopClubsComponent implements OnInit {

  Clubs:ClubsRankingInterface[];
  constructor(private api:ApiService) {
    
  }

  ngOnInit(): void {
    this.getTopClubs();
  }
  getTopClubs(){
    this.api.getTopClubs().subscribe(
      (data:ClubsRankingInterface[])=>{
        this.Clubs=data;
        this.Clubs=[...this.Clubs];
      }
    )
  }

}
