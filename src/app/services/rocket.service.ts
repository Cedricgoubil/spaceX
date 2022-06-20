import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RocketDto } from '../dto/RocketDto';


@Injectable({
  providedIn: 'root'
})
export class RocketService {
  private url = 'https://api.spacexdata.com/v4/rockets/';

  constructor(
    private http: HttpClient
  ) { }

  getAllRockets() {
    return this.http
      .get<any>(this.url)
      .toPromise()
      .then((res) => res as RocketDto);
  }

  getRocket(id: string) {
    return this.http
      .get<any>(this.url + `/${id}`)
      .toPromise()
      .then((res) => res as RocketDto);
  }
}