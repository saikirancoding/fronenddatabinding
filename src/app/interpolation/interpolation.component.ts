import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent {

  firstName="Ajay";
  lastName="Pathak";
  fullName=this.firstName+this.lastName;
  address="pune";
  laptop=['dell','Asus'];
}
