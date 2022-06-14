import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DragonDto } from '../components/dto/DragonDto';
@Injectable({
  providedIn: 'root'
})
export class DragonService {
  private url = 'https://api.spacexdata.com/v4/dragons';

  constructor(
    private http: HttpClient
  ) { }

  getAllDragons() {
    return this.http
      .get<any>(this.url)
      .toPromise()
      .then((res) => res as DragonDto[]);
  }

  getDragon(id: string) {
    return this.http
      .get<any>(this.url + `/${id}`)
      .toPromise()
      .then((res) => res as DragonDto);
  }
}