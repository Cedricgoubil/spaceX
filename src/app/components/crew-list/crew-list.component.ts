import { Component, Input, OnInit } from '@angular/core';
import { SpacexdatasService } from 'src/app/services/spacexdatas.service';
import { CrewDto } from '../dto/CrewDto';

@Component({
  selector: 'app-crew-list',
  templateUrl: './crew-list.component.html',
  styleUrls: ['./crew-list.component.css']
})
export class CrewListComponent implements OnInit {
  allCrewMembers!: CrewDto[];
  isSucceed?: boolean | any;

  constructor(
    private spacexdatasService: SpacexdatasService
  ) { }

  ngOnInit(): void {
    this.spacexdatasService.getAllCrewMembers().then((resultData) => {
      this.allCrewMembers = resultData
    })
  }
}