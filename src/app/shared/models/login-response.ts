import { User } from './user';
import { StatusTypes } from './status-types';

export interface ILoginResponse {

  status: StatusTypes,
  data: User
}

