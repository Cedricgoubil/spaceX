import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LaunchDto } from '../components/dto/launchdto';
import { CrewDto } from '../components/dto/CrewDto';


@Injectable({
  providedIn: 'root'
})
export class SpacexdatasService {
  // private url = 'https://api.spacexdata.com/v4/';
  private urlLaunch = 'https://api.spacexdata.com/v4/launches';
  private urlCrew = 'https://api.spacexdata.com/v4/crew';

  constructor(
    private http: HttpClient
  ) { }

  getAllLaunches() {
    return this.http
      .get<any>(this.urlLaunch)
      .toPromise()
      .then((res) => res as LaunchDto[]);
  }

  getLaunch(id: string) {
    return this.http
      .get<any>(this.urlLaunch + `/${id}`)
      .toPromise()
      .then((res) => res as LaunchDto);
  }

  getAllCrewMembers() {
    return this.http
      .get<any>(this.urlCrew)
      .toPromise()
      .then((res) => res as CrewDto[]);
  }

  getCrewMember(id: string) {
    return this.http
      .get<any>(this.urlCrew + `/${id}`)
      .toPromise()
      .then((res) => res as CrewDto);
  }
}