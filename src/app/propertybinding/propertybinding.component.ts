import { Component } from '@angular/core';

@Component({
  selector: 'app-propertybinding',
  templateUrl: './propertybinding.component.html',
  styleUrls: ['./propertybinding.component.css']
})
export class PropertybindingComponent {
  active=false;

  name="Ajay Pathak";

   ob={
    color:'red',
   };

   imagePath="https://picsum.photos/200/300";
}
