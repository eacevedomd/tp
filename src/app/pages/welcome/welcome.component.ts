import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent {
  
  public isShowingGreetings : boolean = true;

  greetingsHandle():void{

    this.isShowingGreetings = !this.isShowingGreetings;

  }
}
