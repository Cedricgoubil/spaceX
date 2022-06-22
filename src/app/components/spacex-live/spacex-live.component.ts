import { Component, Input, OnInit } from '@angular/core';
import { LaunchDto } from 'src/app/dto/LaunchDto';
import { UpcomingLaunchDto } from 'src/app/dto/UpcomingLaunchDto';

@Component({
  selector: 'app-spacex-live',
  templateUrl: './spacex-live.component.html',
  styleUrls: ['./spacex-live.component.css']
})
export class SpacexLiveComponent implements OnInit {
  @Input() videoId?: string;
  @Input() spaceXLaunchLiveYouTube?: string | any;

  constructor() { }

  ngOnInit(): void {
  }

}
