export class Customer {
    name: string;
    address: string;
    phoneNumber: string;
    cityId: number;
    countryId: number;
    constructor(data: any = {}) {
        this.name = data.name || 0;
        this.address = data.address || '';
        this.phoneNumber=data.phoneNumber|| '';
        this.cityId=data.cityId|| '';
        this.countryId=data.countryId|| '';
      }
  }
  