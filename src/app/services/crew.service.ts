import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CrewDto } from '../dto/CrewDto';

@Injectable({
  providedIn: 'root'
})

export class CrewService {
  private url = 'https://api.spacexdata.com/v4/crew';

  constructor(
    private http: HttpClient
  ) { }

  getAllCrewMembers() {
    return this.http
      .get<any>(this.url)
      .toPromise()
      .then((res) => res as CrewDto[]);
  }

  getCrewMember(id: string) {
    return this.http
      .get<any>(this.url + `/${id}`)
      .toPromise()
      .then((res) => res as CrewDto);
  }
}