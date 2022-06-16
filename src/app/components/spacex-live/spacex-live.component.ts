import { Component, Input, OnInit } from '@angular/core';
import { LaunchDto } from '../dto/launchdto';

@Component({
  selector: 'app-spacex-live',
  templateUrl: './spacex-live.component.html',
  styleUrls: ['./spacex-live.component.css']
})
export class SpacexLiveComponent implements OnInit {
  // @Input() spaceXLaunchLiveYouTube?: LaunchDto | any; Not in use

  constructor() { }

  ngOnInit(): void {
  }

}
