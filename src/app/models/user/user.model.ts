import { ApiUser } from '../../core/domain/apis-models/api-user.model';
import { User } from '../../core/domain/user.model';



export class UserModel implements User {
  readonly name: string;
  readonly nickname: string;
  readonly email: string;
  readonly addres: string;
  readonly avatar =
    'https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/default-avatar.png';

  constructor(response: ApiUser.BodyResponse) {
    this.name = response?.name ?? '';
    this.nickname = response?.username ?? '';
    this.email = response?.email?.toLowerCase() ?? '';
    this.addres = this.setAddres(response.address);
  }

  private setAddres(addres: ApiUser.Address) {
    return `${addres?.street}, ${addres?.city} - ${addres?.zipcode}`;
  }
}
