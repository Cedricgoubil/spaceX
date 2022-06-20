import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { LaunchService } from 'src/app/services/launch.service';
import { CrewService } from 'src/app/services/crew.service';
import { RocketService } from 'src/app/services/rocket.service';
import { CrewDto } from 'src/app/dto/CrewDto';
import { LaunchDto } from 'src/app/dto/LaunchDto';
import { RocketDto } from 'src/app/dto/RocketDto';
import { CapsuleService } from 'src/app/services/capsule.service';
import { CapsuleDto } from 'src/app/dto/CapsuleDto';
import { PayloadDto } from 'src/app/dto/PayloadDto';
import { PayloadService } from 'src/app/services/payload.service';

@Component({
  selector: 'app-launch-details',
  templateUrl: './launch-details.component.html',
  styleUrls: ['./launch-details.component.css']
})
export class LaunchDetailsComponent implements OnInit {
  id?: string | any;
  launch?: LaunchDto | any;

  // To get crew
  crewMembersOnLaunch?: LaunchDto | any;
  allSpaceXCrewMembers?: CrewDto[] | any;
  crewOnBoardForLaunch?: CrewDto[] = [];

  // To get rockets
  rockets?: RocketDto | any;
  rocketForLaunch?: RocketDto | any;

  // To get capsules
  capsulesOnLaunch?: LaunchDto | any;
  allSpaceXCapsules?: CapsuleDto[] | any;
  capsulesOnBoardForLaunch?: CapsuleDto[] = [];

  // To get payloads
  payloadsOnLaunch?: LaunchDto | any;
  allSpaceXPayloads?: PayloadDto[] | any;
  payloadsOnBoardForLaunch?: PayloadDto[] = [];

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private launchService: LaunchService,
    private crewService: CrewService,
    private rocketService: RocketService,
    private capsuleService: CapsuleService,
    private payloadService: PayloadService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getLaunch();
    this.getCrew();
    this.getFlyingCrewForLaunch();
    this.getRockets();
    this.getRocketForLaunch();
    this.getCapsules();
    this.getCapsulesForLaunch();
    this.getPayloads();
    this.getPayloadForLaunch();
  }

  getLaunch() {
    this.launchService.getLaunch(this.id).then((resultData) => {
      this.launch = resultData
    })
  }

  getCrew() {
    this.crewService.getAllCrewMembers().then((resultData) => {
      this.allSpaceXCrewMembers = resultData
    })
  }

  getFlyingCrewForLaunch() {
    this.launchService.getLaunch(this.id).then((resultData) => {
      this.crewMembersOnLaunch = resultData?.crew.forEach((item: any) => {
        let crewMember = this.allSpaceXCrewMembers?.filter((itemLaunch: CrewDto) => itemLaunch.id === item)
        this.crewOnBoardForLaunch?.push(crewMember[0])
      })
    })
  }

  getRockets() {
    this.rocketService.getAllRockets().then((resultData) => {
      this.rockets = resultData
    });
  }

  getRocketForLaunch() {
    this.launchService.getLaunch(this.id).then((resultData) => {
      this.rocketForLaunch = this.rockets?.find((item: RocketDto) => item.id === resultData?.rocket)
    });
  }

  getCapsules() {
    this.capsuleService.getAllCapsules().then((resultData) => {
      this.allSpaceXCapsules = resultData
    });
  }

  getCapsulesForLaunch() {
    this.launchService.getLaunch(this.id).then((resultData) => {
      this.capsulesOnLaunch = resultData?.capsules.forEach((item: any) => {
        let capsule = this.allSpaceXCapsules?.filter((itemCapsule: CapsuleDto) => itemCapsule.id === item)
        this.capsulesOnBoardForLaunch?.push(capsule[0])
      })
    })
  }

  getPayloads() {
    this.payloadService.getAllPayloads().then((resultData) => {
      this.allSpaceXPayloads = resultData
    });
  }

  getPayloadForLaunch() {
    this.launchService.getLaunch(this.id).then((resultData) => {
      this.payloadsOnLaunch = resultData?.payloads.forEach((item: any) => {
        let payload = this.allSpaceXPayloads?.filter((itemPayload: PayloadDto) => itemPayload.id === item)
        this.payloadsOnBoardForLaunch?.push(payload[0])
      })
    })
  }

  navigateBack(): void {
    this.location.back();
  }
}