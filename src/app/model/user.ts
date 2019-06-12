import {Patient} from './patient';

export class User {

  id: number;
  username: string;
  password: string;
  role: string;
  enabled: boolean;
  patient: Patient;

}
