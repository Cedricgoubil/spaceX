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
  allCrewMembers!: CrewDto[] | any
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
    this.getCrew()
  }

  getLaunch() {
    this.launchService.getLaunch(this.id).then((resultData) => {
      this.launch = resultData
      console.log('Crew', this.launch.crew[0]);
    })

  }

  getCrew() {
    this.crewService.getAllCrewMembers().then((resultData) => {
      this.allCrewMembers = resultData
    })
  }

  // getFlyingCrewForLaunch(crewId: string) {

  //     var contains = false;
  //     var result;

  //     this.getCrewForLaunch.forEach(crewMemberForLaunch => {
  //       crewMemberForLaunch.crew.forEach(function(innerData){
  //         if (innerData.term_id === id) {
  //           contains = true;
  //         }
  //       })
  //       if (contains) {
  //         result = obj.ticker.name;
  //         contains = false;
  //       }
  //     });

  //     return result;
  //   }

  getFlyingCrewForLaunch(crewId: CrewDto): boolean {

    if (this.getCrewForLaunch?.length === 0) {
      return false;
    }

    let returnValue = true;
    console.log('getFlyingCrewForLaunch', crewId);
    this.getCrewForLaunch?.forEach(crewMemberForLaunch => {
      if (crewMemberForLaunch?.crew?.findIndex((item: string) => item === crewId.id) < 0) {
        returnValue = false;
      }
    })
    return returnValue;
  }


  navigateBack(): void {
    this.location.back();
  }
}
