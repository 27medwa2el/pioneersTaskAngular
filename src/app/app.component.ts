import { Component,ViewChild } from '@angular/core';
import { DxTabPanelComponent } from 'devextreme-angular';
import { FormControl, FormGroup } from '@angular/forms';
import { CountryModel } from 'src/app/Models/country';
import { CountryService } from 'src/app/Services/country.service';
import { CityModel } from 'src/app/Models/city';
import { Customer } from './Models/customer';
import { CustomerService } from './Services/customer.service';
import { alert } from 'devextreme/ui/dialog';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pioneer Task';
  constructor(private countryService: CountryService,private customerService : CustomerService,private router: Router) {}

}
