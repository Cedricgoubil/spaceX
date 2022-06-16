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

  constructor(
    private upcomingLauchService: UpcomingLauchService
  ) { }

  // https://www.npmjs.com/package/ngx-simple-countdown
  // https://spacecoastlaunches.com

  ngOnInit(): void {
    this.getUpcomingLaunch();
  }

  getUpcomingLaunch() {
    let now = Date.now()
    this.upcomingLauchService.getAllUpcomingLaunch().then((resultData) => {
      resultData.forEach(upcoming => {
        if (upcoming?.date_unix > now) {
          this.allUpcomingLaunch = resultData.slice(0, 1)
        } else {
          this.allUpcomingLaunch = resultData.slice(1, 2)
        }
      })
    })
  }

  // launchingTime(): boolean {
  //   let now = Date.now()
  //   console.log(now)
  //   this.upcomingLauchService.getAllUpcomingLaunch().then((resultData) => {
  //     resultData.forEach(upcoming => {
  //       if (upcoming?.date_unix > now) {
  //         return false
  //       }
  //       return true
  //     })
  //   })
  //   return false
  // }

}

// countDownToNextLaunch() {
//   let dateOfNextLaunch = new Date().getDate();
//   let now = new Date().getDate();
//   this.allUpcomingLaunch.forEach(launchDate => {
//     if (launchDate.date_utc) {
//       dateOfNextLaunch = launchDate.date_utc
//     }
//     //
//     // console.log(stringifiedDate); //this is in milliseconds

//   })
//   // let stringifiedDate = JSON.stringify(dateOfNextLaunch);
//   const difference = new Date(dateOfNextLaunch).getTime() - new Date(now).getTime()
//   // let diffDays = Math.ceil(difference / 1000 * 60 * 60 * 24);

//   let seconds = Math.floor(difference / 1000);
//   let minutes = Math.floor(seconds / 60);
//   let hours = Math.floor(minutes / 60);

//   return hours
// }

  // countdownToLaunch: any = setInterval(() => {
  //   this.nextLauchCountdown--;
  //   if (this.nextLauchCountdown === 0) {
  //     clearInterval(this.countdownToLaunch);
  //   }
  // }, 100)