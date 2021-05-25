import { Component, Input, OnInit } from '@angular/core';
import { Router }  from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HomeComponent implements OnInit {

  @Input() user: any;
  
  constructor(public router: Router) {
  }

  ngOnInit(): void {
    console.log("user"+this.user);
  }

}
