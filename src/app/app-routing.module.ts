import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FarewellComponent } from './pages/farewell/farewell.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';

const routes: Routes = [
  {
    path: "",
    component: WelcomeComponent
  },
  {
    path: "despedida/:name",
    component: FarewellComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
