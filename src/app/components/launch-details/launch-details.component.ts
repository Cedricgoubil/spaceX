import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { SpacexdatasService } from 'src/app/services/spacexdatas.service';
import { LaunchDto } from '../dto/launchdto';

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
    private spacexdatasService: SpacexdatasService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.spacexdatasService.getLaunch(this.id).then((resultData) => {
      this.launch = resultData
      console.log(this.launch)
    }
    )
  }

  navigateBack(): void {
    this.location.back();
  }
}
