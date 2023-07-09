import { Component } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  templateUrl: './eventbinding.component.html',
  styleUrls: ['./eventbinding.component.css']
})
export class EventbindingComponent {

  ob={
    color:"red",
  };

   hello()
   {
     //alert("Hello J21 Event binding");
     console.log("working in event binding");
     this.ob.color="green";
   }

   counter=0;
   incCounter()
   {
    this.counter++;
   }
}
