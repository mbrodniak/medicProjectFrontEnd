// import { Component, OnInit } from '@angular/core';
// import {HttpService} from '../service/http.service';
// import {Patient} from '../model/patient';
// import {Router} from '@angular/router';
//
// @Component({
//   selector: 'app-registration',
//   templateUrl: './registration.component.html',
//   styleUrls: ['./registration.component.css']
// })
// export class RegistrationComponent implements OnInit {
//
//   fileToUpload: File = null;
//
//   constructor(private httpService: HttpService, private patient: Patient, private router: Router) {}
//   send(): boolean {
//     this.httpService.sendCredentials(this.patient).subscribe(data => {
//         console.log(data);
//       },
//           error => console.log(error)
//     );
//     return true;
//   }
//   sendFile(): boolean {
//     this.httpService.sendFile(this.fileToUpload).subscribe(data => {
//       console.log(data);
//     });
//     return true;
//   }
//   fileInput(event) {
//     this.fileToUpload = event.target.files[0];
//     console.log(this.fileToUpload.name);
//   }
//   register() {
//     if (this.send()) {
//       if (this.sendFile()) {
//         this.router.navigate(['login']);
//       }
//     }
//   }
//
//   ngOnInit(): void {
//   }
//
// }
