import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PayloadDto } from '../dto/PayloadDto';


@Injectable({
  providedIn: 'root'
})
export class PayloadService {
  private url = 'https://api.spacexdata.com/v4/payloads';


  constructor(
    private http: HttpClient
  ) { }

  getAllPayloads() {
    return this.http
      .get<any>(this.url)
      .toPromise()
      .then((res) => res as PayloadDto[]);
  }

  getPayload(id: string) {
    return this.http
      .get<any>(this.url + `/${id}`)
      .toPromise()
      .then((res) => res as PayloadDto);
  }
}