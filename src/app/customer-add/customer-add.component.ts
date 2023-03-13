import { Component,ViewChild } from '@angular/core';
import { DxTabPanelComponent } from 'devextreme-angular';
import { FormControl, FormGroup } from '@angular/forms';
import { CountryModel } from 'src/app/Models/country';
import { CountryService } from 'src/app/Services/country.service';
import { CityModel } from 'src/app/Models/city';
import { Customer } from 'src/app/Models/customer';
import { CustomerService } from 'src/app/Services/customer.service';
import { alert } from 'devextreme/ui/dialog';
import { Router } from '@angular/router';
import{DataService}from 'src/app/Services/data.service'

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent {
  title = 'Pioneer Task';
  constructor(private countryService: CountryService,private customerService : CustomerService,private router: Router) {}
  @ViewChild(DxTabPanelComponent, { static: false }) tabPanel: DxTabPanelComponent|undefined = undefined;
  selectedCountryID: number = 0;
  selectedCityID: number = 0;
  public postResult: string = "none";
  currentTabIndex = 0;
  customerData: any = {};
  countriesModel: CountryModel[]=[];
  citiesModel: CityModel[]=[];
  onCountryChanged(data:any) {
    this.selectedCountryID=data.value;
    console.log('Selected cry:', data.value);
    this.countryService.getCitiesByCountry(data.value).subscribe(cit => {
      this.citiesModel = cit;
    });
    console.log('Selected country:', data.value);
  }
  onCityChanged(data:any) {
    this.selectedCityID=data.value;
    console.log('Selected city:', data.value);
  }

  

  ngOnInit() {
    this.countryService.getCountries().subscribe((count) => {
      this.countriesModel = count;
    });
    console.log(this.countriesModel[0]);
  }
 
   
   
  
  customer: Customer = {
    name: '',
    address: '',
    phoneNumber: '',
    cityId: 0,
    countryId: 0
  };
  next() {
    if (this.tabPanel) {
      const nextIndex = this.tabPanel.selectedIndex + 1;
      if (nextIndex < this.tabPanel.items.length) {
        this.tabPanel.selectedIndex = nextIndex;
      }
    }
  }


  confirm() {
    this.customer.name=this.customerData.Name;
    this.customer.address=this.customerData.Address;
    this.customer.phoneNumber=this.customerData.PhoneNumber;
    this.customer.cityId=this.selectedCityID;
    this.customer.countryId=this.selectedCountryID;
    console.log(this.customer);
    this.customerService.createCustomer(this.customer).subscribe( (response) => {
      console.log(response);
      alert("Success","Stautus")
    },
    (error) => {
      console.error(error);
      this.postResult = 'failed';
      alert("Failed","Stautus");
    });
    console.log("in the routing");
    setTimeout(() => {
      this.router.navigate(['/customerslist']);
    }, 3000);
   
  }
}
