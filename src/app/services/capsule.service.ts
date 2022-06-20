import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CapsuleDto } from '../dto/CapsuleDto';


@Injectable({
  providedIn: 'root'
})
export class CapsuleService {
  private url = 'https://api.spacexdata.com/v4/capsules';


  constructor(
    private http: HttpClient
  ) { }

  getAllCapsules() {
    return this.http
      .get<any>(this.url)
      .toPromise()
      .then((res) => res as CapsuleDto[]);
  }

  getCapsule(id: string) {
    return this.http
      .get<any>(this.url + `/${id}`)
      .toPromise()
      .then((res) => res as CapsuleDto);
  }
}