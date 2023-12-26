import { Component, Input } from '@angular/core';

@Component({
  selector: 'saludo',
  templateUrl: './saludo.component.html',
  styleUrl: './saludo.component.css'
})
export class SaludoComponent {
  @Input()
  public showGreetings! : boolean;

  public name : string = "Emiliano"

}
