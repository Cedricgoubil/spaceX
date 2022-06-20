import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CompanyDto } from '../dto/CompanyDto';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private url = 'https://api.spacexdata.com/v4/company';

  constructor(
    private http: HttpClient
  ) { }

  getCompanyInfo() {
    return this.http
      .get<any>(this.url)
      .toPromise()
      .then((res) => res as CompanyDto);
  }
}