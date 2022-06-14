import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/services/company.service';
import { CompanyDto } from '../dto/CompanyDto';

@Component({
  selector: 'app-company-info',
  templateUrl: './company-info.component.html',
  styleUrls: ['./company-info.component.css']
})
export class CompanyInfoComponent implements OnInit {
  companyInfo?: CompanyDto;

  constructor(
    private companyService: CompanyService
  ) { }

  ngOnInit(): void {
    this.companyService.getCompanyInfo().then((resultData) => {
      this.companyInfo = resultData
    })
  }

}
