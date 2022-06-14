import { Component, OnInit } from '@angular/core';
import { DragonService } from 'src/app/services/dragon.service';
import { DragonDto } from '../dto/DragonDto';

@Component({
  selector: 'app-dragons-list',
  templateUrl: './dragons-list.component.html',
  styleUrls: ['./dragons-list.component.css']
})
export class DragonsListComponent implements OnInit {
  allDragons!: DragonDto[] | any;

  constructor(
    private dragonService: DragonService
  ) { }

  ngOnInit(): void {
    this.dragonService.getAllDragons().then((resultData) => {
      this.allDragons = resultData
    })
  }
}
