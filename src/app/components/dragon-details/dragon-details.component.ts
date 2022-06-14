import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DragonService } from 'src/app/services/dragon.service';
import { DragonDto } from '../dto/DragonDto';

@Component({
  selector: 'app-dragon-details',
  templateUrl: './dragon-details.component.html',
  styleUrls: ['./dragon-details.component.css']
})
export class DragonDetailsComponent implements OnInit {
  id!: string;
  dragon?: DragonDto | any;

  constructor(
    private route: ActivatedRoute,
    private dragonService: DragonService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getDragon();
  }

  getDragon() {
    this.dragonService.getDragon(this.id).then((resultData) => {
      this.dragon = resultData
    })
  }
}
