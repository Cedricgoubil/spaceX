import { Component, Input, OnInit, Output } from '@angular/core';
import { SpacexdatasService } from 'src/app/services/spacexdatas.service';
import { LaunchDto } from '../dto/launchdto';

@Component({
  selector: 'app-launch-list',
  templateUrl: './launch-list.component.html',
  styleUrls: ['./launch-list.component.css']
})
export class LaunchListComponent implements OnInit {
  allLaunches!: LaunchDto[];
  isSucceed?: boolean | any;

  constructor(
    private spacexdatasService: SpacexdatasService
  ) { }

  ngOnInit(): void {
    this.spacexdatasService.getAllLaunches().then((resultData) => {
      this.allLaunches = resultData




    })
  }

  displaySucceededLaunches() {
    if (!this.isSucceed) {
      this.isSucceed = true;
    } else {
      this.isSucceed = false;
    }
  }
}