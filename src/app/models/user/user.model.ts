import { ApiUser } from '../../core/domain/apis-models/api-user.model';
import { User } from '../../core/domain/user.model';

export class UserModel implements User {
  readonly name: string;
  readonly nickname: string;
  readonly email: string;
  readonly avatar =
    'https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/default-avatar.png';

  get addres() {
    return `${this.response.address?.street}, ${this.response.address?.city} - ${this.response.address?.zipcode}`;
  }

  constructor(private response: ApiUser.BodyResponse) {
    this.name = response?.name ?? '';
    this.nickname = response?.username ?? '';
    this.email = response?.email?.toLowerCase() ?? '';
  }
}
