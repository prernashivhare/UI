import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators, FormControl } from '@angular/forms';
import { CreateDocumentService } from '../create-document.service';
import { Customer } from '../customer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-document',
  templateUrl: './create-document.component.html',
  styleUrls: ['./create-document.component.css'],
  providers: [ CreateDocumentService ]
})
export class CreateDocumentComponent implements OnInit {

  constructor(private createDocumentService: CreateDocumentService, private router: Router) { 
  }

  ngOnInit() {
   
  }
  data={};
  //to save form data for add operation
  generalTabForm = new FormGroup({
    name: new FormControl(''),
    age: new FormControl(''),
    gender: new FormControl(''),
    city: new FormControl(''),
    state: new FormControl(''),
    country: new FormControl('')
  });

  gender = ["...","M","F"];
  city = ["...","Pune","Mumbai","Banglore","Hyderabad"];
  state = ["...","Maharashtra","Karnataka","Andhra Pradesh"];
  country = ["...","India","US"];

  onSubmit(){
    console.log(this.generalTabForm.value);
    this.saveData(this.generalTabForm.value);
  }

  //Sends post request for saving customer data
  public  saveData(newDocument: Customer){
    this.createDocumentService.saveDocument(newDocument).subscribe(
      data  => {
      console.log("POST Request is successful ", data);
      alert("Document is saved successfully");
      },
      error  => {
      console.log("Error", error);
      alert("Document is not saved");
      }
    );
  }

  preview(){
    this.data=this.generalTabForm.value;
  }
 
  
}
