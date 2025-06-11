import { Component, EventEmitter, Output, Input } from '@angular/core';
import { Company } from '../company.model';

@Component({
  selector: 'app-company-edit',
  imports: [],
  templateUrl: './company-edit.component.html',
  styleUrl: './company-edit.component.scss',
})
export class CompanyEditComponent {
  
  @Input()
  company!:Company;

  @Output()
  onEditSuccess = new EventEmitter<Company>();

  edit() {
    const updatedCompany = {
      nom: 'CNSS',
      capitalSocial: 45000,
      address: 'Blv 30 Juin',
    };
    this.onEditSuccess.emit(updatedCompany);
  }
}
