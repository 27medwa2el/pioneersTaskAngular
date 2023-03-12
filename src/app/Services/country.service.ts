import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CountryModel } from 'src/app/Models/country';
import { Injectable } from '@angular/core';
import { CityModel } from '../Models/city';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private apiUrl = 'https://localhost:7232/api/country/';

  constructor(private http: HttpClient) { }

  getCountries(): Observable<CountryModel[]> {
    return this.http.get<CountryModel[]>(this.apiUrl).pipe(
      map((response: any[]) => response.map(data => this.mapCountry(data)))
    );
  }
  getCitiesByCountry(countryId: number): Observable<CityModel[]> {
    return this.http.get<CityModel[]>(`https://localhost:7232/api/city/?id=${countryId}`);
  }

  private mapCountry(data: any): CountryModel {
    const country = new CountryModel();
    country.id = data.id;
    country.name = data.name;
    return country;
  }
}
