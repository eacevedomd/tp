import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-farewell',
  templateUrl: './farewell.component.html',
  styleUrl: './farewell.component.css'
})
export class FarewellComponent implements OnInit {
  
  public name : string = "";
  
  constructor(private route : ActivatedRoute){}

  ngOnInit(): void {
    this.name = this.route.snapshot.paramMap.get('name') ?? ""
  }


}
