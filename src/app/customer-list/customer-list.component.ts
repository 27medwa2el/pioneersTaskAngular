import { Component } from '@angular/core';
import { Customers } from 'src/app/Models/customerIndex';
import { Customer  } from 'src/app/Models/customer';
import { CustomerService } from 'src/app/Services/customer.service';
import { DxDataGridModule } from 'devextreme-angular';
import { Router } from '@angular/router';
import { CountryModel } from '../Models/country';
import { CityModel } from '../Models/city';
import { CountryService } from '../Services/country.service';
@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent {
  customers: Customers[] =[]; 
  countriesModel: CountryModel[]=[];
  citiesModel: CityModel[]=[];
  selectedCountryID: number = 0;
  selectedCityID: number = 0;
  constructor(private countryService: CountryService,private customerService: CustomerService,private router: Router) { }
  loadingVisible = false;
  ngOnInit(): void {
    this.customerService.getAllCustomers().subscribe(a =>{
      this.customers=a;
    });
    this.loadCustomers();
    this.showLoadPanel();
    this.countryService.getCountries().subscribe((count) => {
      this.countriesModel = count;
    });
  }
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
  loadCustomers(): void {
   
    console.log(this.customers[0]);
}
AddCustomer(): void{
  this.router.navigate(['/customeradd']);
}
onShown() {
  setTimeout(() => {
    this.loadingVisible = false;
  }, 3000);
}
customer: Customer = {
  name: '',
  address: '',
  phoneNumber: '',
  cityId: 0,
  countryId: 0
};
saveChanges(event:any){
  const id = event.data.id; 
  
  this.customer.name=event.data.name;
    this.customer.address=event.data.address;
    this.customer.phoneNumber=event.data.phoneNumber;
    
    this.customerService.updateCustomer(this.customer,id).subscribe(
    (a) => {
      console.log('Customer data updated successfully' + a);
    },
    (error) => {
      console.log('Error occurred while updating customer data: ' + error);
    }
  );

 
}
onDeleteRow(event: any) {
  
  console.log(event.data.id);
  const id = event.data.id; // Get the ID of the row to be deleted
 this.customerService.deleteCustomer(id).subscribe(
    (a) => {
      console.log('Row deleted successfully' + a);
      // Reload the grid data after deleting the row
      
    },
   
  );
}
onHidden() {
  
}
getDefaultCountryValue  = (rowData: Customers) => {
  if (!rowData.countryId) {
    return this.customers[0].countryId;
}
return rowData.countryId;
}
showLoadPanel() {
 
  this.loadingVisible = true;
}
}
