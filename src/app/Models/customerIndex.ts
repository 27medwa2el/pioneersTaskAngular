export class Customers {
    id: number;
    name: string;
    address: string;
    phoneNumber: string;
    cityId: number;
    countryId: number;
    cityName: string;
    countryName: string;
    constructor(data: any = {}) {
        this.id = data.id || 0;
        this.name = data.name || 0;
        this.address = data.address || '';
        this.phoneNumber=data.phoneNumber|| '';
        this.cityId=data.cityId|| '';
        this.countryId=data.countryId|| '';
        this.cityName=data.cityName|| '';
        this.countryName=data.countryName|| '';
      }
  }
  