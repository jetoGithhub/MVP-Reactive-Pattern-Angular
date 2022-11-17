export namespace ApiUser {
  interface GeoLocation {
    lat: number;
    lng: number;
  }

  export interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: GeoLocation;
  }

  export interface BodyResponse {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
  }
}
