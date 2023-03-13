import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Customer } from 'src/app/Models/customer';
import { Customers } from 'src/app/Models/customerIndex';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private apiUrl = 'https://localhost:7232/api/Customers';

  constructor(public http: HttpClient) { }

  createCustomer(customer: Customer): Observable<Customer> {
    
    
    return this.http.post<Customer>(this.apiUrl, customer);
  
}
getAllCustomers() {
   return this.http.get<Customers[]>(this.apiUrl);
//   return this.http.get<Customers[]>(`https://localhost:7232/api/customers`);
// }
}
deleteCustomer(id:number){
  return this.http.delete(this.apiUrl+'/'+id);
}
updateCustomer(customer:Customer,id:number){
  return this.http.put<Customer>(this.apiUrl+"/"+id,customer);
}
}
