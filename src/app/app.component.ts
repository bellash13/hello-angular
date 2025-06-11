import { CommonModule, DatePipe, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Company } from './company.model';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { CompanyEditComponent } from './company-edit/company-edit.component';

@Component({
  selector: 'app-root',
  imports: [CommonModule, CompanyDetailsComponent, CompanyEditComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title: string = 'Hi Angular';
  age = 15;
  myCompany!: Company;

  ngOnInit() {
    this.myCompany = { nom: 'CNSSAP', dateCreation: new Date() };
  }

  companyIsEdited(company: Company) {
    this.myCompany = company;
  }
}
