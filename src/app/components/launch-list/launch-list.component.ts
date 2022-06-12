import { Component, Input, OnInit, Output } from '@angular/core';
import { LaunchService } from 'src/app/services/launch.service';
import { LaunchDto } from '../dto/launchdto';

@Component({
  selector: 'app-launch-list',
  templateUrl: './launch-list.component.html',
  styleUrls: ['./launch-list.component.css']
})
export class LaunchListComponent implements OnInit {
  allLaunches!: LaunchDto[] | any;
  isSucceed?: boolean | any;
  isFailed?: boolean | any;
  isUpcoming?: boolean | any;
  searchTerm?: string | any;
  firstPage?: number | any;

  numberOfCard?: number | any;
  loading?: boolean | any;

  constructor(
    private launchService: LaunchService
  ) { }

  ngOnInit(): void {
    this.initAmountOfCards(this.numberOfCard);
    // this.launchService.getAllLaunch().then((resultData) => {
    //   this.allLaunches = resultData
    // })
  }

  displaySucceededLaunches() {
    if (!this.isSucceed) {
      this.isSucceed = true;
      this.isFailed = false;
      this.isUpcoming = false;
    } else {
      this.isSucceed = false;
    }
  }

  displayFailedLaunches() {
    if (!this.isFailed) {
      this.isFailed = true;
      this.isSucceed = false;
      this.isUpcoming = false;
    } else {
      this.isFailed = false;
    }
  }

  displayUpcomingLaunches() {
    if (!this.isUpcoming) {
      this.isUpcoming = true;
      this.isSucceed = false;
      this.isFailed = false;
    } else {
      this.isUpcoming = false;
    }
  }

  clearInput() {
    this.searchTerm = '';
  }

  resetListToFirstPage() {
    this.firstPage = 1;
  }

  clearList() {
  }

  getMissionStatus(status: any) {
    switch (status) {
      case true:
        return '#1ea97c';
      case false:
        return '#ff5757';
      case null:
        return '#696cff'
    }
    return
  }

  initAmountOfCards(number: any) {
    number = this.numberOfCard;
    this.launchService.getAllLaunch().then((resultData) => this.allLaunches = resultData.slice(0, number));
    number = this.numberOfCard;
  }

  onScrollingFinished() {
    this.loadMore();
  }

  loadMore() {
    this.numberOfCard += 9
    console.log('loading more')
    if (!this.loading) {
      this.loading = true;
      debugger
      setTimeout(() => {
        this.initAmountOfCards(this.numberOfCard)
        this.loading = false;
        debugger
      }, 500);
    }
  }
}