import { CommonModule, DatePipe, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Company } from './company.model';
import { CompanyDetailsComponent } from "./company-details/company-details.component";

@Component({
  selector: 'app-root',
  imports: [NgIf, DatePipe, CommonModule, CompanyDetailsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title: string = 'Hi Angular';
  age = 15;
  myCompany: Company = {nom: "CNSSAP",dateCreation: new Date()};
}

