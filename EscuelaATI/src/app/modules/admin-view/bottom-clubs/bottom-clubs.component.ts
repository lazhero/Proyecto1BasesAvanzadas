import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ClubsRankingInterface } from 'src/models/requestObjects';

@Component({
  selector: 'app-bottom-clubs',
  templateUrl: './bottom-clubs.component.html',
  styleUrls: ['./bottom-clubs.component.css']
})
export class BottomClubsComponent implements OnInit {


  Clubs:ClubsRankingInterface[];
  constructor(private api:ApiService) {
    
  }

  ngOnInit(): void {
    this.getBottomClubs();
  }
  getBottomClubs(){
    this.api.getBottomClubs().subscribe(
      (data:ClubsRankingInterface[])=>{
        this.Clubs=data;
        this.Clubs=[...this.Clubs];
      }
    )
  }


}
