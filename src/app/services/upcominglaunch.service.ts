import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UpcomingLaunchDto } from '../dto/UpcomingLaunchDto';


@Injectable({
  providedIn: 'root'
})
export class UpcomingLauchService {
  private url = 'https://api.spacexdata.com/v4/launches/upcoming';


  constructor(
    private http: HttpClient
  ) { }

  getAllUpcomingLaunch() {
    return this.http
      .get<any>(this.url)
      .toPromise()
      .then((res) => res as UpcomingLaunchDto[]);
  }

  getUpcomingLaunch(id: string) {
    return this.http
      .get<any>(this.url + `/${id}`)
      .toPromise()
      .then((res) => res as UpcomingLaunchDto);
  }


}