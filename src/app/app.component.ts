import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public isShowingGreetings : boolean = true;

  greetingsHandle():void{

    this.isShowingGreetings = !this.isShowingGreetings;

  }
}
