import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { LaunchDto } from '../dto/launchdto';
import { LaunchService } from 'src/app/services/launch.service';
import { CrewService } from 'src/app/services/crew.service';
import { CrewDto } from '../dto/CrewDto';
import { RocketService } from 'src/app/services/rocket.service';
import { RocketDto } from '../dto/RocketDto';

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

  rocket?: RocketDto[] | any;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private launchService: LaunchService,
    private crewService: CrewService,
    private rocketService: RocketService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getLaunch();
    this.getCrew();
    this.getFlyingCrewForLaunch();
    this.getRockets();
    this.getRocketForLaunch();
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

  getRockets() {
    this.rocketService.getAllRockets().then((resultData) => {
      this.rocket = resultData;
      console.log('rocketService', this.rocket)
    })
  }

  getRocketForLaunch() {
    this.launchService.getLaunch(this.id).then((resultData) => {
      this.rocket = resultData;
      console.log('launchService', this.rocket.rocket)
    })
  }

  navigateBack(): void {
    this.location.back();
  }
}