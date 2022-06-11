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
  launch?: LaunchDto;
  allCrewMembers?: CrewDto[];
  getCrewForLaunch: LaunchDto[] = []

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private launchService: LaunchService,
    private crewService: CrewService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getLaunch();
  }

  getLaunch() {
    this.launchService.getLaunch(this.id).then((resultData) => {
      this.launch = resultData
      // console.log('Crew', this.launch.crew)
    })
  }

  getCrew() {
    this.crewService.getAllCrewMembers().then((resultData) => {
      this.allCrewMembers = resultData
    })
  }

  // getFlyingCrewForLaunch(crewId: string): boolean {
  //   if (this.getCrewForLaunch?.length === 0) {
  //     return false;
  //   }
  //   let returnValue = true;

  //   console.log('getFlyingCrewForLaunch', crewId);
  //   this.getCrewForLaunch?.forEach(crewMemberForLaunch => {
  //     console.log('getCrewForLaunch ', crewMemberForLaunch.crew);
  //     if (crewMemberForLaunch.crew.findIndex((item: string) => item === crewId) < 0) {
  //       returnValue = false;
  //     }
  //   });
  //   console.log('Is crew onboard ', returnValue);
  //   return returnValue;
  // }


  navigateBack(): void {
    this.location.back();
  }
}
