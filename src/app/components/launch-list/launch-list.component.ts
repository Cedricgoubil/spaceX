import { Component, Input, OnInit, Output } from '@angular/core';
import { LaunchService } from 'src/app/services/launch.service';
import { LaunchDto } from '../dto/launchdto';

@Component({
  selector: 'app-launch-list',
  templateUrl: './launch-list.component.html',
  styleUrls: ['./launch-list.component.css']
})
export class LaunchListComponent implements OnInit {
  allLaunches!: LaunchDto[];
  isSucceed?: boolean | any;
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
    } else {
      this.isSucceed = false;
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