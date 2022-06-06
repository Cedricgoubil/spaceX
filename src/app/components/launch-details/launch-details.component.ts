import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { LaunchDto } from '../dto/launchdto';
import { LaunchService } from 'src/app/services/launch.service';

@Component({
  selector: 'app-launch-details',
  templateUrl: './launch-details.component.html',
  styleUrls: ['./launch-details.component.css']
})
export class LaunchDetailsComponent implements OnInit {
  id!: string;
  launch?: LaunchDto

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private launchService: LaunchService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.launchService.getLaunch(this.id).then((resultData) => {
      this.launch = resultData
      console.log(this.launch)
    }
    )
  }

  navigateBack(): void {
    this.location.back();
  }
}
