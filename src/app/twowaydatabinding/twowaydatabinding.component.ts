import { Component } from '@angular/core';

@Component({
  selector: 'app-twowaydatabinding',
  templateUrl: './twowaydatabinding.component.html',
  styleUrls: ['./twowaydatabinding.component.css']
})
export class TwowaydatabindingComponent {

    title="learning two wayhhhh";
    name="Ajay";

    getChange()
    {
      console.log(this.title);
      this.title="Content change";
      console.log(this.title);

    }
}
