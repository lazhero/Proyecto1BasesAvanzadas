import { Component, OnInit } from '@angular/core';
import { ClubsRankingInterface } from 'src/models/requestObjects';
import { Input } from '@angular/core';
@Component({
  selector: 'app-clubs-table',
  templateUrl: './clubs-table.component.html',
  styleUrls: ['./clubs-table.component.css']
})
export class ClubsTableComponent implements OnInit {

  @Input()ClubsList:ClubsRankingInterface[]=
  [
    {Name:'Vida',
      Category: 'Arte',
      Amount: 4
    },
    {Name:'Vida',
      Category: 'Arte',
      Amount: 4
    },
    {Name:'Vida',
      Category: 'Arte',
      Amount: 4
    },
    {Name:'Vida',
      Category: 'Arte',
      Amount: 4
    }
  ];
  displayedColumns=['Name','Category','Amount']
  constructor() { }

  ngOnInit(): void {
  }

}
