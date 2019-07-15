import {Appointment} from './appointment';

export class ScheduleResponse {

  days: Array<number>;
  month: number;
  year: number;
  appointments: Array<Appointment>;

  // constructor(days: Array<number>, month: number, year: number, appointment: Array<Appointment>) {
  //   this.days = days;
  //   this.month = month;
  //   this.year = year;
  //   this.appointments = appointment;
  // }


}
