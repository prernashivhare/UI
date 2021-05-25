import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators, FormControl } from '@angular/forms';
import { ConfigService } from '../config.service';
import { Customer } from '../customer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cust-details',
  templateUrl: './cust-details.component.html',
  styleUrls: ['./cust-details.component.css'],
  providers: [ ]
})
export class CustDetailsComponent implements OnInit {

  public  customers:  Array<Customer> = [];
  public searchResults: Array<Customer> =[];
  constructor() { 
  }

  

  //to save form data for add operation
  profileForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('',[
      Validators.required
    ]),
    level: new FormControl('Central Bank',[
      Validators.required
    ]),
    country: new FormControl('Australia'),
    controlPoint: new FormControl('BUSBKVIC',[
      Validators.required
    ]),
    setNumber: new FormControl(''),
    contact: new FormControl(''),
    deleteFlag: new FormControl('')
  });

  ctrlPoint = ["BUSBKVIC", "CPMAUST", "INSTAUS", "BUSBKQLD"];
  country = ["Australia", "Newzealand", "India", "UK", "Singapore"];
  level = ["Central Bank", "Commercial Bank", "Fund", "Fund Manager", "Local Corporate"]

  public show_dialog : boolean = false;
  public show_table : boolean = false;
  public show_header : boolean = false;

  //Displays form 
  addCustomer(){
    this.show_dialog = true;
    this.show_table= false;
  }

  //Edit and save new values
  editCustomer(row: any){
    console.log(row);
    this.updateCustomer(row);
  }

  //Sends post request for updating details of existing customer
  public updateCustomer(newCustomer: Customer){
    // this.configService.updateCustomer(newCustomer).subscribe(
    //   data  => {
    //   console.log("POST Request is successful ", data);
    //   alert("Customer details are updated successfully.");
    //   },
    //   error  => {
    //   console.log("Error", error);
    //   alert("Customer details are not updated.");
    //   }
    // );
  }
  
//Perform search operation
public  searchCustomerHelper(name: String){
  // this.configService.searchCustomer(name).subscribe((data:  Array<object>) => {
  //   if(data.length>0){
  //     this.customers  =  data;
  //     if(this.show_dialog){
  //       this.show_dialog = false;
  //     }
  //       this.show_table = true;
  //       this.show_header = true;
  //     console.log(data);
  //   } else{
  //     alert("No results found.");
  //   }
      
  // });
}
  searchCustomer(event: { keyCode: number; target: { value: any; }; }){
    if(event.keyCode == 13) {
      this.searchCustomerHelper(event.target.value);
    }
  }
  //Calls registerCustomer 
  onSubmit() {
    console.log(this.profileForm.value);
    this.registerCustomer(this.profileForm.value);
  }

  ngOnInit() {
    
  }

  //Sends post request for adding new customer
  public  registerCustomer(newCustomer: Customer){
    // this.configService.registerCustomer(newCustomer).subscribe(
    //   data  => {
    //   console.log("POST Request is successful ", data);
    //   alert("Customer details are saved successfully.");
    //   },
    //   error  => {
    //   console.log("Error", error);
    //   alert("Customer details are not saved.");
    //   }
    // );
  }

  //to show all rows
  public  getCustomers(){
    // this.configService.getAllCustomers().subscribe((data:  Array<object>) => {
    //     this.customers  =  data;
    //     console.log(data);
    // });
}

//To show complete data
  // getCustomer(){
  //   this.configService.getAllCust()
  //   .subscribe(cust => this.customers = cust);
  // }

}
