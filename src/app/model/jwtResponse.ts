import DateTimeFormat = Intl.DateTimeFormat;

export class JwtResponse {
  accessToken: string;
  type: string;
  username: string;
  firstName: string;
  lastName: string;
  data: string;
  id: number;
  email: string;
  authorities: string[];
}
