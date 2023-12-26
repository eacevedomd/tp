import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-saludo',
  templateUrl: './saludo.component.html',
  styleUrl: './saludo.component.css'
})
export class SaludoComponent {
  @Input()
  public showGreetings : boolean = true;

  public name : string = "Emiliano"

  public color : string = "red";

  changeColor(color : string):void{
    this.color = color;
  }

}
