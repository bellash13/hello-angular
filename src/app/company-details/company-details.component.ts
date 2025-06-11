import { Component, Input } from '@angular/core';
import { Company } from '../company.model';
import { CommonModule, DatePipe } from '@angular/common';
import { CompanyEditComponent } from '../company-edit/company-edit.component';

@Component({
  selector: 'app-company-details',
  imports: [DatePipe,CommonModule],
  templateUrl: './company-details.component.html',
  styleUrl: './company-details.component.scss'
})
export class CompanyDetailsComponent {
  @Input()
  company!:Company;
  constructor(){
  }
}
