import { Component, OnInit } from '@angular/core';
import { UpcomingLauchService } from 'src/app/services/upcominglaunch.service';
import { UpcomingLaunchDto } from '../dto/UpcomingLaunchDto';

@Component({
  selector: 'app-upcominglaunch-list',
  templateUrl: './upcominglaunch-list.component.html',
  styleUrls: ['./upcominglaunch-list.component.css']
})
export class UpcominglaunchListComponent implements OnInit {
  allUpcomingLaunch!: UpcomingLaunchDto[];
  nextLauchCountdown: number | any;

  stringifiedDate?: string;

  constructor(
    private upcomingLauchService: UpcomingLauchService
  ) { }

  ngOnInit(): void {
    this.upcomingLauchService.getAllUpcomingLaunch().then((resultData) => {
      this.allUpcomingLaunch = resultData
    })
  }

  // countdownToLaunch: any = setInterval(() => {
  //   this.nextLauchCountdown--;
  //   if (this.nextLauchCountdown === 0) {
  //     clearInterval(this.countdownToLaunch);
  //   }
  // }, 100)

  countDownToNextLaunch() {
    let dateOfNextLaunch = new Date().getDate();
    let now = new Date().getDate();
    this.allUpcomingLaunch.forEach(launchDate => {
      if (launchDate.date_utc) {
        dateOfNextLaunch = launchDate.date_utc
      }
      //
      // console.log(stringifiedDate); //this is in milliseconds

    })
    // let stringifiedDate = JSON.stringify(dateOfNextLaunch);
    const difference = new Date(dateOfNextLaunch).getTime() - new Date(now).getTime()
    // let diffDays = Math.ceil(difference / 1000 * 60 * 60 * 24);

    let seconds = Math.floor(difference / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);

    return hours


    // console.log('difference', diffDays)
    // return diffDays


    // this.nextLauchCountdown = diffDays;


  }



}