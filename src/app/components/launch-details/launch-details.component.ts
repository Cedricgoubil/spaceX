import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { LaunchDto } from '../dto/launchdto';
import { LaunchService } from 'src/app/services/launch.service';
import { CrewService } from 'src/app/services/crew.service';
import { CrewDto } from '../dto/CrewDto';

@Component({
  selector: 'app-launch-details',
  templateUrl: './launch-details.component.html',
  styleUrls: ['./launch-details.component.css']
})
export class LaunchDetailsComponent implements OnInit {
  id!: string;
  launch?: LaunchDto | any;
  launchForCrew?: LaunchDto | any;

  allCrewMembers?: CrewDto[] | any;
  crewMembersOnBoard?: CrewDto[] = [];

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private launchService: LaunchService,
    private crewService: CrewService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getLaunch();
    this.getCrew();
    this.getFlyingCrewForLaunch();
  }

  getLaunch() {
    this.launchService.getLaunch(this.id).then((resultData) => {
      this.launch = resultData
    })
  }

  getCrew() {
    this.crewService.getAllCrewMembers().then((resultData) => {
      this.allCrewMembers = resultData
    })
  }

  getFlyingCrewForLaunch() {
    this.launchService.getLaunch(this.id).then((resultData) => {
      this.launchForCrew = resultData?.crew.forEach((item: any) => {
        let crewMember = this.allCrewMembers?.filter((itemLaunch: CrewDto) => itemLaunch.id === item)
        this.crewMembersOnBoard?.push(crewMember[0])
      })
    })
  }

  navigateBack(): void {
    this.location.back();
  }
}