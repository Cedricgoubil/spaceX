import { Component, Input, OnInit } from '@angular/core';
import { CrewService } from 'src/app/services/crew.service';
import { CrewDto } from '../dto/CrewDto';

@Component({
  selector: 'app-crew-list',
  templateUrl: './crew-list.component.html',
  styleUrls: ['./crew-list.component.css']
})
export class CrewListComponent implements OnInit {
  allCrewMembers!: CrewDto[] | any;
  isSucceed?: boolean | any;
  searchTerm?: string | any;
  firstPage?: number | any;

  constructor(
    private crewService: CrewService
  ) { }

  ngOnInit(): void {
    this.crewService.getAllCrewMembers().then((resultData) => {
      this.allCrewMembers = resultData
    })
  }

  clearInput() {
    this.searchTerm = '';
  }

  resetListToFirstPage() {
    this.firstPage = 1;
  }

  clearList() {
  }
}