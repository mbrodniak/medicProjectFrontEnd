
export class Doctor {

  private _id: number;
  private _firstName: string;
  private _lastName: string;
  private _specialization: string;

// constructor(doctorId: number, firstName: string, lastName: string, spec: string) {
//   this.doctorId = doctorId;
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.specialisation = spec;


  get id(): number {
    return this._id;
  }

  get firstName(): string {
    return this._firstName;
  }

  get lastName(): string {
    return this._lastName;
  }

  get specialization(): string {
    return this._specialization;
  }
}
