import { Component, Input, OnInit } from '@angular/core';
//import { AddDetails } from '../add-details';
@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {

  @Input() formData: any;
  constructor() { }

  ngOnInit() {
  }

  onClickSubmit(uValue:String){}

}
