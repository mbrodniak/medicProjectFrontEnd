import {Doctor} from './doctor';
import {Patient} from './patient';


export class Appointment {

  appointmentId: number;
  date: Date;
  doctor: Doctor;
  patientId: number;
  doctorId: string;
  patient: Patient;

}
