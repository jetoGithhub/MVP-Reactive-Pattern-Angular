import { User } from '../../core/domain/user.model';

interface GeoLocation {
  lat: number;
  lng: number;
}

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: GeoLocation;
}

export interface ApiUserResponse {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
}

export class UserModel implements User {
  name: string;
  nickname: string;
  email: string;
  addres: string;
  constructor(response: ApiUserResponse) {}
}
