import { CityModel } from "../Models/city";
import { CountryModel } from "../Models/country";

export class DataService {
    private data: any;
    countriesModel: CountryModel[]=[];
    citiesModel: CityModel[]=[];
    setCountries(data: any) {
      this.countriesModel = data;
    }
  
    getData() {
      return this.countriesModel;
    }
  }