import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LaunchDto } from '../components/dto/launchdto';


@Injectable({
  providedIn: 'root'
})
export class LaunchService {
  // private url = 'https://api.spacexdata.com/v4/';
  private url = 'https://api.spacexdata.com/v4/launches';


  constructor(
    private http: HttpClient
  ) { }

  getAllLaunch() {
    return this.http
      .get<any>(this.url)
      .toPromise()
      .then((res) => res as LaunchDto[]);
  }

  getLaunch(id: string) {
    return this.http
      .get<any>(this.url + `/${id}`)
      .toPromise()
      .then((res) => res as LaunchDto);
  }
}